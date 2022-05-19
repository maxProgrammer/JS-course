function contar() {
    var begin = window.document.querySelector('input#txbegin')
    var end = window.document.querySelector('input#txend')
    var step = window.document.querySelector('input#txstep')
    var res = window.document.querySelector('div#res')

    if (begin.value.length == 0 || end.value.length == 0 || step.value.length == 0) {
        res.innerHTML = '[ERRO]. Necessário preencher todos os campos!'
    } else {
        if (step.value == 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
        }
        else {
            res.innerHTML = 'Contando: '
            var lbegin = Number(begin.value)
            var lend = Number(end.value)
            var lstep = Number(step.value)
            if (lbegin > lend) {
                // contagem descrescente
                for (lbegin; lbegin >= lend; lbegin -= lstep) {
                    res.innerHTML += `${lbegin} \u{1F449} `
                }
            }
            else {
                // contagem crescente
                for (lbegin; lbegin <= lend; lbegin += lstep) {
                    res.innerHTML += `${lbegin} \u{1F449} `

                }

            }

            res.innerHTML += `\u{1F3C1}`

        }

    }

}

