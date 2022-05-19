
function somar() {
    var txtn1 = window.document.querySelector('input#txtn1')
    var txtn2 = window.document.querySelector('input#txtn2')
    var btn1 = window.document.querySelector('button#somar')
    var result = window.document.querySelector('div#res')
    var num1 = Number(txtn1.value)
    var num2 = Number(txtn2.value)
    var sum = num1 + num2
    result.innerHTML = `Resultado: <strong>${sum}</strong>`
}

