  //  2) Inserire due stringhe e visualizzare quella con lunghezza maggiore con numero dei caratteri.

  alert('ciao');

  let parola1 = prompt('inserire una parola');
  let parola2 = prompt('inserire una seconda parola');

  document.getElementById('parola1').innerHTML = 'la prima parola è :' + ' ' + parola1;
  document.getElementById('parola2').innerHTML = 'la seconda parola è :' + ' ' + parola2;


  function lunghezza() {
    if(parola1.length > parola2.length) {
      document.getElementById('risultato').innerHTML = 'é più lunga : ' + ' ' + parola1;
    }else {
      document.getElementById('risultato').innerHTML = 'é più lunga : ' + ' ' + parola2;
    }
  }
