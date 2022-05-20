

function divisao (n1 = 1, n2 = 2){
    if(n2 == 0){
        return '[Error]: It is not possible division by zero!'
    }
    else{
        return `${n1} / ${n2} = ${n1/n2}`
    }
}

console.log(divisao(2,0))
console.log(divisao(35,2))