
// Recupero elementi DOM e inizializzo variabili necessarie

const age = document.getElementById(`mettiEtà`);
const km = document.getElementById(`mettiKm`);
const button = document.querySelector(`pulsanteInvia`)
let prezzo = km * 0.21;
let message;

// Corpo del programma
button.addEventListener(`click`, function(){
if(age < 18){
    prezzo= prezzo *0.8
    message= `hai diritto ad uno sconto del 20% il prezzo è di ${prezzo.toFixed}`
}
else if(age > 65){
    prezzo= prezzo *0.6
    message= `hai diritto ad uno sconto del 40% il prezzo è di ${prezzo.toFixed}`
}
else{
    prezzo= prezzo *0.8
    message= `hai diritto ad uno sconto del 20% il prezzo è di ${prezzo.toFixed}`
}
})
// Risultato finale

console.log (message)