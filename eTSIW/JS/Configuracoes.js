window.onload = function() {
    let procurar = document.getElementById("procurar");
    let inputTabela = document.getElementById("inputTabela");
    utilizadores = JSON.parse(localStorage.getItem("utilizadores"));

    
    procurar.addEventListener("click", function(event) {
        RenderTable();

    });
event.preventDefault();
}

function RenderTable(){
    let tblConfiguracoes = document.getElementById("tblConfiguracoes");

    if(inputTabela.value =="Estudantes"){
        let strHtml = "<thead><tr><th>#</th>" +
        "<th>Nome</th>" +
        "<th>Email</th>" +
        "<th>Estatuto</th>"+
        "</tr>" + 
        "</thead><tbody>"
    
        for (var i = 0; i < utilizadores.length; i++) {
            strHtml += "<tr>" +
            "<td>" + (i+1) + "</td>" +
            "<td>" + utilizadores[i]._nome + "</td>" +
            "<td>" + utilizadores[i]._email + "</td>" +
            "<td>" + utilizadores[i]._estatuto + "</td>" +
            "</tr>"
        }
        strHtml += "</tbody>"
    
        tblConfiguracoes.innerHTML = strHtml
    }
    else if(inputTabela.value =="Docentes"){

        let strHtml = "<thead><tr><th>#</th>" +
        "<th>Nome</th>" +
        "<th>Formação</th>" +
        "<th>UC lecionadas</th>"+
        "<th>Short CV</th>"+
        "</tr>" + 
        "</thead><tbody>"
    
        for (var i = 0; i < utilizadores.length; i++) {
            //ESTE ARRAY NAO TÁ DEFINIDO AINDA
            strHtml += "<tr>" +
            "<td>" + (i+1) + "</td>" +
            "<td>" + utilizadores[i]._nome + "</td>" +
            "<td>" + utilizadores[i]._email + "</td>" +
            "<td>" + utilizadores[i]._estatuto + "</td>" +
            "</tr>"
        }
        strHtml += "</tbody>"
    
        tblConfiguracoes.innerHTML = strHtml
        //Este if acima tem erros
    }
    

    else if(inputTabela.value =="Parcerias"){
    
            //MUDAR ARRAY PARA PARCERIAS
            let strHtml = "<thead><tr><th>#</th>" +
            "<th>Nome</th>" +
            "<th>Formação</th>" +
            "<th>UC lecionadas</th>"+
            "<th>Short CV</th>"+
            "</tr>" + 
            "</thead><tbody>"
        
            for (var i = 0; i < utilizadores.length; i++) {
                //ESTE ARRAY NAO TÁ DEFINIDO AINDA
                strHtml += "<tr>" +
                "<td>" + (i+1) + "</td>" +
                "<td>" + utilizadores[i]._nome + "</td>" +
                "<td>" + utilizadores[i]._email + "</td>" +
                "<td>" + utilizadores[i]._estatuto + "</td>" +
                "</tr>"
            }
            strHtml += "</tbody>"
        
            tblConfiguracoes.innerHTML = strHtml
            //Este if acima tem erros
        }
        
    }
