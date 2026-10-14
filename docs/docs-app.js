
(() => {
  'use strict';
  const locales = window.NEKO_DOCS_LOCALES || {};
  const ids = ['overview','flow','modules','persona','ai','memory','senses','games','started','faq','source'];
  const groups = [[...ids.slice(0,3)],[...ids.slice(3,7)],[...ids.slice(7)]];
  const featureGuides = {
    pt: ['Guias de recursos','Live2D — como funciona','3D — como funciona'],
    en: ['Feature guides','Live2D — how it works','3D — how it works'],
    es: ['Guías de funciones','Live2D — cómo funciona','3D — cómo funciona'],
    fr: ['Guides des fonctionnalités','Live2D — fonctionnement','3D — fonctionnement']
  };
  const escape = value => String(value == null ? '' : value).replace(/[&<>"']/g, char => ({
    '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'
  }[char]));
  const note = (message, label) => message ? '<aside class="soft-note"><strong>' + escape(label) + ':</strong> ' + escape(message) + '</aside>' : '';
  const paragraphs = items => (items || []).map(item => '<p>' + escape(item) + '</p>').join('');
  const cards = items => '<div class="cards-two">' + items.map(([icon,title,body]) =>
    '<article class="info-card"><span class="symbol" aria-hidden="true">' + escape(icon) +
    '</span><h3>' + escape(title) + '</h3><p>' + escape(body) + '</p></article>').join('') + '</div>';
  const table = (headers, rows) =>
    '<div class="table-wrap" role="region" tabindex="0" aria-label="' + escape(headers[0]) +
    '"><table><thead><tr>' + headers.map(h => '<th scope="col">' + escape(h) + '</th>').join('') +
    '</tr></thead><tbody>' + rows.map(row => '<tr>' + row.map(s => '<td>' + escape(s) + '</td>').join('') +
    '</tr>').join('') + '</tbody></table></div>';
  const sequence = steps => '<ol class="checks">' +
    steps.map(([title,body]) => '<li><strong>' + escape(title) + '</strong>' + escape(body) + '</li>').join('') + '</ol>';
  const process = steps => '<div class="process-line">' +
    steps.map((s,i) => (i?'<b aria-hidden="true">→</b>':'') + '<span>' + escape(s) + '</span>').join('') + '</div>';

  function pickLang() {
    const query = new URLSearchParams(location.search).get('lang');
    let saved = '';
    try { saved = localStorage.getItem('nekogpt-language') || localStorage.getItem('nekogpt_language') || ''; } catch {}
    const preferred = query || saved || navigator.language || 'pt';
    const lang = preferred.toLowerCase().slice(0,2);
    return locales[lang] ? lang : 'pt';
  }
  function sectionHTML(id, data, ui, ix) {
    const s = data.sections[id];
    if (!s) return '';
    const start = '<section id="' + id + '" class="doc-section" aria-labelledby="title-' + id + '">' +
      '<span class="section-kicker">' + escape(ui.sectionLabel) + ' / ' + String(ix+1).padStart(2,'0') +
      '</span><h2 id="title-' + id + '">' + escape(s.title) + '</h2>' +
      (s.lead ? '<p class="lead">' + escape(s.lead) + '</p>' : '');
    let content = '';
    if (id === 'overview') content = paragraphs(s.paragraphs) + note(s.note, ui.noteLabel);
    if (id === 'flow') content = '<div class="flow">' +
      s.steps.map(([title,body],i) => '<div class="flow-item"><span class="flow-num">' +
        String(i+1).padStart(2,'0') + '</span><h3>' + escape(title) + '</h3><p>' + escape(body) + '</p></div>').join('') +
      '</div>' + '<div class="soft-note">' + escape(s.after) + '</div>';
    if (id === 'modules' || id === 'ai') content = table(s.headers,s.rows) + note(s.note,ui.noteLabel);
    if (id === 'persona') content = cards(s.cards) + note(s.note,ui.noteLabel);
    if (id === 'memory') content = paragraphs(s.paragraphs) + process(s.process) + note(s.note,ui.noteLabel);
    if (id === 'senses') content = cards(s.cards) + process(s.process) + note(s.note,ui.noteLabel);
    if (id === 'games') content = paragraphs(s.paragraphs) + sequence(s.steps) + note(s.note,ui.noteLabel);
    if (id === 'started') content = sequence(s.steps) + note(s.note,ui.noteLabel);
    if (id === 'faq') content = '<div class="faq">' + s.items.map(([q,a]) =>
      '<details><summary>' + escape(q) + '</summary><p>' + escape(a) + '</p></details>').join('') + '</div>';
    if (id === 'source') content = paragraphs(s.paragraphs) + note(s.note,ui.noteLabel);

    return start + content + '</section>';
  }

  const content = document.getElementById('docs-content');
  const navigation = document.getElementById('docs-navigation');
  const search = document.getElementById('docs-search');
  const langSelect = document.getElementById('docs-language');
  const menuButton = document.getElementById('docs-menu-toggle');
  const mask = document.getElementById('docs-mobile-mask');
  let currentLang = pickLang();

  function closeMenu() {
    document.body.classList.remove('menu-open');
    menuButton.setAttribute('aria-expanded','false');
  }

  function setActive(id) {
    navigation.querySelectorAll('.nav-item').forEach(a => {
      const active = a.getAttribute('href') === '#' + id;
      a.classList.toggle('active',active);
      if(active) a.setAttribute('aria-current','location');
      else a.removeAttribute('aria-current');
    });
  }
  let sectionObserver;
  function render(lang) {
    if (!locales[lang]) lang = 'pt';
    currentLang = lang;
    const d = locales[lang], ui = d.ui;
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang;
    document.title = ui.title + ' | NekoGPT';
    const set = (id,text) => { const el=document.getElementById(id); if(el) el.textContent=text; };
    set('docs-brand-label', ui.title);
    set('docs-home-label', ui.back);
    set('docs-hero-eyebrow', ui.heroEyebrow);
    set('docs-hero-title', ui.heroTitle);
    set('docs-hero-lead', ui.heroLead);
    set('docs-version', ui.version);
    search.placeholder = ui.search;
    search.setAttribute('aria-label',ui.search);
    langSelect.value = lang;
    content.innerHTML = ids.map((id,i)=>sectionHTML(id,d,ui,i)).join('');
    navigation.innerHTML = groups.map((group,i) =>
      (i === 1
        ? '<div class="nav-group"><p class="nav-group-title">'+escape(featureGuides[lang][0])+'</p>' +
          '<a class="nav-item" href="/docs/live2d/?lang='+encodeURIComponent(lang)+'" data-id="live2d-guide">'+
          escape(featureGuides[lang][1])+'</a>' +
          '<a class="nav-item" href="/docs/3d/?lang='+encodeURIComponent(lang)+'" data-id="3d-guide">'+
          escape(featureGuides[lang][2])+'</a></div>'
        : '') +
      '<div class="nav-group"><p class="nav-group-title">'+escape(ui.groups[i])+'</p>' +
      group.map(id => '<a class="nav-item" href="#'+id+'" data-id="'+id+'">'+
        escape(d.sections[id].title)+'</a>').join('')+'</div>').join('') +
      '<p id="empty-search" hidden>'+escape(ui.noResults)+'</p>';
    if(sectionObserver)sectionObserver.disconnect();
    if('IntersectionObserver' in window){
      sectionObserver = new IntersectionObserver(entries=>{
        const active=entries.filter(e=>e.isIntersecting).sort((a,b)=>a.boundingClientRect.top-b.boundingClientRect.top)[0];
        if(active) setActive(active.target.id);
      },{rootMargin:'-12% 0px -72% 0px',threshold:0});
      document.querySelectorAll('.doc-section').forEach(el=>sectionObserver.observe(el));
    }
    const hash=decodeURIComponent(location.hash.slice(1));
    setActive(ids.includes(hash)?hash:'overview');
    applySearch();
  }
  function applySearch() {
    const query = search.value.trim().toLocaleLowerCase();
    let visible = 0;
    navigation.querySelectorAll('.nav-item').forEach(link=>{
      const target = document.getElementById(link.dataset.id);
      const searchIn=(link.textContent+' '+(target?.textContent || '')).toLocaleLowerCase();
      const show=!query||searchIn.includes(query);
      link.hidden=!show; if(show) visible++;
    });
    navigation.querySelectorAll('.nav-group').forEach(group=>{
      group.hidden=!!query&&!group.querySelector('.nav-item:not([hidden])');
    });
    const empty=document.getElementById('empty-search');
    if(empty)empty.hidden=visible>0;
  }

  langSelect.addEventListener('change',()=>{
    const before = location.hash;
    render(langSelect.value);
    try{localStorage.setItem('nekogpt-language',langSelect.value);}catch{}
    if(before)document.getElementById(before.slice(1))?.scrollIntoView({block:'start',behavior:'instant'});
    closeMenu();
  });
  menuButton.addEventListener('click',()=>{
    const opened=document.body.classList.toggle('menu-open');
    menuButton.setAttribute('aria-expanded',String(opened));
    if(opened)search.focus();
  });
  mask.addEventListener('click',closeMenu);
  document.addEventListener('keydown',event=>{if(event.key==='Escape')closeMenu();});
  navigation.addEventListener('click',event=>{
    const link=event.target.closest('.nav-item');
    if(link) {setActive(link.dataset.id);closeMenu();}
  });
  search.addEventListener('input',applySearch);
  search.addEventListener('keydown',event=>{
    if(event.key==='Enter'){
      const first=navigation.querySelector('.nav-item:not([hidden])');
      if(first){event.preventDefault();first.click();}
    }
  });
  let pending=false;
  window.addEventListener('scroll',()=>{
    if(pending)return;
    pending=true;requestAnimationFrame(()=>{
      const distance=document.documentElement.scrollHeight-window.innerHeight;
      document.getElementById('read-progress').style.width=(distance>0?Math.min(100,scrollY/distance*100):0)+'%';
      pending=false;
    });
  },{passive:true});
  render(currentLang);
  if(location.hash){
    requestAnimationFrame(()=>document.getElementById(decodeURIComponent(location.hash.slice(1)))?.scrollIntoView({block:'start'}));
  }
})();
