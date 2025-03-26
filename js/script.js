
// Recupero elementi DOM e inizializzo variabili necessarie

const age = document.getElementById(`mettiEta`);
const km = document.getElementById(`mettiKm`);
const button = document.querySelector(`.pulsanteInvia`)
let message;
let prezzo;
const nome = document.getElementById(`nome`)
const offerta = document.getElementById(`offerta`)
const carrozza = document.getElementById(`carrozza`)
const codiceCp = document.getElementById(`codiceCp`)
const costoTotale = document.getElementById(`costoTotale`)
let randomCp
let tipoOfferta

// Corpo del programma

button.addEventListener(`click`, function(event){
    event.preventDefault();
    // numero random per il codiceCP e lo mostro
    randomCp = Math.floor(Math.random()*104390) +1;
    codiceCp.innerHTML=randomCp;
    
    // numero random per la carrozza e lo mostro
    randomCarrozza = Math.floor(Math.random()*22) +1;
    carrozza.innerHTML=randomCarrozza;
    
    
    // mostro nome
    nome.innerHTML=mettiNome.value;
    
    // calcolo prezzo
    prezzo = km.value * 0.21;
    
    
if(age.value < 18){
        
    prezzo*= 0.8;
    message= `hai diritto ad uno sconto del 20% il prezzo è di ${prezzo.toFixed(2)}&euro;`
    tipoOfferta= `Biglietto Under 18`
    console.log (message)
    
}
else if(age.value > 65){
    
    prezzo*= 0.6;
    message= `hai diritto ad uno sconto del 40% il prezzo è di ${prezzo.toFixed(2)}&euro;`
    tipoOfferta= `Biglietto Over 65`
    console.log (message)
}
else{
    message= `il prezzo è di ${prezzo.toFixed(2)}&euro;`
    tipoOfferta= `Biglietto standard`
    console.log (message)
}

// mostro prezzo
costoTotale.innerHTML=message

// mostro a che tipo di offerta si ha diritto
offerta.innerHTML=tipoOfferta
})