(() => {
  "use strict";
  const translations = window.NEKO_3D_GUIDE || {};
  const keys = ['what','import','animations','expressions','talk','interactions','skins','troubleshoot'];
  const byId = id => document.getElementById(id);
  const escape = text => String(text ?? '').replace(/[&<>"']/g, c => ({
    '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'
  })[c]);
  const getLocale = () => {
    const query = new URLSearchParams(location.search).get('lang');
    let saved = '';
    try { saved = localStorage.getItem('nekogpt-language') || ''; } catch {}
    const lang = String(query || saved || navigator.language || 'pt').toLowerCase().slice(0,2);
    return translations[lang] ? lang : 'pt';
  };
  let current = getLocale();
  const menu = byId('docs-menu-toggle');
  const nav = byId('docs-navigation');
  const search = byId('docs-search');
  const langSelect = byId('docs-language');
  const mask = byId('docs-mobile-mask');
  const content = byId('docs-content');
  const table = info => {
    if (!info) return '';
    return '<div class="table-wrap" role="region" tabindex="0" aria-label="'+escape(info.heads[0])+'"><table><thead><tr>'+
      info.heads.map(x=>'<th scope="col">'+escape(x)+'</th>').join('')+'</tr></thead><tbody>'+
      info.rows.map(row=>'<tr>'+row.map(x=>'<td>'+escape(x)+'</td>').join('')+'</tr>').join('')+'</tbody></table></div>';
  };
  const section = (data, num, label) => '<section class="doc-section vrm-section" id="'+data.id+'" aria-labelledby="heading-'+data.id+'">'+
    '<span class="section-kicker">3D / '+String(num+1).padStart(2,'0')+'</span>'+
    '<h2 id="heading-'+data.id+'">'+escape(data.title)+'</h2>'+
    '<p class="lead">'+escape(data.lead)+'</p>'+
    (data.p||[]).map(x=>'<p>'+escape(x)+'</p>').join('')+
    (data.steps?'<ol class="checks vrm-steps">'+data.steps.map(([heading,desc])=>
       '<li><strong>'+escape(heading)+'</strong>'+escape(desc)+'</li>').join('')+'</ol>':'')+
    table(data.table)+
    (data.note?'<aside class="vrm-note">'+escape(data.note)+'</aside>':'')+
    '</section>';
  const closeMenu=()=>{
    document.body.classList.remove('menu-open');
    menu.setAttribute('aria-expanded','false');
  };
  function setActive(id) {
    nav.querySelectorAll('.nav-item[data-id]').forEach(a=>{
      const active=a.dataset.id===id;
      a.classList.toggle('active', active);
      if(active)a.setAttribute('aria-current','location');
      else a.removeAttribute('aria-current');
    });
  }
  let observer;
  function render(lang) {
    const data = translations[lang] || translations.pt;
    current = lang;
    const ui = data.ui;
    document.documentElement.lang = lang==='pt'?'pt-BR':lang;
    document.title = '3D | NekoGPT';
    langSelect.value = lang;
    byId('docs-brand-label').textContent = lang==='pt'?'Documentação':lang==='es'?'Documentación':'Documentation';
    byId('docs-home-label').textContent=ui.site;
    byId('docs-back-label').textContent=ui.back;
    byId('docs-back-label').href='/docs/?lang='+encodeURIComponent(lang);
    byId('docs-hero-eyebrow').textContent=ui.eyebrow;
    byId('docs-hero-title').textContent=ui.heroTitle;
    byId('docs-hero-lead').textContent=ui.heroLead;
    byId('docs-side-title').textContent=ui.navTitle;
    search.placeholder=ui.search;
    search.setAttribute('aria-label',ui.search);
    byId('docs-related-title').textContent=ui.next;
    byId('docs-related-link').textContent=ui.related;
    byId('docs-related-link').href='/docs/?lang='+encodeURIComponent(lang);
    byId('docs-footer-label').textContent=ui.footer;
    content.innerHTML=data.sections.map((sectionData,i)=>section(sectionData,i,ui.note)).join('');
    nav.innerHTML=data.sections.map(item=>
      '<a class="nav-item" href="#'+escape(item.id)+'" data-id="'+escape(item.id)+'">'+escape(item.title)+'</a>').join('')+
      '<p id="empty-search" hidden>'+escape(ui.empty)+'</p>';
    if(observer)observer.disconnect();
    if('IntersectionObserver' in window){
      observer=new IntersectionObserver(entries=>{
        const visible=entries.filter(entry=>entry.isIntersecting).sort((a,b)=>a.boundingClientRect.top-b.boundingClientRect.top)[0];
        if(visible)setActive(visible.target.id);
      },{rootMargin:'-12% 0px -72% 0px'});
      content.querySelectorAll('.vrm-section').forEach(el=>observer.observe(el));
    }
    const hash=decodeURIComponent(location.hash.slice(1));
    setActive(keys.includes(hash)?hash:'what');
    filterNav();
  }
  function filterNav() {
    const query=search.value.trim().toLocaleLowerCase();
    let count=0;
    nav.querySelectorAll('.nav-item[data-id]').forEach(link=>{
      const target=byId(link.dataset.id);
      const visible=!query||(link.textContent+' '+(target?.textContent||'')).toLocaleLowerCase().includes(query);
      link.hidden=!visible;
      if(visible)count++;
    });
    byId('empty-search').hidden=count>0;
  }
  menu.addEventListener('click',()=>{
    const open=document.body.classList.toggle('menu-open');
    menu.setAttribute('aria-expanded',String(open));
    if(open)search.focus();
  });
  mask.addEventListener('click',closeMenu);
  document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
  nav.addEventListener('click',event=>{
    const link=event.target.closest('.nav-item[data-id]');
    if(link){setActive(link.dataset.id);closeMenu();}
  });
  search.addEventListener('input',filterNav);
  search.addEventListener('keydown',event=>{
    if(event.key==='Enter'){
      const first=nav.querySelector('.nav-item[data-id]:not([hidden])');
      if(first){event.preventDefault();first.click();}
    }
  });
  langSelect.addEventListener('change',()=>{
    const id=decodeURIComponent(location.hash.slice(1));
    render(langSelect.value);
    try {localStorage.setItem('nekogpt-language',langSelect.value)}catch{}
    const url=new URL(location.href);
    url.searchParams.set('lang',langSelect.value);
    history.replaceState({},'',url);
    if(keys.includes(id))byId(id)?.scrollIntoView({block:'start'});
    closeMenu();
  });
  window.addEventListener('hashchange',()=>setActive(decodeURIComponent(location.hash.slice(1))));
  let busy=false;
  window.addEventListener('scroll',()=>{
    if(busy)return;
    busy=true;
    requestAnimationFrame(()=>{
      const max=document.documentElement.scrollHeight-innerHeight;
      byId('read-progress').style.width=(max>0?Math.min(100,scrollY/max*100):0)+'%';
      busy=false;
    });
  },{passive:true});
  render(current);
  if(location.hash)requestAnimationFrame(()=>byId(decodeURIComponent(location.hash.slice(1)))?.scrollIntoView({block:'start'}));
})();
