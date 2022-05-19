function tabuada() {
    var begin = window.document.querySelector('input#txinput')
    var res = window.document.querySelector('select#seltab')
    entrada = Number(begin.value)

    if (begin.value.length == 0) {
        res.innerHTML = '[ERRO]. Necessário informar um número!'
    } else {

        for (var i = 1; i <= entrada; i++) {
            res.innerHTML = `Tabuada de ${i}: `
            for(var j = 1; j <=10; j++){
                var result = i * j
                res.innerHTML += `${i} * ${j} = ${result} `

            }
        }

    }

}


