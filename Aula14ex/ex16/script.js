function contar() {  // ✅ Mudar o nome da função para "contar"
    var inicio = document.getElementById('txti');
    var fim = document.getElementById('txtf');
    var passo = document.getElementById('txtp');
    
    var iniciOM = Number(inicio.value);
    var fiMM = Number(fim.value);
    var passoM = Number(passo.value);
    var res = '';
    
    // ✅ Validação
    if (passoM <= 0) {
        alert('Passo inválido! Usando passo = 1');
        passoM = 1;
    }
    
    // ✅ Contagem
    for (var i = iniciOM; i <= fiMM; i += passoM) {
        res += i + ' ➡️ ';
    }
    
    // ✅ Exibir resultado
    document.getElementById('res').innerHTML = "Contando: <br>" + res + "🏁 FIM!";
}


/*function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = `Contando: <br>` //Substitui o valor da div res em html
        let i = Number(ini.value)  
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (i < f) {
            //Contagem crescente
            for (let c = 1; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            //Contagem regressiva
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML = 'FIM!'
    }
    
}*/