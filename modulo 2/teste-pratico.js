/* 1º O aluno deverá criar um programa para informar a soma de todos os múltiplos 
de 3 ou 5 menores que determinado número.*/

/* 2º 
*/
var multiplos3 = [];
var mult3 = 0;
var mult = 1;
var totalsoma = 0;

function extraindoMultiplos()
{
    
    while (mult3 < 10)
    {   
            
        mult3 = 3 * mult;
        multiplos3.push(mult3);
        mult ++;
        console.log(multiplos3);
    }
        
}

function somandoMultiplos()
{
    for (let i = 0; i < multiplos3.length; i++) 
    {     
        totalsoma = multiplos3[i] + totalsoma;   
    }    
}

//extraindoMultiplos();
//somandoMultiplos();
document.write("A soma de todos os múltiplos de 3  menores que 10 é " + totalsoma);

function Multi (numberChooser)
{
    for (let i = 0; i < numberChooser; i++) 
    {
       if (i / 3 == 0 || i / 5 == 0)
       {        
        multiplos3.push(i);           
       }
        
    }
}
