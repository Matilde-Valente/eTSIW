logado = JSON.parse(localStorage.getItem("logado"))

let parceriasArray = [];
let categoriasArray = [];

//CLASSE PARCERIA
class Parceria {
    constructor(instituicao, localizacao, link) {
        this.instituicao = instituicao;
        this.localizacao = localizacao;
        this.link = link;
    }

    get instituicao() {
        return this._instituicao;
    }
    set instituicao(novaInstituicao) {
        this._instituicao = novaInstituicao
    }

    get localizacao() {
        return this._localizacao;
    }
    set localizacao(novaLocalizacao) {
        this._localizacao = novaLocalizacao;
    }

    get link() {
        return this._link;
    }
    set link(novoLink) {
        this._link = novoLink;
    }

}

//CLASSE CATEGORIA
class Categoria {
    constructor(descricao) {
        this._descricao = descricao;
    }
    get descricao() {
        return this._descricao;
    }
    set descricao(novaDescricao) {
        this._descricao = novaDescricao;
    }
}

if (localStorage.getItem("parcerias") == null) {
    localStorage.setItem("parcerias", JSON.stringify(parceriasArray));
}

//Criar categorias caso key utilizadores esteja vazia
if (localStorage.getItem("categorias") == null) {
    categoriasArray.push(new Categoria("Workshop"))
    categoriasArray.push(new Categoria("Conferência"))
    categoriasArray.push(new Categoria("MasterClass"))
    localStorage.setItem("categorias", JSON.stringify(categoriasArray));
}

window.onload = function () {
    let procurar = document.getElementById("procurar");
    let inputTabela = document.getElementById("inputTabela");
    utilizadores = JSON.parse(localStorage.getItem("utilizadores"));
    docentes = JSON.parse(localStorage.getItem("docentes"));
    parceriasArray = JSON.parse(localStorage.getItem("parcerias"));
    categoriasArray = JSON.parse(localStorage.getItem("categorias"));

    let logout = document.getElementById("logout")
    let eventosBotao = document.getElementById("eventos")
    let testemunhos = document.getElementById("testemunhos")
    let cDocentes = document.getElementById("consultarDocente")
    let configuracoes = document.getElementById("configuracoes")
    let modalParceria = document.getElementById("modalParceria")
    let modalCategoria = document.getElementById("modalCategoria");
    let modalNomeInstituicao = document.getElementById("modalNomeInstituicao");
    let modalLocalizaoInstituicao = document.getElementById("modalLocalizaoInstituicao");
    let modalLinkInstituicao = document.getElementById("modalLinkInstituicao");
    let modalNomeCategoria = document.getElementById("modalNomeCategoria");


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

    logout.addEventListener("click", function (event) {
        localStorage.removeItem("logado");
        location.reload();

    });

    modalParceria.addEventListener("submit", function (event) {
        let novaParceria = new Parceria(modalNomeInstituicao.value, modalLocalizaoInstituicao.value, modalLinkInstituicao.value)
        parceriasArray.push(novaParceria);

        localStorage.setItem("parcerias", JSON.stringify(parceriasArray));
        alert("Parceria criada com sucesso");
    })

    modalCategoria.addEventListener("submit", function (event) {
        let novaCategoria = new Categoria(modalNomeCategoria.value)
        categoriasArray.push(novaCategoria);
        localStorage.setItem("categorias", JSON.stringify(categoriasArray));
        alert("Categoria criada com sucesso");
    })

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

        for (var i = 1; i < utilizadores.length; i++) {
            strHtml += "<tr>" +
                "<td>" + (i) + "</td>" +
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
        let strHtml = "<thead><tr><th>#</th>" +
            "<th>Instituição</th>" +
            "<th>Localização</th>" +
            "<th>Link</th>" +
            "</tr>" +
            "</thead><tbody>"

        for (var i = 0; i < parceriasArray.length; i++) {
            strHtml += "<tr>" +
                "<td>" + (i + 1) + "</td>" +
                "<td>" + parceriasArray[i]._instituicao + "</td>" +
                "<td>" + parceriasArray[i]._localizacao + "</td>" +
                "<td>" + parceriasArray[i]._link + "</td>" +
                "</tr>"
        }
        strHtml += "</tbody>"

        tblConfiguracoes.innerHTML = strHtml
    }

    else if (inputTabela.value == "Categorias") {
        let strHtml = "<thead><tr><th>#</th>" +
            "<th>Instituição</th>" +
            "</tr>" +
            "</thead><tbody>"

        for (var i = 0; i < categoriasArray.length; i++) {
            strHtml += "<tr>" +
                "<td>" + (i + 1) + "</td>" +
                "<td>" + categoriasArray[i]._descricao + "</td>" +
                "</tr>"
        }
        strHtml += "</tbody>"

        tblConfiguracoes.innerHTML = strHtml
    }
}
