
var tabela = document.querySelector("table");
/*remove pacientes que foram duplo clicados / posteriormente colcoar mais uma coluna com X*/
tabela.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function(){/*Define um tempo de espera para executar o codigo que esta dentro da função*/
        event.target.parentNode.remove();
    },500);
    
});

/*

executa o mesmo processo porem le a tabela apenas quando é chamado, no carregamento da pagina
var pacientes = document.querySelectorAll("#tabela-paciente");
pacientes.forEach(function(paciente) {
    paciente.addEventListener("dblclick", function(event){
        event.target.remove();
    })
});
*/