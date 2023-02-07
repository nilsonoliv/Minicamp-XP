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
    var calcFatorialA = 1;
    for (let i = 1; i <= numeroA; i++) 
    {
       calcFatorialA = calcFatorialA * i;
    }
           
    return calcFatorialA;  
}

function porcentagemdeBemRelacaoA(numeroA, numeroB) 
{
    var nB = numeroB*100;
    var nA = numeroA/100;
    var calcPorcentagemBemA = nB / nA;
    calcPorcentagemBemA = calcPorcentagemBemA / 100;
    //return calcPorcentagemBemA;  
    console.log(calcPorcentagemBemA);  
}

function subtracaoBMenosA(numeroA, numeroB) 
{
    var BmenosA = numeroB - numeroA;
    return BmenosA;    
}

function divisaoBporA(numeroA, numeroB) 
{
    var calcDividaBporA = numeroB / numeroA;
    return calcDividaBporA;    
}

function raizQuadradaA(numeroA) 
{
    var calcRaizQuadradaA = Math.sqrt(numeroA);
    return calcRaizQuadradaA;    
}

function fatorialB(numeroB) 
{
    var calcFatorialB = 1;
    for (let i = 1; i <= numeroB; i++) 
    {
       calcFatorialB = calcFatorialB * i;
    }
           
    return calcFatorialB;  
}

function media(numeroA, numeroB) 
{
    var media = (numeroA + numeroB) / 2;
    return media;    
}