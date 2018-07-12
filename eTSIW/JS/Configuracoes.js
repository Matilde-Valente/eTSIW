logado = JSON.parse(localStorage.getItem("logado"))

window.onload = function () {
    let procurar = document.getElementById("procurar");
    let inputTabela = document.getElementById("inputTabela");
    utilizadores = JSON.parse(localStorage.getItem("utilizadores"));
    docentes = JSON.parse(localStorage.getItem("docentes"));
    parcerias = JSON.parse(localStorage.getItem("parcerias"));


    let logout = document.getElementById("logout")
    let eventosBotao = document.getElementById("eventos")
    let testemunhos = document.getElementById("testemunhos")
    let cDocentes = document.getElementById("consultarDocente")
    let configuracoes = document.getElementById("configuracoes")

    if (logado == null) {
        logout.style.display = 'none';
        configuracoes.style.display = 'none';
    }
    else {
        logout.style.display = 'block';
        for (let i = 0; i < logado.length; i++) {
            if (logado[2] == "admin") {
                eventosBotao.style.display = 'block';
                testemunhos.style.display = 'block';
                configuracoes.style.display = 'block';
                cDocentes.style.display = 'block';
                console.log("admin logado")
            }
            if (logado[2] == "estudante") {
                eventosBotao.style.display = 'block';
                testemunhos.style.display = 'block';
                configuracoes.style.display = 'none';
                cDocentes.style.display = 'block';
                console.log("estudante logado")
            }
            if (logado[2] == "docente") {
                eventosBotao.style.display = 'block';
                testemunhos.style.display = 'block';
                configuracoes.style.display = 'block';
                cDocentes.style.display = 'block';
                console.log("docente logado")
            }
        }
    }

    procurar.addEventListener("click", function (event) {
        RenderTable();

    });
}

function RenderTable() {
    let tblConfiguracoes = document.getElementById("tblConfiguracoes");

    if (inputTabela.value == "Estudantes") {
        let strHtml = "<thead><tr><th>#</th>" +
            "<th>Nome</th>" +
            "<th>Email</th>" +
            "<th>Estatuto</th>" +
            "</tr>" +
            "</thead><tbody>"

        for (var i = 0; i < utilizadores.length; i++) {
            strHtml += "<tr>" +
                "<td>" + (i + 1) + "</td>" +
                "<td>" + utilizadores[i]._nome + "</td>" +
                "<td>" + utilizadores[i]._email + "</td>" +
                "<td>" + utilizadores[i]._estatuto + "</td>" +
                "</tr>"
        }
        strHtml += "</tbody>"

        tblConfiguracoes.innerHTML = strHtml
    }
    else if (inputTabela.value == "Docentes") {

        let strHtml = "<thead><tr><th>#</th>" +
            "<th>Nome</th>" +
            "<th>Formação</th>" +
            "<th>UC lecionadas</th>" +
            "<th>Email</th>" +
            "</tr>" +
            "</thead><tbody>"

        for (var i = 0; i < docentes.length; i++) {
            //ESTE ARRAY NAO TÁ DEFINIDO AINDA
            strHtml += "<tr>" +
                "<td>" + (i + 1) + "</td>" +
                "<td>" + docentes[i]._nome + "</td>" +
                "<td>" + docentes[i]._formacao + "</td>" +
                "<td>" + docentes[i]._unidadesCurriculares + "</td>" +
                "<td>" + docentes[i]._email + "</td>" +
                "</tr>"
        }
        strHtml += "</tbody>"

        tblConfiguracoes.innerHTML = strHtml

    }


    else if (inputTabela.value == "Parcerias") {

        //MUDAR ARRAY PARA PARCERIAS
        let strHtml = "<thead><tr><th>#</th>" +
            "<th>Instituição</th>" +
            "<th>Localização</th>" +
            "<th>Link</th>" +
            "</tr>" +
            "</thead><tbody>"

        for (var i = 0; i < parcerias.length; i++) {
            //ESTE ARRAY NAO TÁ DEFINIDO AINDA
            strHtml += "<tr>" +
                "<td>" + (i + 1) + "</td>" +
                "<td>" + parcerias[i]._instituicao + "</td>" +
                "<td>" + parcerias[i]._localizacao + "</td>" +
                "<td>" + parcerias[i]._link + "</td>" +
                "</tr>"
        }
        strHtml += "</tbody>"

        tblConfiguracoes.innerHTML = strHtml
        //Este if acima tem erros
    }

    else if (inputTabela.value == "Categorias") {

        //MUDAR ARRAY PARA PARCERIAS
        let strHtml = "<thead><tr><th>#</th>" +
            "<th>Instituição</th>" +
            "<th>Localização</th>" +
            "<th>Link</th>" +
            "</tr>" +
            "</thead><tbody>"

        for (var i = 0; i < parcerias.length; i++) {
            //ESTE ARRAY NAO TÁ DEFINIDO AINDA
            strHtml += "<tr>" +
                "<td>" + (i + 1) + "</td>" +
                "<td>" + categorias[i]._instituicao + "</td>" +
                "<td>" + categorias[i]._localizacao + "</td>" +
                "<td>" + categorias[i]._link + "</td>" +
                "</tr>"
        }
        strHtml += "</tbody>"

        tblConfiguracoes.innerHTML = strHtml
        //Este if acima tem erros
    }

}
