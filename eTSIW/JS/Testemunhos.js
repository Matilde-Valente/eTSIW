//VARIAVEIS GLOBAIS
let testemunhos = [];

class Testemunho {
    constructor(nomeTestemunho, comentario) {
        this._nomeTestemunho = Utilizador.ultimoId() + 1
        this._comentario = comentario
    }
    get nomeTestemunho() {
        return this._nomeTestemunho
    }
    set nomeTestemunho(novoNomeTestemunho) {
        this._nomeTestemunho = novoNomeTestemunho
    }
    get comentario() {
        return this._comentario
    }
    set comentario(novoComentario) {
        this._comentario = novoComentario
    }
}

window.onload = function () {
    let registar = document.getElementById("registar")
    let loginNav = document.getElementById("login")
    let logout = document.getElementById("logout")
    let novoTestemunho = document.getElementById("novoTestemunho");
    let nomeTestemunho = document.getElementById("nomeTestemunho");
    let comentario = document.getElementById("comentario")
    let apagarTestemunho = document.getElementById("apagarTestemunho");
    let eventosBotao = document.getElementById("eventos")
    let testemunhos = document.getElementById("testemunhos")
    let cDocentes = document.getElementById("consultarDocente")
    let configuracoes = document.getElementById("configuracoes")
    let imgLogado = document.getElementById("imagemLogado")

    //carregar array de utilizadores do localstorage
    utilizadores = JSON.parse(localStorage.getItem("utilizadores"));
    //verificar se está feito login, e se sim, info de utilizador
    logado = JSON.parse(localStorage.getItem("logado"));

    //Autofill do ID do user logado para criar testemunho (comentário)
    //isto depois mal esteja feito é preciso meter limite de 4 caracteres
    if (logado != null) {
        nomeTestemunho.value = logado[1];
    }
    if (logado == null) {
        registar.style.display = 'block';
        login.style.display = 'block';
        logout.style.display = 'none';
        novoTestemunho.style.display = 'none';
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
                novoTestemunho.style.display = 'block'
                console.log("admin logado")
            }
            if (logado[2] == "estudante") {
                eventosBotao.style.display = 'block';
                testemunhos.style.display = 'block';
                configuracoes.style.display = 'none';
                cDocentes.style.display = 'block';
                novoTestemunho.style.display = 'block'
                console.log("estudante logado")
                for (let j = 0; j < utilizadores.length; j++) {
                    if (logado[0] == utilizadores[j]._nome) {
                        imgLogado.src = utilizadores[j]._foto
                    }
                }
            }
            if (logado[2] == "docente") {
                eventosBotao.style.display = 'block';
                testemunhos.style.display = 'block';
                configuracoes.style.display = 'block';
                cDocentes.style.display = 'block';
                novoTestemunho.style.display = 'none'
                console.log("docente logado")
                for (let j = 0; j < docentes.length; j++) {
                    if (logado[0] == docentes[j]._nome) {
                        imgLogado.src = docentes[j]._foto
                    }
                }
            }
        }
    }

    enviarTestemunho.addEventListener("click", function (event) {
        let novoTestemunho = new Testemunho(logado[0], comentario.value)
        testemunhos.push(novoTestemunho);
        localStorage.setItem("testemunhos", JSON.stringify(testemunhos));
        alert("Testemunho criado com sucesso");
        location.reload();
        //ESTE RELOAD NAO FUNCIONA               
    })

    apagarTestemunho.addEventListener("click", function (event) {
        comentario.value = "";
    });

    event.preventDefault();
}