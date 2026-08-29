const API_BASE = '/api';
const loginView=document.querySelector('#loginView'), dashboardView=document.querySelector('#dashboardView'), loginForm=document.querySelector('#loginForm'), loginStatus=document.querySelector('#loginStatus');
async function api(path, options={}){const res=await fetch(API_BASE+path,{credentials:'include',headers:{'Content-Type':'application/json',...(options.headers||{})},...options});if(!res.ok)throw new Error((await res.json().catch(()=>({}))).message||'Request failed');return res.json()}
async function checkAuth(){try{await api('/auth/me');showDashboard()}catch{loginView.hidden=false;dashboardView.hidden=true}}
function showDashboard(){loginView.hidden=true;dashboardView.hidden=false;loadPanel('dashboard')}
loginForm?.addEventListener('submit',async e=>{e.preventDefault();loginStatus.textContent='Signing in…';try{await api('/auth/login',{method:'POST',body:JSON.stringify({email:loginEmail.value,password:loginPassword.value})});showDashboard()}catch(err){loginStatus.textContent=err.message}})
document.querySelector('#logoutBtn')?.addEventListener('click',async()=>{try{await api('/auth/logout',{method:'POST'})}finally{location.reload()}})
const titles={dashboard:'Dashboard',profile:'Profile',about:'About',skills:'Skills',projects:'Projects',services:'Services',experience:'Experience',education:'Education',certificates:'Certificates',achievements:'Achievements',social:'Social Links',resume:'Resume',contact:'Contact',settings:'Settings'};
document.querySelectorAll('[data-panel]').forEach(b=>b.addEventListener('click',()=>loadPanel(b.dataset.panel)));
document.querySelector('#adminMenu')?.addEventListener('click',()=>document.querySelector('.admin-shell').classList.toggle('menu-open'));
function loadPanel(name){
 document.querySelector('#panelTitle').textContent=titles[name]||name;
 const c=document.querySelector('#panelContent');
 if(name==='dashboard') c.innerHTML='<div class="card"><h2>Welcome to your private dashboard</h2><p>All editing actions below are intended to call protected backend endpoints. Visitors only receive public read-only data.</p></div>';
 else if(['profile','about','services','experience','education','social','contact','settings'].includes(name)) c.innerHTML=formFor(name);
 else if(['skills','projects','certificates','achievements'].includes(name)) c.innerHTML=managerFor(name);
 else if(name==='resume') c.innerHTML=`<div class="card"><h2>Resume Manager</h2><p>Upload PDF only through the authenticated backend.</p><label class="dropzone">Drag & Drop or Choose File<input type="file" accept="application/pdf" hidden></label><br><button class="btn">Save Resume</button></div>`;
}
function formFor(name){return `<div class="card"><h2>Edit ${titles[name]}</h2><div class="admin-form-grid">${['Name','Bio','Location','Email','Role','Description'].map((x,i)=>`<label class="admin-field ${i===1||i===5?'full':''}">${x}<input ${x==='Bio'||x==='Description'?'type="text"':''} placeholder="[YOUR ${x.toUpperCase()}]"></label>`).join('')}</div><br><button class="btn">Save Changes</button></div>`}
function managerFor(name){return `<div class="card"><h2>${titles[name]} Manager</h2><p>Add, edit, delete and reorder items. Drag & drop/file uploads must be processed by authenticated backend endpoints.</p><div class="admin-list"><div class="admin-item"><span>[PLACEHOLDER ITEM]</span><span><button class="icon-btn">↕</button> <button class="icon-btn">Edit</button> <button class="icon-btn">×</button></span></div></div><br><button class="btn">Add New</button></div>`}
checkAuth();