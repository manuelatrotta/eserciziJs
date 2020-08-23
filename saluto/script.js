//alert('ola');

//    1) Un messaggio di saluto in base all’ora corrente (“buongiorno, buon pomeriggio, buona sera, buona notte…).
  //  2) Inserire due stringhe e visualizzare quella con lunghezza maggiore con numero dei caratteri.
  //  3) Inserire 10 numeri e visualizzare quanti numeri sono pari e quanti dispari.
  //  4) Simulare il lancio di un dado attraverso un pulsante (visualizzare il numero).
  //  5) Simulare X (input) lanci di un dado attraverso la funzione random e visualizzare il  numero delle uscite.



  let data = new Date();
  let gg, mm, aaaa, hh, minutes;
  gg = data.getDate() + "/";
  mm = data.getMonth() + 1 + "/";
  hh = data.getHours()  + ":";
  minutes = data.getMinutes();
  aaaa = data.getFullYear();
  document.getElementById('data').innerHTML = "Oggi è il " + gg + mm + aaaa;
  document.getElementById('orario').innerHTML='sono le ore' + ' '+ hh + minutes;

function saluto() {
var saluto = new Date();
var orario = saluto.getHours();
 if ((orario > 06) && (orario <= 12)){
   document.getElementById('saluto').innerHTML='Buon giorno!';
 }
 if ((orario > 12) && (orario <= 18))
 { document.getElementById('saluto').innerHTML='Buon pomeriggio!';
 }
  if ((orario > 18) && (orario <= 24)) {
     document.getElementById('saluto').innerHTML='Buona sera!';
   } if ((orario >= 00) && (orario <= 06)) {
      document.getElementById('saluto').innerHTML='Buona notte!';
    }
}
