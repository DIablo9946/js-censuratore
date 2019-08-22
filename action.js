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

// Creo una lista di parole nell'array che verranno censuratore

var x = ["cazzo","porco","cavolo","cacchio","basta","dio"];

// Faccio la condizione affinchè le parole proibite vengano sostituite dall'x

if (test.includes(x)) {
  console.log(x);
  var censura = "***";
  x.replace(censura);
  console.log(x);
}

console.log(test);

// Faccio un badword index
