let dolarAtual = 0;
let euroAtual = 0;

async function atualizarCotacoes() {
    const res = await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL");
    const data = await res.json();

    dolarAtual = Number(data.USDBRL.bid);
    euroAtual = Number(data.EURBRL.bid);

    document.getElementById("cot-dolar").textContent = dolarAtual.toFixed(2);
    document.getElementById("cot-euro").textContent = euroAtual.toFixed(2);
}

async function converterDolarEmReal() {
    const inDolar = document.getElementById('inDolar');
    const dolarResposta = document.getElementById('dolarResposta');

    dolarConvertido = Number(inDolar.value);

    let resultado = (dolarConvertido * dolarAtual).toFixed(2);

    dolarResposta.innerHTML = 'O resultado em real é R$: ' + resultado;
}

const btnDolar = document.getElementById('btn-dolar');
btnDolar.addEventListener('click' , converterDolarEmReal);

async function converterEuroEmReal() {
    const inEuro = document.getElementById('inEuro');
    const euroResposta = document.getElementById('euroResposta');

    euroConvertido = Number(inEuro.value);

    //operacoes 
    let resultado = (euroConvertido * euroAtual).toFixed(2)

    euroResposta.innerHTML = 'O resultado em real é R$: ' + resultado;
}

const btnEuro = document.getElementById('btn-euro');
btnEuro.addEventListener('click', converterEuroEmReal);


setInterval(atualizarCotacoes(), 300000);
