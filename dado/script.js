//alert('ciao');

//  4) Simulare il lancio di un dado attraverso un pulsante (visualizzare il numero).



function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Il max è escluso e il min è incluso
}

let numeroCasuale = getRandomInt(1,6);

document.getElementById('risultato').innerHTML = 'il numero uscito dal lancio del dado è:' + numeroCasuale;

console.log(numeroCasuale);
