//verificar se está feito login, e se sim, info de utilizador
logado = JSON.parse(localStorage.getItem("logado"));

window.onload = function () {
    let registar = document.getElementById("registar")
    let login = document.getElementById("login")
    let logout = document.getElementById("logout")
    let eventosBotao = document.getElementById("eventos")
    let cDocentes = document.getElementById("consultarDocente")
    let configuracoes = document.getElementById("configuracoes")

    if (logado <= 0) {
        registar.style.display = 'block';
        login.style.display = 'block';
        logout.style.display = 'none';
        configuracoes.style.display = 'none';
    }
    else {
        registar.style.display = 'none';
        login.style.display = 'none';
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
    criarCardDocente();
}

function criarCardDocente() {

    docentes = JSON.parse(localStorage.getItem("docentes"));

    let strCardDocente = ""

    console.log("estou dentro da funcao")
    console.log(docentes)

    for (let i = 0; i < docentes.length; i++) {
        if (i % 3 == 0) {
            strCardDocente += `<div class="row">`
        }
        console.log("dentro do for")
        // Cria o card
        strCardDocente += `<div class="col-sm-4">
            <div class="card" style="width: 18rem" onClick="abrirCardDocente(${i})" data-toggle="modal" data-target="#modalProf">
                <img class="card-img-top" src="${docentes[i]._foto}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${docentes[i]._nome}</h5>`

        strCardDocente += `</div></div></div>`

        if (i % 3 == 2) {
            strCardDocente += `</div>`
        }
    }
    let catalogoDocentes = document.getElementById("cardDocente")
    catalogoDocentes.innerHTML = strCardDocente
}

function abrirCardDocente(n) {
    let nomeProf = document.getElementById("nomeProf")
    let fotoProf = document.getElementById("fotoProf")
    let emailProf = document.getElementById("emailProf")
    let formacaoProf = document.getElementById("formacaoProf")
    let unidadeCurricularProf = document.getElementById("unidadeCurricularProf")
    let cvProf = document.getElementById("cvProf")

    nomeProf.innerHTML = docentes[n]._nome;
    fotoProf.src = docentes[n]._foto;
    emailProf.innerHTML = docentes[n]._email;
    formacaoProf.innerHTML = docentes[n]._formacao;
    unidadeCurricularProf.innerHTML = docentes[n]._unidadesCurriculares;
    cvProf.innerHTML = docentes[n]._shortCV;
}

