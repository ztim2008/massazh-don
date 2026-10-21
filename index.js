mrow.innerHTML=LIST.map(card).join('');
prow.innerHTML=PROGRAMS.map(p=>'<div class="pc"><div class="pt"><h3>'+p[0]+'</h3><span>'+p[1]+'</span></div><p>'+p[3]+'</p><div class="pp"><b>'+rub(p[2])+'</b><a href="#masters" class="btn sm">Выбрать мастера</a></div></div>').join('');
const vip=LIST.map((m,i)=>[m,i]).filter(x=>x[0].vip);
const one=vip.map(([m,i])=>'<a class="vc" href="profile.html?id='+i+'"><div class="vimg" style="background-image:url('+img(m.p,480,640,'faces')+')"></div><div class="vb"><span class="badge">VIP</span><b>'+m.n+', '+m.a+'</b><span>'+m.sp+'</span><em>от '+rub(m.price)+'</em></div></a>').join('');
vrow.innerHTML=one+one+one; // три копии для бесшовной петли
(()=>{const t=vtrack,reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;let paused=false,timer,x;
 const third=()=>vrow.scrollWidth/3;
 t.scrollLeft=third();
 const wrap=()=>{const w=third();if(t.scrollLeft<w*0.5)t.scrollLeft+=w;else if(t.scrollLeft>w*1.5)t.scrollLeft-=w};
 t.addEventListener('scroll',wrap,{passive:true});
 const pause=()=>{paused=true;clearTimeout(timer)},resume=d=>{clearTimeout(timer);timer=setTimeout(()=>paused=false,d)};
 t.addEventListener('mouseenter',pause);t.addEventListener('mouseleave',()=>resume(300));
 t.addEventListener('touchstart',pause,{passive:true});t.addEventListener('touchend',()=>resume(2500),{passive:true});
 t.addEventListener('focusin',pause);t.addEventListener('focusout',()=>resume(300));
 if(reduce)return;let last=performance.now(),acc=0;
 (function step(now){const dt=now-last;last=now;if(!paused&&!document.hidden){acc+=dt*0.04;const s=Math.floor(acc);if(s){t.scrollLeft+=s;acc-=s}}requestAnimationFrame(step)})(last);
})();
