const form = document.querySelector('#formulario'); //seleciona o formulario do index.html

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const inputMsg = event.target.querySelector('#campo_texto');
    const msg = inputMsg.value;
    const elemento = document.getElementById('mensagem');

    elemento.innerHTML = msg;
    inputMsg.value = ''; //Limpará o input text no final
});


