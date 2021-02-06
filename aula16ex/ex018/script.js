function adicionarNum(array) {
    let num = document.querySelector('input#txtNum')
    let valor = Number(num.value)
    
    if (num.value.length == 0) {
        alert('Adicione valores antes de finalizar')
    } else if ((array.indexOf(valor) != -1) || (valor > 100) || (valor < 1)) {
        alert('Valor inválido ou já encontrado na lista')
    } else {
        let tabela = document.querySelector('select#valores')
        let elemento = document.createElement('option')
        let res = document.querySelector('div#res')
        res.innerHTML = ''
        array.push(valor)
        elemento.innerText = `Valor ${array[array.length - 1 ]} adicionado`
        tabela.appendChild(elemento)
    }
    num.value = ''
    num.focus()
}

function maior(array) {
    max = array[0]
    for(let i in array) {
        if (array[i] > max) {
            max = array[i]
        }
    }
    return max
}

function menor(array) {
    min = array[0]
    for(let i in array) {
        if (array[i] < min) {
            min = array[i]
        }
    }
    return min
}

function soma(array) {
    let sum = 0
    for(let i in array) {
        sum += array[i]
    }
    return sum
}

function finalizar(array) {
    if (array.length == 0) {
        alert('Adicione valores antes de finalizar')
    } else {
        let res = document.querySelector('div#res')
        let tamanho = array.length
        res.innerHTML = `Ao todo, temos ${tamanho} números cadastrados <br><br>`
        let max = maior(array)
        let min = menor(array)
        res.innerHTML += `O maior valor informado foi ${max} <br><br>`
        res.innerHTML += `O menor valor informado foi ${min} <br><br>`    
        let sum = soma(array)
        res.innerHTML += `Somando todos os valores, temos ${sum} <br><br>`
        let media = sum / tamanho
        res.innerHTML += `A média dos valores digitados é ${media} <br><br>`
    }
    

}

var array = []