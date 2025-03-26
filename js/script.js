
// Recupero elementi DOM e inizializzo variabili necessarie

const age = document.getElementById(`mettiEtà`);
const km = document.getElementById(`mettiKm`);
const button = document.querySelector(`.pulsanteInvia`)
let prezzo = km.value * 0.21;
let message;

// Corpo del programma
button.addEventListener(`click`, function(){
if(km.value < 18){
    prezzo= prezzo *0.8
    message= `hai diritto ad uno sconto del 20% il prezzo è di ${prezzo.toFixed(2)}`
}
else if(age.value > 65){
    prezzo= prezzo *0.6
    message= `hai diritto ad uno sconto del 40% il prezzo è di ${prezzo.toFixed(2)}`
}
else{
    prezzo= prezzo *0.8
    message= `hai diritto ad uno sconto del 20% il prezzo è di ${prezzo.toFixed(2)}`
}
})
// Risultato finale

console.log (message)