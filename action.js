// CENSURATORE
// - Il software riceve in input un lungo testo e una serie di
// parole da censurare.
// - Restituisce il testo con xxx al posto delle parole censurate.
// - Stampa un “badword index” calcolato come il numero di parole
// censurate su il numero di parole totali
//
// *NOTE=* il nostro censuratore, diventa una funzione che accetterà
// due argomenti:   “testo” e “paroleproibite”.
// se non vi viene immediato il farlo con una funzione, prima fate
// funzionare lo script e poi vi
// preoccupate della questione “farlo diventare una funzione!

// Faccio fare l'input all'utente
var test = prompt("Inserisci un testo che verrà successivamente censurato");
var parolex = prompt("Inserisci parole da censurare");
// Creo una lista di parole nell'array che verranno censuratore


// Faccio la condizione affinchè le parole proibite vengano sostituite dall'x

function censura(testo, parole) {
  var arrText = testo.split(' ');
  var arrWords = parole.split(' ');

  for (var i = 0; i < arrTesto.length; i++) {
    for (var j = 0; i < arrParole.length; j++) {
      if (arrText[i].includes(arrWords[j])) {
        arrTesto[i] = "xxx";
        console.log(arrText[i]);
      }
    }
    console.log(arrText);
    return arrText.join(" ");
}
}


console.log(censura(test, parolex));
