function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.querySelector('input#txano')
    var res = window.document.querySelector('div#res')

    if (fano.value.lenght == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }
    else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 12) {
                img.src = './img/m_5.png'
            }
            else {
                if (idade < 21) {
                    img.src = './img/m_15.png'
                } else {
                    if (idade < 60) {
                        img.src = './img/m_40.png'
                    }
                    else {
                        img.src = './img/m_70.png'
                    }
                }
            }
        }
        else {
            if (fsex[1].checked) {
                genero = 'Mulher'
                if (idade >= 0 && idade < 12) {
                    img.src = './img/f_5.png'
                }
                else {
                    if (idade < 21) {
                        img.src = './img/f_15.png'
                    } else {
                        if (idade < 60) {
                            img.src = './img/f_40.png'
                        }
                        else {
                            img.src = './img/f_70.png'
                        }
                    }
                }
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)


    }


}

