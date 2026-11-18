
(() => {
 const root=document.documentElement, body=document.body;
 const savedTheme=localStorage.getItem('wellness-theme')||'light';
 const savedDir=localStorage.getItem('wellness-dir')||'ltr';
 root.dataset.theme=savedTheme; root.dir=savedDir; body.classList.toggle('rtl',savedDir==='rtl');
 const themeBtn=document.querySelector('[data-theme-toggle]'), dirBtn=document.querySelector('[data-dir-toggle]');
 function updateButtons(){if(themeBtn)themeBtn.textContent=root.dataset.theme==='dark'?'☼':'☾';if(dirBtn)dirBtn.textContent=root.dir==='rtl'?'LTR':'RTL';}
 themeBtn?.addEventListener('click',()=>{root.dataset.theme=root.dataset.theme==='dark'?'light':'dark';localStorage.setItem('wellness-theme',root.dataset.theme);updateButtons()});
 dirBtn?.addEventListener('click',()=>{root.dir=root.dir==='rtl'?'ltr':'rtl';body.classList.toggle('rtl',root.dir==='rtl');localStorage.setItem('wellness-dir',root.dir);updateButtons()});
 updateButtons();
 const menu=document.querySelector('.menu-toggle'), mobile=document.querySelector('.mobile-nav');
 menu?.addEventListener('click',()=>{mobile.classList.toggle('open');menu.setAttribute('aria-expanded',mobile.classList.contains('open')?'true':'false')});
 document.querySelectorAll('form[data-demo-form]').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();if(!f.reportValidity())return;showToast(f.dataset.success||'Thank you. Your request has been recorded in this demo.');f.reset()}));
 document.querySelectorAll('.point').forEach(p=>p.addEventListener('click',()=>{const out=document.querySelector('#map-info');if(out)out.innerHTML='<strong>'+p.dataset.info+'</strong><p>'+p.dataset.description+'</p>'}));
 document.querySelectorAll('[data-filter]').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(b=>b.classList.remove('active'));btn.classList.add('active');const v=btn.dataset.filter;document.querySelectorAll('[data-category]').forEach(el=>el.hidden=v!=='all'&&el.dataset.category!==v)}));
 function showToast(msg){let t=document.querySelector('.toast');if(!t){t=document.createElement('div');t.className='toast';document.body.append(t)}t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),3800)}
 document.querySelectorAll('[data-toast]').forEach(b=>b.addEventListener('click',()=>showToast(b.dataset.toast)));
 const backToTop=document.querySelector('.back-to-top');
 if(backToTop){
  const toggleBackToTop=()=>backToTop.classList.toggle('show',window.scrollY>260);
  window.addEventListener('scroll',toggleBackToTop,{passive:true});
  toggleBackToTop();
  backToTop.addEventListener('click',()=>{
   const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
   window.scrollTo({top:0,behavior:reduceMotion?'auto':'smooth'});
  });
 }
})();
