function tabuada() {
    let num = Number(document.querySelector('input#txtn').value)
    let tab = document.querySelector('select#seltab')

    if (num == 0) {
        window.alert('Por favor, digite um numero')
    } else {
        tab.innerHTML = ''
        for (let c = 1; c <= 10; c ++) {
            let res = num * c
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${res}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}