
// Cursor
const cur=document.getElementById('cursor'),ring=document.getElementById('cursorRing');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cur.style.transform=`translate(${mx-4}px,${my-4}px)`;});
(function animRing(){rx+=(mx-rx)*.12;ry+=(my-ry)*.12;ring.style.transform=`translate(${rx-16}px,${ry-16}px)`;requestAnimationFrame(animRing);})();
document.querySelectorAll('a,button,.skill-card,.project-card,.concept-card,.cert-card').forEach(el=>{
  el.addEventListener('mouseenter',()=>ring.classList.add('hover'));
  el.addEventListener('mouseleave',()=>ring.classList.remove('hover'));
});

// Scroll reveal
const obs=new IntersectionObserver(ent=>ent.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible');}),{threshold:.08});
document.querySelectorAll('.reveal,.reveal-l').forEach(el=>obs.observe(el));

// Parallax
window.addEventListener('scroll',()=>{
  const s=window.scrollY;
  const g=document.querySelector('.hero-grid');
  if(g)g.style.transform=`translateY(${s*.25}px)`;
});

// Project tabs
function showProj(id,btn){
  document.querySelectorAll('.proj-section').forEach(s=>s.classList.remove('active'));
  document.querySelectorAll('.ptab').forEach(b=>b.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  btn.classList.add('active');
  // Re-trigger reveal
  document.querySelectorAll('#'+id+' .reveal').forEach(el=>{el.classList.remove('visible');setTimeout(()=>el.classList.add('visible'),50);});
}

// Modal certificat
function openCert(dataUrl, title, filename){
  document.getElementById('modalTitle').textContent=title;
  document.getElementById('modalFrame').src=dataUrl;
  document.getElementById('modalDl').href=dataUrl;
  document.getElementById('modalDl').download=filename;
  document.getElementById('certModal').classList.add('open');
  document.body.style.overflow='hidden';
}
function closeModal(){
  document.getElementById('certModal').classList.remove('open');
  document.getElementById('modalFrame').src='';
  document.body.style.overflow='';
}
document.getElementById('certModal').addEventListener('click',function(e){if(e.target===this)closeModal();});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal();});

// WhatsApp form
function sendWA(){
  const n=document.getElementById('fn').value||'un visiteur';
  const s=document.getElementById('fs').value||'Contact';
  const m=document.getElementById('fm').value||'...';
  window.open(`https://wa.me/237678025714?text=Bonjour%20Arnold%20!%20Je%20suis%20${encodeURIComponent(n)}.%0ASujet%20:%20${encodeURIComponent(s)}.%0AMessage%20:%20${encodeURIComponent(m)}`,'_blank');
}