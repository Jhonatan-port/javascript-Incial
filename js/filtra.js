/*Evento de input, serve para a pagina saber quando o usuario esta digitando em algum campo especifico*/
var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    var pacientes = document.querySelectorAll(".paciente");
    
    for(var i = 0; i < pacientes.length; i++){
        var paciente = pacientes[i];
        var tdNome = paciente.querySelector(".info-nome");
        var nome = tdNome.textContent;
        /* Expressão regular que sera usada para fazer a procura do nome do paciente*/
        var expressao = new RegExp(campoFiltro.value, "i");
        /*testando a expressão para adicionar a classe */
        if( !expressao.test(nome)){
            paciente.classList.add("invisivel");
        }else{
            paciente.classList.remove("invisivel");
        }
        /*caso o cmpo esteja vazio, ele passa removendo a classe de invisibilidade*/
        if(campoFiltro.value == ""){
            paciente.classList.remove("invisivel");
        }



    }
})