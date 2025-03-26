
// Recupero elementi DOM e inizializzo variabili necessarie

const age = document.getElementById(`mettiEta`);
const km = document.getElementById(`mettiKm`);
const button = document.querySelector(`.pulsanteInvia`)
let message;
let prezzo;
const nome = document.getElementById(`nome`)
console.log(`name`)
const offerta = document.getElementById(`offerta`)
const carrozza = document.getElementById(`carrozza`)
const codiceCp = document.getElementById(`codiceCp`)
const costoTotale = document.getElementById(`costoTotale`)

// Corpo del programma

button.addEventListener(`click`, function(event){
    event.preventDefault()
    nome.innerHTML=mettiNome.value;
    prezzo = km.value * 0.21;

if(age.value < 18){

    prezzo*= 0.8;
    message= `hai diritto ad uno sconto del 20% il prezzo è di ${prezzo.toFixed(2)}&euro;`
    console.log (message)
}
else if(age.value > 65){

    prezzo*= 0.6;
    message= `hai diritto ad uno sconto del 40% il prezzo è di ${prezzo.toFixed(2)}&euro;`
    console.log (message)
}
else{
    message= `il prezzo è di ${prezzo.toFixed(2)}&euro;`
    console.log (message)
}
costoTotale.innerHTML=message
})