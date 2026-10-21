const id=Math.max(0,Math.min(LIST.length-1,parseInt(new URLSearchParams(location.search).get('id'))||0));
const m=LIST[id];
document.title=m.n+', '+m.a+' — мастер спа-массажа, от '+rub(m.price)+' | Аркадия';
const off=[0,300,-200,500,-400,700,-300,200];
const svc=[['Классический массаж','60 мин',m.price],['Расслабляющий массаж','90 мин',Math.min(6000,m.price+800)],[''+m.sp,'75 мин',Math.min(6000,m.price+400)],['Массаж шейно-воротниковой зоны','40 мин',Math.max(4000,m.price-500)],['Ароматерапия','60 мин',Math.max(4000,Math.min(6000,m.price+off[id]))]];
const days=['Пн','Вт','Ср','Чт','Пт','Сб','Вс'],sched=days.map((d,i)=>[d,(i+id)%4==3?'выходной':(i+id)%2?'12:00–22:00':'10:00–20:00']);
const revs=[['Ирина','5','Очень внимательный мастер, ушло напряжение в плечах. Приду ещё.'],['Татьяна','5','Спокойная атмосфера, чистый кабинет, всё по времени.'],['Наталья','4','Хороший массаж, хотелось бы чуть сильнее нажим — в следующий раз скажу заранее.']];
const gal=[img(m.p,800,1000,'faces'),img(m.p,400,500,'top'),img(m.p,400,500,'entropy'),img(SPA[id%4],400,500),img(SPA[(id+1)%4],400,500)];
const ph='995000000'+String(100+id);
const sim=LIST.map((x,i)=>[x,i]).filter(x=>x[1]!=id).slice(0,4);
profile.innerHTML=`<div class="wrap crumbs"><a href="index.html#masters">← Назад к каталогу</a><span>Каталог / ${m.n}</span></div>
<section class="wrap prof">
 <div class="gal"><img id="gmain" src="${gal[0]}" alt="${m.n}, мастер массажа"><div class="thumbs">${gal.map((g,i)=>`<button data-i="${i}" class="${i?'':'on'}"><img src="${g.replace(/w=\d+&h=\d+/,'w=160&h=200')}" alt="Фото ${i+1}"></button>`).join('')}</div></div>
 <div class="info">
  <div class="badges">${m.vip?'<span class="badge">VIP</span>':''}<span class="st2${m.st=='в смене'?' on':''}">${m.st=='в смене'?'Сейчас в смене':'Смена: '+m.st}</span><span class="demo">Демо-анкета</span></div>
  <h1>${m.n}, ${m.a}</h1><p class="lead">${m.sp} · рейтинг 4.9 · ${revs.length} отзыва</p>
  <dl class="facts"><div><dt>Возраст</dt><dd>${m.a} лет</dd></div><div><dt>Рост</dt><dd>${m.h} см</dd></div><div><dt>Опыт</dt><dd>${m.e} лет</dd></div><div><dt>Языки</dt><dd>${m.l}</dd></div></dl>
  <div class="pricebox"><span>Сеанс от</span><b>${rub(m.price)}</b></div>
  <div class="cta"><a class="btn" href="tel:+${ph}">Позвонить</a><a class="btn ghost" href="#contacts">Все контакты</a></div>
  <h2>Обо мне</h2><p>Сертифицированный мастер массажа, опыт работы — ${m.e} лет. Основная специализация: ${m.sp.toLowerCase()}. Работаю мягко и внимательно, перед сеансом уточняю пожелания и противопоказания. Использую натуральные масла без резкого запаха. Помогу снять усталость после рабочего дня и восстановиться после спорта.</p>
 </div>
</section>
<section class="wrap two-col">
 <div><h2>Услуги и цены</h2><table class="tbl">${svc.map(s=>`<tr><td>${s[0]}</td><td>${s[1]}</td><td>${rub(s[2])}</td></tr>`).join('')}</table></div>
 <div><h2>Расписание на неделю</h2><table class="tbl">${sched.map(s=>`<tr class="${s[1]=='выходной'?'off':''}"><td>${s[0]}</td><td>${s[1]}</td></tr>`).join('')}</table></div>
</section>
<section class="wrap"><h2>Отзывы</h2><div class="revs">${revs.map(r=>`<div class="rev"><div><b>${r[0]}</b><span class="stars">${'★'.repeat(r[1])}${'☆'.repeat(5-r[1])}</span></div><p>${r[2]}</p></div>`).join('')}</div></section>
<section class="wrap" id="contacts"><h2>Контакты и запись</h2><div class="clinks"><a href="tel:+${ph}"><span>Телефон</span>+${ph}</a><a href="https://wa.me/${ph}"><span>WhatsApp</span>Написать</a><a href="https://t.me/arkadia_spa_demo"><span>Telegram</span>Написать</a><a href="viber://chat?number=%2B${ph}"><span>Viber</span>Написать</a></div></section>
<section class="wrap simsec"><div class="sh"><h2>Похожие мастера</h2><a href="index.html#masters">Весь каталог →</a></div><div class="mgrid">${sim.map(x=>card(x[0],x[1])).join('')}</div></section>`;
document.querySelectorAll('.thumbs button').forEach(b=>b.onclick=()=>{gmain.src=gal[b.dataset.i];document.querySelectorAll('.thumbs button').forEach(x=>x.classList.toggle('on',x==b))});
