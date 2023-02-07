var numeroA = document.querySelector('#numberA');
var numeroB = document.querySelector('#numberB');
var numeroAConvert = parseFloat(numeroA.value);
var numeroBConvert = parseFloat(numeroB.value);
var button = document.querySelector('button');


button.addEventListener('click', print);

//funcões operandas aritmeticas
function soma(numeroA, numeroB) 
{
    var soma = numeroA + numeroB;
    return soma;    
}

function multiplicacao(numeroA, numeroB) 
{
    var multiplicar = numeroA * numeroB;
    return multiplicar;    
}

function potenciadeAnaBaseB(numeroA, numeroB) 
{
    var potenciaAemB = Math.pow(numeroA, numeroB);
    return potenciaAemB;    
}

function raizQuadradaB(numeroB) 
{
    var calcRaizQuadradaB = Math.sqrt(numeroB);
    return calcRaizQuadradaB;    
}

function porcentagemdeAemRelacaoB(numeroA, numeroB) 
{
    var calcPorcentagemAemB = ((numeroB/100)/(numeroA*100))/100;
    return calcPorcentagemAemB;    
}

function subtracaoAMenosB(numeroA, numeroB) 
{
    var AmenosB = numeroA - numeroB;
    return AmenosB;    
}

function divisaoAporB(numeroA, numeroB) 
{
    var calcDividaAporB = numeroA / numeroB;
    return calcDividaAporB;    
}

function potenciadeBnaBaseA(numeroA, numeroB) 
{
    var calcPotenciaBemA = Math.pow(numeroB, numeroA);
    return calcPotenciaBemA;    
}

function fatorialA(numeroA) 
{
    var valoresDeA = []
    for (let i = 0; i < numeroA; i++) 
    {
        
    }
    var calcFatorialA = numeroA;
    return calcFatorialA;    
}


