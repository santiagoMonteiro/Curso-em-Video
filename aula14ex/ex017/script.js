function calcular() {
    let num = document.querySelector('input#txtNum')
    let tab = document.querySelector('select#seltab')

    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ''
        for (let cont = 1; cont <= 10; cont++) {
            let item = document.createElement('option')
            item.text = `${n} x ${cont} = ${cont * n}`
            //item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}