    let pessoas = document.getElementById("numeroPessoas");
    let tempoTotal = document.getElementById("tempo");
   
    let enviar = document.getElementById("submit");

function carne(tempo) {
        if (tempo.value>= 6){return 650 }
        else if(tempo.value < 6){return 400}
}  
function cerveja(tempo) {
        if (tempo.value >= 6) {return 1800}
        else if (tempo.value < 6){ return 1200}
} 
function calcular(){ 
    let resultado = document.getElementById("resultado");

    console.log("calculando...")
    let carneTotal = carne(tempo) * pessoas.value
    console.log(carneTotal, "gramas de carne")
    let cervejaTotal = cerveja(tempo) * pessoas.value
    console.log(cervejaTotal, "ml de cerveja")

    resultado.innerHTML = `<p>${carneTotal/1000} Kg de carne </p>`
    resultado.innerHTML += `<p>${Math.ceil(cervejaTotal/355)} latas de cerveja </p>`  
};


