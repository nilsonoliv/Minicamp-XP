var widthINP = document.querySelector('#n1');
var pesoIMP = document.querySelector('#n2');
var x = document.querySelector('button');
var resultado = document.querySelector('strong');
x.addEventListener('click', botao);

function calcIMC(tamanho, peso) 
{
    var imc = tamanho/(peso * peso);
    return imc
}

function botao() 
{
    var tamanho = parseFloat(widthINP.value);
    var peso = parseFloat(pesoIMP.value);
    var result = calcIMC(tamanho, peso);
    resultado.textContent = result;
}

