
function verificar() {
    var txtvel = window.document.querySelector('input#txtvel')
    var btn1 = window.document.querySelector('button#txtverificar')
    var vel = Number(txtvel.value)
    var velMax = 60
    var result = window.document.querySelector('div#res')

    if (vel > velMax) {
        result.innerHTML = `A velocidade máxima permitida é <strong>${velMax}Km/h</strong> e sua velocidade 
            registrada foi <strong>${vel}Km/h</strong>. Você foi multado!`
    }
    else {
        result.innerHTML = `Sua velocidade atual é <strong>${vel}Km/h</strong> dirija com cuidado!`
    }

}
