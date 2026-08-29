(() => {
  const body = document.body, toggle = document.querySelector('#themeToggle');
  const saved = localStorage.getItem('portfolio-theme');
  if(saved === 'light') body.classList.add('light');
  toggle?.addEventListener('click', () => {
    body.classList.toggle('light');
    localStorage.setItem('portfolio-theme', body.classList.contains('light') ? 'light' : 'dark');
  });
  const menu = document.querySelector('.menu-toggle'), nav = document.querySelector('.navbar');
  menu?.addEventListener('click', () => {
    const open = nav.classList.toggle('menu-open');
    menu.setAttribute('aria-expanded', String(open));
  });
  document.querySelector('#year')?.append(new Date().getFullYear());
  const roles = ['Student','Developer','Python Developer','Web Developer'];
  const roleEl = document.querySelector('#roleText');
  if(roleEl){
    let i=0;
    setInterval(()=>{i=(i+1)%roles.length; roleEl.textContent=roles[i]},1800);
  }
})();