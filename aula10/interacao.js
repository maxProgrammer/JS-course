
function clicar() {
    var a = window.document.querySelector('div#area')
    a.innerText = 'Clicou!'
    a.style.background = 'red'
}

function entrar() {
    var a = window.document.querySelector('div#area')
    a.innerText = 'Entrou!'
}

function sair() {
    var a = window.document.querySelector('div#area')
    a.innerText = 'Saiu!'
    a.style.background = 'green'
}
