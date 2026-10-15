document.addEventListener('DOMContentLoaded',()=>{
 const year=new Date().getFullYear();
 document.querySelectorAll('#year,#year-footer').forEach(el=>el.textContent=year);
 const links=[...document.querySelectorAll('.nav-link')];
 const sections=links.map(link=>document.querySelector(link.getAttribute('href'))).filter(Boolean);
 const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting){links.forEach(link=>link.classList.toggle('active',link.getAttribute('href')==='#'+entry.target.id));}});
 },{rootMargin:'-25% 0px -60% 0px'});
 sections.forEach(section=>observer.observe(section));
});
