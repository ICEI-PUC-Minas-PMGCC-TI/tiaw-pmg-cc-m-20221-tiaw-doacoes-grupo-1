/* JS ORDER GRID */
const menu = document.querySelector('#menu');
const overlay = document.querySelector(".overlay");
const superlay = document.querySelector(".superlay");

menu.onclick = () => {
   const visibility = menu.getAttribute('aria-expanded');
   if(visibility === 'false') menu.setAttribute('aria-expanded', true);
   else if(visibility === 'true') menu.setAttribute('aria-expanded', false);
   overlay.classList.toggle("open");
   superlay.classList.toggle("open");
}

/* FORM-NOTIFICATION */
const form = document.querySelector('#formNotification');
const nome = document.querySelector('#name');
const gmail = document.querySelector('#email');
const mensagem = document.querySelector('#message');
const btnForm = document.querySelector('#btnFormNotify');

const sum = (a = 0, b = 0) => ((typeof a) == 'number' && (typeof b) == 'number') ? a+b : 0; //exemplo

form.onsubmit = (e) => {
   const identificador = {
      nome: nome.value,
      email: gmail.value,
      mensagem: mensagem.value,
      data: new Date()
   }
   localStorage.setItem('identificador', JSON.stringify(identificador));
}

form.onclick = (e) => {
   e.target.onblur = () => {
      if (e.target.value.length == 0) {
         if (e.target != btnForm) {
            e.target.style.borderColor = "red";
         }
      } else e.target.style.borderColor = "inherit";

      if (nome.value.length == 0 || gmail.value.length == 0 || mensagem.value.length == 0) btnForm.disabled = true;
      else btnForm.disabled = false;
   }
}

mensagem.oninput = () => {
   if (mensagem.value.length > 300) {
      mensagem.value = mensagem.value.substr(0, mensagem.value.length - 1);
   }
}

