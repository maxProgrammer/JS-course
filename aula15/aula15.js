function cadastrar() {
    let alunos = []

    let size = window.prompt('Quantos alunos serão cadastrados? ')
    size = Number(size)

    for (let i = 0; i < size; i++) {
        let nome = window.prompt(`Informe o nome do aluno ${i + 1}`)
        alunos[i] = nome;
    }

    document.write(`<h1>Lista de alunos:</h1>`)

    alunos.sort()

    for (let i = 0; i < size; i++) {
        document.write(`${alunos[i]}<br>`)
    }
}