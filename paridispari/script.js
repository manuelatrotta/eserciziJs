//alert('ciao');

//Inserire 10 numeri e visualizzare quanti numeri sono pari e quanti dispari.

//pusho 10 numeri in un array
  let array = [];
  for (var i = 0; i < 10; i++) {
    let numbers = parseInt(prompt('inserire 10 numeri'));
   array.push(numbers);
}
  console.log(array);
  document.getElementById('numeri').innerHTML = 'i tuoi numeri:' + ' ' + array;

//con un ciclo for giro sull'array e se num = pari allora lo metto in un array pari altrimenti in uno dispari. Sfruttando la proprietà length so il numero degli elementi
let pari =[];
let dispari = [];
for (var i = 0; i < array.length; i++) {
  if(array[i] % 2 == 0){

    pari.push(array[i]);
    console.log('il numero è pari');
    console.log(pari);
    console.log(pari.length);
    document.getElementById('pari').innerHTML = 'i tuoi numeri pari sono questi:' + ' ' + pari + ' ' + 'conteggio' + ' '+ pari.length;
  }else {
    dispari.push(array[i]);
    console.log('è dispari');
    console.log(dispari);
    console.log(dispari.length);
    document.getElementById('dispari').innerHTML = 'i tuoi numeri dispari sono:' + ' ' + dispari + ' ' + 'conteggio' + ' '+ dispari.length;
  }
}
