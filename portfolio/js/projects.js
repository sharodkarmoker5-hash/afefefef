const projects = [
 {id:1,name:'AI Personal Assistant',category:'AI',description:'Placeholder project — replace with the real project description.',technologies:['Python','AI'],features:['Feature 1','Feature 2'],image:'assets/images/project-placeholder.svg',github:'#',demo:'#'},
 {id:2,name:'Student Productivity Dashboard',category:'Web',description:'Placeholder project — replace with the real project description.',technologies:['HTML','CSS','JavaScript'],features:['Task tracking','Productivity view'],image:'assets/images/project-placeholder.svg',github:'#',demo:'#'},
 {id:3,name:'AI Chat Application',category:'AI',description:'Placeholder project — replace with the real project description.',technologies:['JavaScript','AI'],features:['Chat UI','AI integration'],image:'assets/images/project-placeholder.svg',github:'#',demo:'#'},
 {id:4,name:'Portfolio Website',category:'Web',description:'Placeholder project — replace with the real project description.',technologies:['HTML','CSS','JavaScript'],features:['Responsive design','Admin-ready architecture'],image:'assets/images/project-placeholder.svg',github:'#',demo:'#'}
];
const grid=document.querySelector('#projectGrid');
function render(filter='All'){
 grid.innerHTML='';
 projects.filter(p=>filter==='All'||p.category===filter).forEach(p=>{
  const card=document.createElement('article'); card.className='card project-card';
  card.innerHTML=`<img src="${p.image}" alt="${p.name} preview"><div class="project-body"><p class="eyebrow">${p.category}</p><h3>${p.name}</h3><p>${p.description}</p><div class="tags">${p.technologies.map(t=>`<span class="tag">${t}</span>`).join('')}</div><div class="project-actions"><button class="btn details" data-id="${p.id}">Details</button><a class="btn btn-outline" href="${p.github}" target="_blank" rel="noopener">GitHub</a></div></div>`;
  grid.append(card);
 });
}
render();
document.querySelectorAll('.filter').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(x=>x.classList.remove('active'));b.classList.add('active');render(b.dataset.filter)}));
const modal=document.querySelector('#projectModal');
grid.addEventListener('click',e=>{const btn=e.target.closest('.details');if(!btn)return;const p=projects.find(x=>x.id==btn.dataset.id);document.querySelector('#modalImage').src=p.image;document.querySelector('#modalImage').alt=p.name;document.querySelector('#modalCategory').textContent=p.category;document.querySelector('#modalTitle').textContent=p.name;document.querySelector('#modalDescription').textContent=p.description;document.querySelector('#modalTech').textContent=p.technologies.join(' · ');document.querySelector('#modalFeatures').textContent=p.features.join(' · ');document.querySelector('#modalGithub').href=p.github;document.querySelector('#modalDemo').href=p.demo;modal.classList.add('open');modal.setAttribute('aria-hidden','false')});
function closeModal(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true')}
document.querySelector('.modal-close')?.addEventListener('click',closeModal);modal?.addEventListener('click',e=>e.target===modal&&closeModal());document.addEventListener('keydown',e=>e.key==='Escape'&&closeModal());