(() => {
  const PARTS = {
    logo: [0,1,2,3].map(i => `./assets/redesign/v3/logo/part-0${i}.txt`),
    background: [0,1].map(i => `./assets/redesign/v3/background/part-0${i}.txt`),
  };
  const cache = new Map();
  const asset = (name, mime='image/webp') => {
    if (cache.has(name)) return cache.get(name);
    const p = Promise.all(PARTS[name].map(async url => {
      const r = await fetch(url, {cache:'force-cache'});
      if (!r.ok) throw new Error(`Falha ao carregar ${url}`);
      return r.text();
    })).then(parts => {
      const raw = atob(parts.join('').replace(/\s+/g,''));
      const bytes = Uint8Array.from(raw, c => c.charCodeAt(0));
      return URL.createObjectURL(new Blob([bytes], {type:mime}));
    });
    cache.set(name,p);
    return p;
  };

  const css = `
    .site-header .nav-shell{min-height:86px}
    .site-header .brand.nekogpt-brand-logo{height:78px;display:inline-flex;align-items:center;overflow:visible}
    .site-header .brand.nekogpt-brand-logo img{width:142px;height:76px;object-fit:contain;border-radius:0;box-shadow:none;filter:drop-shadow(0 5px 13px rgba(255,112,181,.18))}

    .nekogpt-video-character img{filter:none!important;image-rendering:auto!important;backface-visibility:hidden;transform-style:preserve-3d}
    .nekogpt-video-character--left img{max-height:500px!important;width:auto!important}
    .nekogpt-video-character--right img{max-height:520px!important;width:auto!important}

    #features .feature-grid.nekogpt-one-box{display:block;width:100%;perspective:1600px}
    .nekogpt-feature-shell{position:relative;width:min(100%,1220px);margin:0 auto;padding:18px 12px 48px;perspective:1600px}
    .nekogpt-feature-shell:after{content:'';position:absolute;left:8%;right:8%;bottom:12px;height:56px;border-radius:50%;background:rgba(0,0,0,.48);filter:blur(32px);pointer-events:none}
    .nekogpt-feature-stage{--rx:0deg;--ry:0deg;--sx:50%;--sy:25%;position:relative;isolation:isolate;overflow:hidden;min-height:630px;padding:clamp(30px,4vw,58px);border:1px solid rgba(255,255,255,.92);border-radius:30px;background-image:linear-gradient(135deg,rgba(255,255,255,.42),rgba(255,248,245,.14)),var(--paper);background-size:cover;background-position:center;box-shadow:0 42px 90px rgba(0,0,0,.5),0 12px 0 -4px rgba(207,174,193,.72),0 20px 0 -8px rgba(114,87,126,.32),inset 0 1px 0 #fff;transform:rotateX(var(--rx)) rotateY(var(--ry));transform-style:preserve-3d;transition:transform .16s ease-out,box-shadow .2s ease;will-change:transform}
    .nekogpt-feature-stage:before{content:'';position:absolute;inset:0;z-index:-1;background:radial-gradient(circle at var(--sx) var(--sy),rgba(255,255,255,.9),transparent 25%),linear-gradient(120deg,rgba(255,255,255,.24),transparent 38%,rgba(239,191,221,.14) 75%,transparent);mix-blend-mode:screen;opacity:.55;pointer-events:none}
    .nekogpt-feature-stage:after{content:'';position:absolute;inset:12px;z-index:-1;border:1px solid rgba(163,124,151,.22);border-radius:22px;box-shadow:inset 0 0 40px rgba(255,255,255,.3);pointer-events:none}
    .nekogpt-feature-stage.tilting{box-shadow:0 55px 110px rgba(0,0,0,.56),0 14px 0 -4px rgba(207,174,193,.72),0 24px 0 -8px rgba(114,87,126,.32),inset 0 1px 0 #fff}
    .nekogpt-feature-items{position:relative;z-index:2;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));transform:translateZ(44px);transform-style:preserve-3d}
    .nekogpt-feature-item{min-height:245px;padding:28px clamp(20px,3vw,36px)!important;background:transparent!important;border:0!important;border-radius:0!important;box-shadow:none!important;color:#2d2632!important;transform:none!important}
    .nekogpt-feature-item:nth-child(-n+3){border-bottom:1px solid rgba(103,82,107,.18)!important}
    .nekogpt-feature-item:not(:nth-child(3n)){border-right:1px solid rgba(103,82,107,.18)!important}
    .nekogpt-feature-item:before{display:none!important}
    .nekogpt-feature-item .feature-icon{width:50px;height:50px;margin-bottom:18px;border:1px solid rgba(255,255,255,.84);border-radius:15px;background:linear-gradient(145deg,rgba(255,255,255,.9),rgba(255,235,247,.65));color:#7163ff;box-shadow:0 10px 24px rgba(89,58,93,.12),inset 0 1px 0 #fff;transform:translateZ(18px)}
    .nekogpt-feature-item h3{margin:0 0 10px;color:#2c2431!important;font-size:clamp(1.04rem,1.35vw,1.2rem);line-height:1.35;text-shadow:0 1px 0 rgba(255,255,255,.75)}
    .nekogpt-feature-item p{margin:0;color:#655d69!important;font-size:.98rem;line-height:1.62}
    .nekogpt-feature-item .live2d-feature-icon img,.nekogpt-feature-item .minecraft-feature-icon img{filter:none}
    @media(max-width:1020px){.nekogpt-feature-items{grid-template-columns:repeat(2,minmax(0,1fr))}.nekogpt-feature-item{border-right:0!important}.nekogpt-feature-item:nth-child(-n+4){border-bottom:1px solid rgba(103,82,107,.18)!important}.nekogpt-feature-item:nth-child(odd){border-right:1px solid rgba(103,82,107,.18)!important}}
    @media(max-width:760px){.site-header .nav-shell{min-height:74px}.site-header .brand.nekogpt-brand-logo{height:68px}.site-header .brand.nekogpt-brand-logo img{width:112px;height:66px}.nekogpt-feature-shell{padding:8px 0 28px}.nekogpt-feature-stage{min-height:0;padding:22px 20px;border-radius:24px;transform:none!important}.nekogpt-feature-stage:after{inset:8px;border-radius:18px}.nekogpt-feature-items{grid-template-columns:1fr;transform:none}.nekogpt-feature-item{min-height:0;padding:25px 8px!important;border-right:0!important;border-bottom:1px solid rgba(103,82,107,.18)!important}.nekogpt-feature-item:last-child{border-bottom:0!important}}
    @media(prefers-reduced-motion:reduce){.nekogpt-feature-stage{transform:none!important;transition:none}}
  `;

  const style = () => {
    if (document.getElementById('nekogpt-redesign-final-css')) return;
    const s=document.createElement('style');s.id='nekogpt-redesign-final-css';s.textContent=css;document.head.appendChild(s);
  };

  const brand = async () => {
    const el=document.querySelector('.site-header .brand');
    if(!el||el.classList.contains('nekogpt-brand-logo')) return !!el;
    const src=await asset('logo');
    el.classList.add('nekogpt-brand-logo');
    el.setAttribute('aria-label','NekoGPT');
    el.replaceChildren(Object.assign(document.createElement('img'),{src,alt:'NekoGPT'}));
    return true;
  };

  const features = async () => {
    const grid=document.querySelector('#features .feature-grid');
    if(!grid) return false;
    if(grid.classList.contains('nekogpt-one-box')) return true;
    const cards=[...grid.querySelectorAll(':scope > .feature-card')];
    if(cards.length<6) return false;
    const bg=await asset('background');
    const shell=document.createElement('div');shell.className='nekogpt-feature-shell';
    const stage=document.createElement('div');stage.className='nekogpt-feature-stage';stage.style.setProperty('--paper',`url("${bg}")`);
    const items=document.createElement('div');items.className='nekogpt-feature-items';
    cards.forEach(c=>{c.classList.add('nekogpt-feature-item');items.appendChild(c)});
    stage.appendChild(items);shell.appendChild(stage);grid.replaceChildren(shell);grid.classList.add('nekogpt-one-box');
    const reset=()=>{stage.style.setProperty('--rx','0deg');stage.style.setProperty('--ry','0deg');stage.classList.remove('tilting')};
    stage.addEventListener('pointermove',e=>{if(matchMedia('(max-width:760px)').matches)return;const r=stage.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;stage.style.setProperty('--ry',`${(x-.5)*8}deg`);stage.style.setProperty('--rx',`${(.5-y)*6}deg`);stage.style.setProperty('--sx',`${x*100}%`);stage.style.setProperty('--sy',`${y*100}%`);stage.classList.add('tilting')});
    stage.addEventListener('pointerleave',reset);stage.addEventListener('pointercancel',reset);
    return true;
  };

  const run=()=>{style();brand().catch(console.error);features().catch(console.error)};
  run();document.addEventListener('DOMContentLoaded',run,{once:true});
  const observer=new MutationObserver(run);if(document.body)observer.observe(document.body,{childList:true,subtree:true});
  let n=0;const timer=setInterval(()=>{run();if(++n>40||(document.querySelector('.nekogpt-brand-logo')&&document.querySelector('.nekogpt-one-box')))clearInterval(timer)},250);
})();
