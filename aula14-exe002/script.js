function tabuada() {
    var begin = window.document.querySelector('input#txinput')
    var tab = window.document.querySelector('select#seltab')
    entrada = Number(begin.value)

    if (begin.value.length == 0) {
        window.alert('[ERRO]. Necessário informar um número!')
    } else {

        for (var i = 1; i <= 10; i++) {
            var item = document.createElement('option')
            item.text = `${i} * ${entrada} = ${i * entrada} `
            tab.appendChild(item)

        }
    }

}



