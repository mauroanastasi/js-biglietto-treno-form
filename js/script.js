
// Recupero elementi DOM e inizializzo variabili necessarie

const age = document.getElementById(`mettiEta`);
const km = document.getElementById(`mettiKm`);
const button = document.querySelector(`.pulsanteInvia`)
let message;
let prezzo;

// Corpo del programma
button.addEventListener(`click`, function(){
    prezzo = km.value * 0.21;

if(age.value < 18){

    prezzo*= 0.8;
    message= `hai diritto ad uno sconto del 20% il prezzo è di ${prezzo.toFixed(2)}`
    console.log (message)
}
else if(age.value > 65){

    prezzo*= 0.6;
    message= `hai diritto ad uno sconto del 40% il prezzo è di ${prezzo.toFixed(2)}`
    console.log (message)
}
else{
    message= `il prezzo è di ${prezzo.toFixed(2)}`
    console.log (message)
}
})
// Risultato finale
