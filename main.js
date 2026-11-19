const CAN={spritz:'img/lata-spritz.webp',tinto:'img/lata-tinto.webp',blue:'img/lata-blue.webp',pina:'img/lata-pina.webp'};
const T=[
  {k:'spritz',n:'Spritz',eb:'01 / 04 · Atardecer naranja',d:'Amargo, cítrico y con burbuja. El primer trago cuando baja el sol.',bg:'#00515E',wv:'#00404C',sun:'#FD981F',ink:'#FCEBD2'},
  {k:'tinto',n:'Tinto de verano',eb:'02 / 04 · Atardecer ciruela',d:'Tinto con soda bien fría. El clásico de la siesta larga.',bg:'#FDD221',wv:'#F0B400',sun:'#FEC1A5',ink:'#4A1546'},
  {k:'blue',n:'Blue lagoon',eb:'03 / 04 · Atardecer violeta',d:'Curaçao azul y lima. Para cuando el cielo se pone violeta.',bg:'#FD6C60',wv:'#EE5A50',sun:'#FDB5B4',ink:'#14123F'},
  {k:'pina',n:'Piña colada',eb:'04 / 04 · Atardecer turquesa',d:'Ananá y coco, cremosa y helada. La última luz del día.',bg:'#25A6EA',wv:'#1590D6',sun:'#FE8175',ink:'#03192B'}
];
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const R=matchMedia('(prefers-reduced-motion: reduce)').matches;
const MOB=matchMedia('(max-width:767px)').matches;

/* ---------- armado de piezas en código ---------- */
const wavePath=y=>{let p=`M-240 ${y}`;for(let i=0;i<12;i++)p+=` q100 ${i%2?36:-36} 200 0`;return p};
const crest=c=>`<svg class="crest" viewBox="0 0 1600 100" preserveAspectRatio="none" aria-hidden="true"><path d="M0 100V56Q100 16 200 56T400 56T600 56T800 56T1000 56T1200 56T1400 56T1600 56V100Z" fill="${c}"/></svg>`;
const sea=o=>{let p=`M-400 ${o.sea}`;for(let i=0;i<14;i++)p+=` q100 ${i%2?30:-30} 200 0`;return p+' V1100 H-400Z'};
const scene=(t,o)=>`<div class="layer wipe">${crest(t.bg)}<div class="bgfill" style="background:${t.bg}"></div>
<svg class="sunL sun" viewBox="${o.vb}" preserveAspectRatio="${o.par}" aria-hidden="true"><circle cx="${o.cx}" cy="${o.cy}" r="${o.r}" fill="${t.sun}"/></svg>
<svg class="wvL wv" viewBox="${o.vb}" preserveAspectRatio="${o.par}" aria-hidden="true"><g fill="none" stroke="${t.wv}" stroke-width="38" stroke-linecap="round">${[0,1,2,3,4,5].map(i=>`<path d="${wavePath(o.wy+i*78)}"/>`).join('')}</g>${o.sea?`<path d="${sea(o)}" fill="${t.wv}"/>`:''}</svg></div>`;

$('#scenes').innerHTML=T.map(t=>scene(t,{vb:MOB?'180 0 1420 1000':'0 0 1600 1000',par:'xMinYMid slice',cx:210,cy:330,r:390,wy:560})).join('');
$('#armaBg').innerHTML=T.map(t=>scene(t,{vb:'0 0 1600 1000',par:'xMidYMax slice',cx:800,cy:1010,r:380,wy:760,sea:900})).join('');
$('#copy').innerHTML=T.map(t=>`<article class="flav" style="color:${t.ink}"><p class="eb">${t.eb}</p><h2 class="d">${t.n}</h2><p class="t">${t.d}</p></article>`).join('');
$('#row').innerHTML=T.map(t=>`<figure><img data-can="${t.k}" alt="Lata de Ocaso ${t.n}"><figcaption>${t.n}</figcaption></figure>`).join('');
$('#picker').innerHTML=T.map((t,i)=>`<button class="pick" type="button" aria-pressed="${i===0}" aria-label="${t.n}" data-i="${i}"><img data-can="${t.k}" alt=""></button>`).join('');
/* dorso de la lata, dibujado en código */
const BACK={
  spritz:{sky:['#9F0C1E','#C91512','#E83E0C','#F47B19'],sea:['#8A0F22','#460B1A'],wv:'#C2202A',ink:'#FCEBD2'},
  tinto:{sky:['#7A2A62','#B6316E','#EF5367','#FC8264'],sea:['#6A2D68','#3E2451'],wv:'#A1468A',ink:'#FCEBD2'},
  blue:{sky:['#043B7D','#3654A2','#AB5896','#FA7C9B'],sea:['#1B6AA8','#004689'],wv:'#3FA3D6',ink:'#FCEBD2'},
  pina:{sky:['#71C8A6','#D5CF68','#F7C549','#FED268'],sea:['#22A7B0','#1B86A8'],wv:'#8FE0DC',ink:'#0B3B5C'}
};
const ICONS=['M32 8v48M11.2 20l41.6 24M11.2 44l41.6-24M26 12l6 6 6-6M26 52l6-6 6 6M10 27l8-3-2-8M54 37l-8 3 2 8M10 37l8 3-2 8M54 27l-8-3 2-8',
 'M20 22c0-3 5-5 12-5s12 2 12 5v30c0 3-5 5-12 5s-12-2-12-5zM20 22c0 3 5 5 12 5s12-2 12-5M29 21.5h6M32 14V6M28 10l4-4 4 4',
 'M6 42h52M16 42a16 16 0 0 1 32 0M32 14v-6M14 22l-4-4M50 22l4-4M12 50h40M20 57h24'];
const back=t=>{const b=BACK[t.k],id='bk'+t.k;
 return `<svg viewBox="0 0 352 1000" preserveAspectRatio="none"><defs>
<linearGradient id="${id}s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${b.sky[0]}"/><stop offset=".35" stop-color="${b.sky[1]}"/><stop offset=".7" stop-color="${b.sky[2]}"/><stop offset="1" stop-color="${b.sky[3]}"/></linearGradient>
<linearGradient id="${id}m" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${b.sea[0]}"/><stop offset="1" stop-color="${b.sea[1]}"/></linearGradient></defs>
<rect y="60" width="352" height="540" fill="url(#${id}s)"/><rect y="600" width="352" height="380" fill="url(#${id}m)"/>
<g fill="none" stroke="${b.wv}" stroke-width="5" stroke-linecap="round">${[640,690,800,920].map((y,i)=>`<path d="M${-40+i*14} ${y} q44 -14 88 0 t88 0 t88 0 t88 0 t88 0"/>`).join('')}</g>
<text x="176" y="236" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="78" fill="${b.ink}">OCASO</text>
<text x="176" y="284" text-anchor="middle" font-family="'DM Sans',sans-serif" font-weight="500" font-size="28" letter-spacing="3" fill="${b.ink}">${t.n.toUpperCase()}</text>
<g fill="none" stroke="${b.ink}" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round">${ICONS.map((d,i)=>`<g transform="translate(${34+i*100} 712) scale(1.2)"><path d="${d}"/></g>`).join('')}</g>
<text x="176" y="884" text-anchor="middle" font-family="'DM Sans',sans-serif" font-weight="500" font-size="28" letter-spacing="3" fill="${b.ink}">355 ML</text></svg>`};
$('#canSw').insertAdjacentHTML('beforeend',T.slice(1).map((t,i)=>`<div class="spin" aria-hidden="true"><div class="rs"><img data-can="${T[i].k}" alt=""><div class="bk">${back(t)}</div><img data-can="${t.k}" alt=""></div></div>`).join(''));
const mt=$('#maniTxt');mt.innerHTML=mt.textContent.split(' ').map(w=>`<span>${w}</span>`).join(' ');
$$('img[data-can]').forEach(im=>{im.decoding='async';im.src=CAN[im.dataset.can]});

/* ---------- scroll suave ---------- */
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ignoreMobileResize:true});
let lenis=null;
if(!R){
  lenis=new Lenis({lerp:.09});
  lenis.on('scroll',ScrollTrigger.update);
  gsap.ticker.add(t=>lenis.raf(t*1000));
  gsap.ticker.lagSmoothing(0);
}
$('#packBtn').addEventListener('click',e=>{e.preventDefault();lenis?lenis.scrollTo('#donde'):$('#donde').scrollIntoView();});

/* ---------- armá tu atardecer (no depende del scroll) ---------- */
const armaLayers=$$('#armaBg .wipe'),picks=$$('.pick'),armaName=$('#armaName'),arma=$('#arma');
let armaCur=0,armaZ=1;
gsap.set(armaLayers,{yPercent:i=>i?110:0});
arma.style.setProperty('--ink',T[0].ink);
function pickTrago(i){
  if(i===armaCur)return;
  picks.forEach((b,j)=>b.setAttribute('aria-pressed',j===i));
  const L=armaLayers[i];L.style.zIndex=++armaZ;
  if(R){gsap.set(L,{yPercent:0});arma.style.setProperty('--ink',T[i].ink);armaName.textContent=T[i].n;armaCur=i;return}
  gsap.fromTo(L,{yPercent:110},{yPercent:0,duration:.9,ease:'power3.inOut'});
  gsap.fromTo(L.querySelector('.sun'),{y:180},{y:0,duration:1.1,ease:'power3.out',delay:.2});
  gsap.to(armaName,{opacity:0,y:-24,duration:.3,delay:.35,ease:'power2.in',onComplete:()=>{
    arma.style.setProperty('--ink',T[i].ink);armaName.textContent=T[i].n;
    gsap.fromTo(armaName,{opacity:0,y:24},{opacity:1,y:0,duration:.5,ease:'power3.out'});
  }});
  armaCur=i;
}
picks.forEach(b=>b.addEventListener('click',()=>pickTrago(+b.dataset.i)));

/* ---------- escenas con scroll ---------- */
const word=$('#word'),canPos=$('#canPos'),canIn=$('#canIn'),canSw=$('#canSw'),heroUI=$('#heroUI'),mani=$('#mani'),maniGrad=$('#maniGrad');
const scenes=$$('#scenes .wipe'),suns=$$('#scenes .sun'),waves=$$('#scenes .wv'),imgs=$$('#canSw > img'),spins=$$('#canSw .spin'),rss=$$('#canSw .rs'),flavs=$$('.flav'),notes=$$('.note'),words=$$('#maniTxt span');

function colOffset(){
  const g=$('.grid'),cs=getComputedStyle(g);
  const m=parseFloat(cs.paddingLeft),gap=parseFloat(cs.columnGap);
  const colW=(g.clientWidth-2*m-11*gap)/12;
  return -(2*colW+2*gap);
}

const mm=gsap.matchMedia();
mm.add({desk:'(min-width:768px)',mob:'(max-width:767px)'},ctx=>{
  const mob=ctx.conditions.mob,Z=mob?1.35:1.7,last=T.length-1;
  gsap.set([word,canPos],{xPercent:-50,yPercent:-50});
  gsap.set([mani,...scenes],{yPercent:110});
  gsap.set(flavs,{opacity:0,y:40});
  gsap.set(notes,{opacity:0,y:24});
  gsap.set(words,{opacity:0,y:24});
  gsap.set(imgs,{opacity:i=>i?0:1});

  const tl=gsap.timeline({paused:true,defaults:{ease:'power2.inOut'}});
  // hero → manifiesto
  tl.addLabel('hero',0)
    .to(word,{y:()=>-innerHeight*.14,opacity:0,duration:1},0)
    .to(heroUI,{opacity:0,duration:.35},0)
    .to(canPos,{y:()=>innerHeight*.95,rotation:10,duration:1},0)
    .to(mani,{yPercent:0,duration:1},0)
    .to(maniGrad,{yPercent:-75,duration:2.2,ease:'none'},1)
    .to(words,{opacity:1,y:0,duration:.3,stagger:.2,ease:'power2.out'},1)
    .addLabel('mani',3);
  // manifiesto → spritz
  const tA=3.5;
  tl.to(words,{opacity:0,y:-24,duration:.35,stagger:.02},tA)
    .to(scenes[0],{yPercent:0,duration:1},tA)
    .fromTo(suns[0],{y:()=>innerHeight*.3},{y:0,duration:1},tA)
    .fromTo(waves[0],{x:-140},{x:0,duration:1},tA)
    .fromTo(canPos,{x:()=>mob?0:colOffset()},{x:()=>mob?0:colOffset(),y:()=>mob?-innerHeight*.17:0,rotation:-12,scale:mob?.95:1,duration:1,immediateRender:false},tA)
    .to(flavs[0],{opacity:1,y:0,duration:.55},tA+.45)
    .addLabel('s0',tA+1);
  // cambios de trago: barrido sin mezcla de colores
  for(let i=1;i<T.length;i++){
    const t0=tA+1+.6+(i-1)*1.6;
    tl.to(flavs[i-1],{opacity:0,y:-40,duration:.4},t0)
      .to(scenes[i],{yPercent:0,duration:.9},t0)
      .fromTo(suns[i],{y:()=>innerHeight*.3},{y:0,duration:1},t0)
      .fromTo(waves[i],{x:-140},{x:0,duration:1},t0)
      .to(canSw,{rotation:5,duration:.5,ease:'power2.inOut'},t0)
      .to(canSw,{rotation:0,duration:.5,ease:'power2.inOut'},t0+.5)
      .fromTo(spins[i-1],{opacity:0},{opacity:1,duration:.02,ease:'none',immediateRender:false},t0)
      .fromTo(rss[i-1],{xPercent:0},{xPercent:-200/3,duration:.96,ease:'power2.inOut',immediateRender:false},t0+.02)
      .to(imgs[i],{opacity:1,duration:.05,ease:'none'},t0+.45)
      .to(imgs[i-1],{opacity:0,duration:.05,ease:'none'},t0+.5)
      .to(spins[i-1],{opacity:0,duration:.02,ease:'none'},t0+.98)
      .fromTo(flavs[i],{opacity:0,y:40},{opacity:1,y:0,duration:.55},t0+.45)
      .addLabel('s'+i,t0+1);
  }
  // zoom a la lata
  const tz=tA+1+.6+(T.length-1)*1.6+.6,canH=()=>canPos.offsetHeight;
  tl.to(flavs[last],{opacity:0,y:-40,duration:.4},tz)
    .to(canPos,{x:0,y:()=>(mob?-innerHeight*.15:0)-.11*canH()*Z,rotation:0,scale:Z,duration:1.2},tz)
    .to(scenes[last],{scale:1.12,duration:1.2},tz)
    .to(notes,{opacity:1,y:0,duration:.5,stagger:.18},tz+.9)
    .addLabel('zoom',tz+1.6)
    .to({},{duration:.8});

  const st={trigger:'#exp',start:'top top',end:()=>'+='+innerHeight*tl.duration()*.7,pin:true,invalidateOnRefresh:true};
  if(!R){
    ScrollTrigger.create({...st,animation:tl,scrub:1});
    gsap.from(canIn,{yPercent:18,rotation:6,opacity:0,duration:1.4,ease:'expo.out',delay:.15});
    gsap.from(word.firstChild,{y:60,opacity:0,duration:1.2,ease:'expo.out'});
  }else{
    const labels=Object.values(tl.labels);let cur=-1;
    ScrollTrigger.create({...st,onUpdate:s=>{
      const t=s.progress*tl.duration();
      const near=labels.reduce((a,b)=>Math.abs(b-t)<Math.abs(a-t)?b:a);
      if(near!==cur){cur=near;tl.seek(near,false)}
    }});
  }

  if(R)return()=>tl.kill();

  // galería horizontal (solo compu)
  if(!mob){
    const track=$('#galTrack'),dist=()=>track.scrollWidth-innerWidth;
    gsap.to(track,{x:()=>-dist(),ease:'none',scrollTrigger:{trigger:'#galeria',start:'top top',end:()=>'+='+dist(),pin:'.gal-pin',scrub:1,invalidateOnRefresh:true}});
  }else{
    $$('.shot').forEach(s=>gsap.from(s,{y:60,opacity:0,duration:1,ease:'expo.out',scrollTrigger:{trigger:s,start:'top 85%'}}));
  }
  // ritual
  gsap.from('.ritual header',{y:48,opacity:0,duration:1,ease:'expo.out',scrollTrigger:{trigger:'.ritual',start:'top 70%'}});
  gsap.from('.steps li',{y:60,opacity:0,duration:1,ease:'expo.out',stagger:.15,scrollTrigger:{trigger:'.steps',start:'top 80%'}});
  // pack: las latas se abren en abanico
  gsap.set('#packCans img',{rotation:i=>[-12,-4,4,12][i],y:i=>[18,0,0,18][i]});
  gsap.from('#packCans img',{x:(i)=>(1.5-i)*60,rotation:0,y:80,opacity:0,duration:1.2,ease:'expo.out',stagger:.08,scrollTrigger:{trigger:'.pack',start:'top 65%'}});
  gsap.from('.pack-txt>*',{y:40,opacity:0,duration:1,ease:'expo.out',stagger:.1,scrollTrigger:{trigger:'.pack',start:'top 65%'}});
  // cierre
  gsap.from('.end-h,.places',{y:48,opacity:0,duration:1,ease:'expo.out',stagger:.12,scrollTrigger:{trigger:'.end',start:'top 65%'}});
  gsap.from('#row figure',{y:90,rotation:-12,opacity:0,duration:1.1,ease:'expo.out',stagger:.1,scrollTrigger:{trigger:'#row',start:'top 85%'}});
  // footer: el sol termina de bajar
  gsap.fromTo('#footSun',{yPercent:-14},{yPercent:6,ease:'none',scrollTrigger:{trigger:'.foot',start:'top bottom',end:'bottom bottom',scrub:true}});
  return()=>tl.kill();
});

/* ---------- indicador: el sol baja con toda la página ---------- */
gsap.to('#meterSun',{y:()=>$('.meter').offsetHeight,ease:'none',scrollTrigger:{start:0,end:'max',scrub:true,invalidateOnRefresh:true}});
if(R)gsap.set('#packCans img',{rotation:i=>[-12,-4,4,12][i],y:i=>[18,0,0,18][i]});

document.fonts.ready.then(()=>ScrollTrigger.refresh());
addEventListener('load',()=>ScrollTrigger.refresh());
