function contar() {
    var inicio = document.getElementById('txtInicio')
    var fim = document.querySelector('input#txtFim')
    var passo = document.querySelector('input#txtPasso')
    var res = document.querySelector('div#res')
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossível contar!'
        //window.alert('[ERRO] Faltam Dados!')
        
    } else {
        res.innerHTML = 'Contando: <br>'
            
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if (p <= 0){
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            // contagem crescente
            for (var c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            // contagem regressiva
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`

        


    }
    
}