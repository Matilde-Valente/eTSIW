let registado = false;
window.onload = function () {
    let procurar = document.getElementById("procurar");
    let criarParceria = document.getElementById("criarParceria")
    let inputTabela = document.getElementById("inputTabela");
    utilizadores = JSON.parse(localStorage.getItem("utilizadores"));
    docentes = JSON.parse(localStorage.getItem("docentes"));

    procurar.addEventListener("click", function (event) {
        RenderTable();
    });

    //ESTE SEGMENTO AQUI EM BAIXO TEM ERRO, NAO REGISTA DEPOIS DE CLICAR SUBMIT
    criarParceria.addEventListener("click", function (event) {
        console.log("clickou no botao");
        let modalParceria = document.getElementById("modalParceria");
        let strErro = "";


        modalParceria.addEventListener("submit", function (event) {
            let nomeInstituicao = document.getElementById("modalNomeInstituicao");
            let localizacaoInstituicao = document.getElementById("modalLocalizaoInstituicao");
            let linkInstituicao = document.getElementById("modalLinkInstituicao");
            parcerias = JSON.parse(localStorage.getItem("parcerias"));
            console.log("carregou parcerias da cache")

            for (let i = 0; i < parcerias.length; i++) {
                //ver se ja existe email usado
                if (parcerias[i]._instituicao == nomeInstituicao.value) {
                    strErro = "Instituição já existente!"
                    registado = true;
                    event.preventDefault();
                    nomeInstituicao.focus()
                    break;
                }
                else {
                    registado = false;
                }
            }

            if (strErro == "") {
                if (registado == false) {
                    let novaParceria = new Parceria(nomeInstituicao.value, localizacaoInstituicao.value, linkInstituicao.value)
                    parcerias.push(novaParceria);
                    alert("Parceria criada com sucesso")

                    localStorage.setItem("parcerias", JSON.stringify(parcerias));
                    console.log(parcerias);
                    location.reload();
                }
            }
            else {
                alert(strErro)
                registado = false;
                event.preventDefault();
            }
        })
    })
    event.preventDefault();
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
            if (utilizadores[i]._estatuto == "estudante") {
                strHtml += "<tr>" +
                    "<td>" + (i + 1) + "</td>" +
                    "<td>" + utilizadores[i]._nome + "</td>" +
                    "<td>" + utilizadores[i]._email + "</td>" +
                    "<td>" + utilizadores[i]._estatuto + "</td>" +
                    "</tr>"
            }
        }
        strHtml += "</tbody>"

        tblConfiguracoes.innerHTML = strHtml

    }
    else if (inputTabela.value == "Docentes") {

        let strHtml = "<thead><tr><th>#</th>" +
            "<th>Nome</th>" +
            "<th>Formação</th>" +
            "<th>UC lecionadas</th>" +
            "<th>Short CV</th>" +
            "</tr>" +
            "</thead><tbody>"

        for (var i = 0; i < docentes.length; i++) {

            strHtml += "<tr>" +
                "<td>" + (i + 1) + "</td>" +
                "<td>" + docentes[i]._nome + "</td>" +
                "<td>" + docentes[i]._formacao + "</td>" +
                "<td>" + docentes[i]._unidadesCurriculares + "</td>" +
                "<td>" + docentes[i]._shortCV + "</td>" +
                "</tr>"
        }
        strHtml += "</tbody>"

        tblConfiguracoes.innerHTML = strHtml
    }


    else if (inputTabela.value == "Parcerias") {

        //MUDAR ARRAY PARA PARCERIAS
        let strHtml = "<thead><tr><th>#</th>" +
            "<th>Nome</th>" +
            "<th>Formação</th>" +
            "<th>UC lecionadas</th>" +
            "<th>Short CV</th>" +
            "</tr>" +
            "</thead><tbody>"

        for (var i = 0; i < utilizadores.length; i++) {
            //ESTE ARRAY NAO TÁ DEFINIDO AINDA
            strHtml += "<tr>" +
                "<td>" + (i + 1) + "</td>" +
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
