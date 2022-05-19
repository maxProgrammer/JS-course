
        function verificar() {
            var txtidade = window.document.querySelector('input#txtidade')
            var btn1 = window.document.querySelector('button#txtverificar')
            var idade = Number(txtidade.value)
            var result = window.document.querySelector('div#res')

            if (idade < 16) {
                result.innerHTML = `Não vota!`
            }
            else {
                if (idade < 18 || idade > 65) {
                    result.innerHTML = `Voto opcional!`
                }
                else {
                    result.innerHTML = `Voto obrigatório!`
                }

            }
        }

