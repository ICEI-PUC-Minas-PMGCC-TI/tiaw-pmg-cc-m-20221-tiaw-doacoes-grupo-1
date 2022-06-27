const menu = document.querySelector('#menu');
const overlay = document.querySelector(".overlay");
const superlay = document.querySelector(".superlay");

superlay.onclick = () => {
   const visibility = menu.getAttribute('aria-expanded');
   if(visibility === 'false') menu.setAttribute('aria-expanded', true);
   else if(visibility === 'true') menu.setAttribute('aria-expanded', false);
   overlay.classList.toggle("open");
   superlay.classList.toggle("open");
}

menu.onclick = () => {
   const visibility = menu.getAttribute('aria-expanded');
   if(visibility === 'false') menu.setAttribute('aria-expanded', true);
   else if(visibility === 'true') menu.setAttribute('aria-expanded', false);
   overlay.classList.toggle("open");
   superlay.classList.toggle("open");
}