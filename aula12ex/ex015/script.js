function verificar() {
    var data = new Date()
    var ano = data.getFullYear() // ano atual ex:2021
    var form_ano = document.getElementById('txtano') // input que digita o ano de nascimento
    var res = document.querySelector('div#res') // div que irá aparecer o resultado final

    if (form_ano.value.length == 0 || Number(form_ano.value) > ano) {
        // se o input estiver vazio ou o ano escolhido for maior que o atual
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var form_esc = document.getElementsByName('radesc')
        var idade = ano - Number(form_ano.value)
        var escolha = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if (form_esc[0].checked) {
            escolha = 'Santiago'
            img.setAttribute('src', 'santiago.png')
            
        } else {
            escolha = 'Alguém'
            if (idade >= 0 && idade < 15) {
                // Criança
                img.setAttribute('src', 'homemmenino.png')
            } else if (idade < 30) {
                // Jovem
                img.setAttribute('src', 'homemjovem.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'homemadulto.png')
            } else {
                // Idoso
                img.setAttribute('src', 'homemVelho.png')
            }
        }
        res.style.textAlign = 'center' // centralizar o texto
        res.innerHTML = `Detectamos ${escolha} com ${idade} anos.`
        res.appendChild(img)
    }
}