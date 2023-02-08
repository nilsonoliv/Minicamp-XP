/* O QUE FALTA FAZER?
Todas as funções ja foram testadas, agora falta passar os valores dos inputs 
para as funções e espelhar esse valor na calculadora*/


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
    console.log(soma);   
}

//TESTADO OK
function multiplicacao(numeroA, numeroB) 
{
    var multiplicar = numeroA * numeroB;
    return multiplicar;
    console.log(multiplicar);    
}

//TESTADO OK
function potenciadeAnaBaseB(numeroA, numeroB) 
{
    var potenciaAemB = Math.pow(numeroB, numeroA);
    return potenciaAemB;   
    console.log(potenciaAemB); 
}

//TESTADO OK
function raizQuadradaB(numeroB) 
{
    var calcRaizQuadradaB = Math.sqrt(numeroB);
    return calcRaizQuadradaB;   
    console.log(calcRaizQuadradaB); 
}

//TESTADO OK
function porcentagemdeAemRelacaoB(numeroA, numeroB) 
{
    var nA = numeroA*100;
    var nB = numeroB/100;
    var calcPorcentagemAemB = nA / nB;
    calcPorcentagemAemB = calcPorcentagemAemB / 100;
    return calcPorcentagemAemB; 
    console.log(calcPorcentagemAemB);    
}

//TESTADO OK
function subtracaoAMenosB(numeroA, numeroB) 
{
    var AmenosB = numeroA - numeroB;
    return AmenosB; 
    console.log(AmenosB);   
}

//TESTADO OK
function divisaoAporB(numeroA, numeroB) 
{
    var calcDividaAporB = numeroA / numeroB;
    return calcDividaAporB;  
    console.log(calcDividaAporB);  
}

//TESTADO OK
function potenciadeBnaBaseA(numeroA, numeroB) 
{
    var calcPotenciaBemA = Math.pow(numeroA, numeroB);
    return calcPotenciaBemA;
    console.log(calcPotenciaBemA);    
}

//TESTADO OK
function fatorialA(numeroA) 
{
    var calcFatorialA = 1;
    if(numeroA == 0)
    {
        return calcFatorialA = 1;
    }else
    {
        for (let i = 1; i <= numeroA; i++) 
        {
        calcFatorialA *= i;
        }
    }   
    return calcFatorialA;  
    console.log(calcFatorialA);
}

//TESTADO OK
function porcentagemdeBemRelacaoA(numeroA, numeroB) 
{
    var nB = numeroB*100;
    var nA = numeroA/100;
    var calcPorcentagemBemA = nB / nA;
    calcPorcentagemBemA = calcPorcentagemBemA / 100;
    return calcPorcentagemBemA;  
    console.log(calcPorcentagemBemA);  
}

//TESTADO OK
function subtracaoBMenosA(numeroA, numeroB) 
{
    var BmenosA = numeroB - numeroA;
    return BmenosA;
    console.log(BmenosA);    
}

//TESTADO OK
function divisaoBporA(numeroA, numeroB) 
{
    var calcDividaBporA = numeroB / numeroA;
    return calcDividaBporA;    
    console.log(calcDividaBporA);
}

//TESTADO OK
function raizQuadradaA(numeroA) 
{
    var calcRaizQuadradaA = Math.sqrt(numeroA);
    return calcRaizQuadradaA;  
    console.log(calcRaizQuadradaA);  
}

//TESTADO OK
function fatorialB(numeroB) 
{
    var calcFatorialB = 1;
    if(calcFatorialB == 0)
    {
        return calcFatorialB = 1;
    } else
    {
        for (let i = 1; i <= numeroB; i++) 
        {
        calcFatorialB = calcFatorialB * i;
        }
    }           
    return calcFatorialB; 
    console.log(calcFatorialB); 
}

//testado ok
function media(numeroA, numeroB) 
{
    var media = (numeroA + numeroB) / 2;
    return media; 
    console.log(media);   
}