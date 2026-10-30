const $=s=>document.querySelector(s),all=s=>[...document.querySelectorAll(s)];
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
if(!reduced&&'IntersectionObserver'in window){document.documentElement.classList.add('js-motion');const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.08});all('.reveal').forEach(e=>observer.observe(e));}
$('#menu').onclick=()=>{const open=$('#nav-more').hidden;$('#nav-more').hidden=!open;$('#menu').setAttribute('aria-expanded',String(open))};
document.addEventListener('click',e=>{if(!e.target.closest('.nav')){$('#nav-more').hidden=true;$('#menu').setAttribute('aria-expanded','false')}});
all('#nav-more a').forEach(a=>a.onclick=()=>{$('#nav-more').hidden=true;$('#menu').setAttribute('aria-expanded','false')});
all('[data-slide]').forEach(b=>b.onclick=()=>$('#feature-track').scrollBy({left:Number(b.dataset.slide)*347,behavior:reduced?'instant':'smooth'}));
const steps=[['Explore o cardápio da casa com categorias claras e escolhas ao alcance dos dedos.','O que vai ser hoje?','Seu próximo favorito','Burgers · Acompanhamentos · Bebidas'],['Sem cebola? Sem molho? Personalize o pedido antes de colocá-lo na sacola.','Do seu jeito.','Um clássico, a sua cara','Sem cebola ✓ · Molho da casa ✓'],['Veja o que escolheu, ajuste as quantidades e confira tudo antes de continuar.','Tudo na sacola.','Um pedido bem escolhido','Burger + batata + refresco'],['Finalize o percurso na demonstração. Nenhum pedido real é enviado ou cobrado.','Deu tudo certo!','Esse foi só um gostinho.','Protótipo demonstrativo Bunviko']];
all('[data-step]').forEach(b=>b.onclick=()=>{all('[data-step]').forEach(x=>{x.classList.toggle('active',x===b);x.setAttribute('aria-pressed',String(x===b))});const s=steps[Number(b.dataset.step)];$('#step-description').textContent=s[0];$('#device-label').textContent=s[1];$('#device-choice').textContent=s[2];$('#device-sub').textContent=s[3]});
const initialTitle=$('#dialog-title').textContent,initialContent=$('#dialog-content').textContent;
all('[data-info]').forEach(b=>b.onclick=()=>{$('#dialog-title').textContent=initialTitle;$('#dialog-content').textContent=initialContent;$('#info-dialog').showModal()});
const articles=[['Um personagem que recebe antes do primeiro pedido.','O Viko foi pensado como a presença acolhedora da Bunviko. Os olhos em forma de símbolos de código conectam o personagem à tecnologia. O sorriso e a silhueta de pão aproximam a marca do universo das lanchonetes e hamburguerias.'],['Menos etapas entre a vontade e a escolha.','A demonstração organiza o pedido em etapas: escolher onde comer, explorar o cardápio, personalizar e conferir a sacola. O objetivo do protótipo é tornar cada próxima ação clara e fácil de encontrar. A validação com clientes será parte dos próximos passos.'],['Um aparelho que encontra seu lugar na mesa.','A direção visual do hardware parte de uma carcaça arredondada, tela inclinada e botão superior. O conceito busca uma presença simpática no ambiente do restaurante. O modelo físico e seus componentes ainda precisam ser definidos e validados.']];
all('[data-article]').forEach(b=>b.onclick=()=>{const a=articles[Number(b.dataset.article)];$('#dialog-title').textContent=a[0];$('#dialog-content').textContent=a[1];$('#info-dialog').showModal()});
$('.close').onclick=()=>$('#info-dialog').close();$('#info-dialog').onclick=e=>{if(e.target===$('#info-dialog')){const r=e.target.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)e.target.close()}};
const heroVideo=document.querySelector('#hero-video');
if(heroVideo){
 const heroSection=document.querySelector('#inicio');
 heroVideo.muted=true;
 heroVideo.loop=true;
 heroVideo.controls=false;
 const initialRect=heroSection.getBoundingClientRect();
 let heroVisible=initialRect.bottom>0&&initialRect.top<window.innerHeight;
 const shouldPlay=()=>heroVisible&&document.visibilityState==='visible';
 const syncPlayback=()=>{
  if(shouldPlay()){
   if(heroVideo.paused)heroVideo.play().catch(()=>{});
  }else heroVideo.pause();
 };
 if('IntersectionObserver' in window){
  const videoObserver=new IntersectionObserver(([entry])=>{
   heroVisible=entry.isIntersecting&&entry.intersectionRect.height>0;
   syncPlayback();
  },{threshold:0});
  videoObserver.observe(heroSection);
 }else{
  window.addEventListener('scroll',()=>{
   const rect=heroSection.getBoundingClientRect();
   heroVisible=rect.bottom>0&&rect.top<window.innerHeight;
   syncPlayback();
  },{passive:true});
 }
 document.addEventListener('visibilitychange',syncPlayback);
 window.addEventListener('pagehide',()=>heroVideo.pause());
 window.addEventListener('pageshow',syncPlayback);
 heroVideo.addEventListener('canplay',syncPlayback);
 heroVideo.addEventListener('play',()=>{if(!shouldPlay())heroVideo.pause();});
 syncPlayback();
}