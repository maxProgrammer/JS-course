let fila = []

function adicionar() {
    let begin = window.document.querySelector('input#txinput')
    let tab = window.document.querySelector('select#seltab')
    let res = window.document.querySelector('div#res')
    let entrada = Number(begin.value)


    // garante que as entradas estejam entre 1 e 100
    if (entrada < 1 || entrada > 100) {
        window.alert('[ERROR]. Entre com um valor entre 1 e 100!')
    } else {
        // garante que não seja inserido número repetidos
        if (fila.includes(entrada)) {
            window.alert('[ERROR] Não é permitido adicionar números repetidos.')
        }
        //insere números não repetidos entre 1 e 100
        else {
            fila.push(entrada)
            var item = document.createElement('option')
            item.text = `Valor ${entrada} adicionado.`
            tab.appendChild(item)
        }
    }

}

function finalizar() {
    // retorna mensagem de erro se não houve adição de algum número
    if (fila.length === 0) {
        window.alert('[ERROR]. Adicione valores antes de finalizar!')
    }
    else {
        // ordena a lista para facilitar a identicação do maior e menor
        fila.sort();
        let qtd = document.createElement("p")
        let qtdtext = document.createTextNode(`Ao todo, temos ${fila.length} números cadastrados.\n`)
        qtd.appendChild(qtdtext)
        res.appendChild(qtd)
        let maior = document.createElement("p")
        qtdtext = document.createTextNode(`O maior valor informado foi  ${fila[(fila.length - 1)]}.`)
        maior.appendChild(qtdtext);
        res.appendChild(maior);
        let menor = document.createElement("p")
        qtdtext = document.createTextNode(`O menor valor informado foi  ${fila[0]}.`)
        menor.appendChild(qtdtext)
        res.appendChild(menor)
        // verifica a soma total dos elementos adicionados
        let sum = 0
        for (let i in fila) {
            sum += fila[i];
        }
        let total = document.createElement("p")
        qtdtext = document.createTextNode(`Somando todos os valores, temos ${sum}`)
        total.appendChild(qtdtext)
        res.appendChild(total)
        let media = document.createElement("p")
        qtdtext = document.createTextNode(`A média dos valores digitados é ${sum / fila.length}`)
        res.appendChild(qtdtext)
    }

}



