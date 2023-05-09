/* Exercício 1
/* No nosso sistema, o usuário será solicitado para inserir vários números, um após o outro
Quando ele digitar o número '0', devemos parar de solicitar novos inputs e imprimir no console a soma de todos os números por ele indicados
Ex.: Vamos supor que ele coloque:  10, 3, 50, 7, 0. 
O resultado deve ser: 70  */ 

/* let num = null
let soma = 0

while(num !== 0 ){

    num = Number(prompt("digite um numero"))

     soma = soma + num

}

alert(soma)
console.log(soma)
 */

/* Exercício 2
/* Escreva uma função que receba um array com números e devolva qual o maior dentro dele
Ex: Para o array [11, 15, 18, 14, 12, 13], a saída deve ser: "O maior número é 18" */ 



 /* let array= [11, 15 , 18 ,14 ,12, 13];



function maiorNum(array){
    let  maior = 0
for(let i =0; i<array.length; i ++){
    if(array[i]>maior){
        maior= array[i]
        }

    }
    return maior
}
console.log("array: "+ array)
console.log('o maior numero do array é '+maiorNum(array)) 
 */

/* function encontrarMaiorNumero(array) {
    let maiorNumero = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] > maiorNumero) {
        maiorNumero = array[i];
      }
    }
    return `O maior número é ${maiorNumero}`;
  }

  const array = [11, 15, 18, 14, 12, 13];
console.log(encontrarMaiorNumero(array));  */// Saída: O maior número é 18




/* Exercício 3

Considere que você tem um array com várias palavras. Nossa tarefa é criar uma função para imprimi-las em uma só mensagem colocando um espaço entre elas.
Ex: Para este array ["Oi", "sumido", "tudo", "bem?", "Saudades"], dar a mensagem "Oi sumido tudo bem? Saudades" */


/* const palavras = ['O', 'clube','do','povo']

function criarFrase(array){
    let frase1 = " ";
    for(let palavra of palavras){
        frase1 = frase1 + ' '+ palavra;
    }
return frase1 ;

}

console.log(criarFrase(palavras).trim()) */


let contador = 1
let paises = ['brasil', 'argentina' , 'russia' , 'lichtein']

for(let pais of paises){

    switch(pais){
        case 'brasil':
            console.log(contador++ +"-"+ pais +' /BR')
        break;
        case 'argentina':
            console.log(contador++ +"-"+ pais +' /AR')
        break;
        case 'russia':
            console.log(contador++ +"-"+ pais +' /RU')
        break;
        case 'lichtein':
            console.log(contador++ +"-"+ pais +' /LI')
        break;
        default:
        console.log('pais nao encontrado')
        break
    }
}
