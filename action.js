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

// Creo una lista di parole nell'array che verranno censuratore


// Faccio la condizione affinchè le parole proibite vengano sostituite dall'x

function censura(testo, parole) {

  var arrText = testo.split(" ");
  var arrWords = parole.split(" ");

  for (var i = 0; i < arrText.length; i++) {

      if (arrWords.includes(arrText[i])) {
        arrText[i] = "xxx";
        console.log(arrText[i]);
      }
}
    console.log(arrWords);
    return arrText.join(" ");

}

var test = prompt("Inserisci un testo che verrà successivamente censurato");
var parolex = prompt("Inserisci parole da censurare");

console.log(censura(test, parolex));
