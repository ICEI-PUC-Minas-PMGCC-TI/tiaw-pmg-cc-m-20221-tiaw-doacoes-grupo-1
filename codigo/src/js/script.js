/* JS ORDER GRID */
$("#menu").click(function () {
   $(".overlay").toggleClass("open");
   $(".superlay").toggleClass("open");
});

$(".cross").click(function () {
   $(".overlay").addClass("open");
   $(".superlay").toggleClass("open");
});

/* FORM-NOTIFICATION */

const form = document.querySelector('#formNotification');
const nome = document.querySelector('#name');
const gmail = document.querySelector('#email');
const mensagem = document.querySelector('#message');
const btnForm = document.querySelector('#btnFormNotify');

form.onsubmit = (e) => {
   //e.preventDefault();
   const identificador = {
      nome: nome.value,
      email: gmail.value,
      mensagem: mensagem.value
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
   if(mensagem.value.length > 300) {
      mensagem.value = mensagem.value.substr(0, mensagem.value.length - 1);
   }
}
