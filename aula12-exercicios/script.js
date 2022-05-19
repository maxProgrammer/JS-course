function carregar() {
    var msg = window.document.querySelector('div#msg')
    var img = window.document.querySelector('img#imagem')

    var data = new Date()
    //var agora = data.getHours()
    var agora = 22
    msg.innerHTML = `Agora são ${agora} horas.`

    if (agora >=5 && agora < 12){
        img.src ='./img/dia_elipse.png'
        document.body.style.background ='#87ceeb'

    }
    else{
        if(agora >=12 && agora < 18){
            img.src ='./img/tarde_elipse.png'
            document.body.style.background ='#b9846f'

        }else{
            img.src ='./img/noite_elipse.png'
            document.body.style.background ='#515154'

        }
    }

}

