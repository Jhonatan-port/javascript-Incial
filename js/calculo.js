var titulo = document.querySelector(".titulo")

var pacientes = document.querySelectorAll(".paciente");
for(var i = 0; i < pacientes.length; i++){
   
    var paciente = pacientes[i];

    
    var tdAltura = paciente.querySelector(".info-altura");
    var tdPeso = paciente.querySelector(".info-peso");
    var tdImc = paciente.querySelector(".info-imc");


    var altura = tdAltura.textContent;
    var peso = tdPeso.textContent;

    var alturaEhValida = validaAltura(altura)
    var pesoEhValido = validaPeso(peso);

    
    if (!pesoEhValido){
        console.log("Peso inválido!");
        tdPeso.textContent = "peso inválido!";
        paciente.classList.add("paciente-invalido")
    }
    if (!alturaEhValida) {
        console.log("Altura inválida!");
        tdAltura.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido")
    }

    if (alturaEhValida && pesoEhValido) {

        var imc = calculaImc(peso,altura)
        tdImc.textContent = imc;
    } else {
        tdImc.textContent = "Altura e/ou peso inválidos!"
    }
}

function validaPeso(peso){
    if (peso <= 0 || peso > 1000) {
        return false
    }else{
        return true
    }
}

function validaAltura(altura)
{
    if (altura <= 0 || altura >= 3) {
        return false
    }else{
        return true
    }
}
function calculaImc(peso,altura){
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2)
}