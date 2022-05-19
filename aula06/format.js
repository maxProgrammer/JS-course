var nome = window.prompt('Qual é o seu nome?')
document.write(`Olá ${nome}! Seu nome tem ${nome.length} letras.<br/>`)
document.write(`Olá ${nome}! Seu nome em maiúsculas é ${nome.toUpperCase()}</br>`)
document.write(`Olá ${nome}! Seu nome em minuscúlas é ${nome.toLocaleLowerCase()}</br>`)
var num1 = 1450.7
console.log(num1.toFixed(2).replace('.', ','))
console.log(num1.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))