var botaoAdicionar = document.querySelector("#buscar-Pacientes");

botaoAdicionar.addEventListener("click",function(){
    
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    
    xhr.addEventListener("load", function(){
        
        if(xhr.status == 200){
        var resposta = xhr.responseText;
        var pacientes = JSON.parse(resposta);
        console.log(pacientes)
        pacientes.forEach(function(paciente) {
            adicionaPacienteNaTabela(paciente);    
        });
    }else{
        alert("erro na procura!")
    }
        

    })

    xhr.send();
})