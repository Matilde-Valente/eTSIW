//VARIAVEIS GLOBAIS
let testemunhos = [];

//CLASSE UTILIZADOR
class Utilizador {
    constructor(nome, email, pass, foto, estatuto) {
        this._id = Utilizador.ultimoId() + 1
        this.nome = nome
        this.email = email
        this.pass = pass
        this.foto = foto
        this.estatuto = estatuto
    }

    get nome() {
        return this._nome
    }
    set nome(novoNome) {
        this._nome = novoNome
    }

    get email() {
        return this._email
    }
    set email(novoEmail) {
        this._email = novoEmail
    }

    get pass() {
        return this._pass
    }
    set pass(novaPass) {
        this._pass = novaPass
    }

    get foto() {
        return this._foto
    }
    set foto(novaFoto) {
        this._foto = novaFoto
    }

    get estatuto() {
        return this._estatuto
    }
    set estatuto(novoEstatuto) {
        this._estatuto = novoEstatuto
    }

    static ultimoId() {
        let ultimoId = 0
        if (utilizadores.length != 0) {
            ultimoId = utilizadores[utilizadores.length - 1]._id
        }
        return ultimoId
    }
}

class Testemunho {
    constructor(inputNome, comentario) {
        this._inputNome = Utilizador.ultimoId() + 1
        this._comentario = comentario
    }
    get inputNome() {
        return this._inputNome
    }
    set inputNome(novoNome) {
        this._inputNome = novoNome
    }
    get comentario() {
        return this._comentario
    }
    set comentario(novoComentario) {
        return this._comentario
    }
}

window.onload = function () {
    let registar = document.getElementById("registar")
    let login = document.getElementById("login")
    let logout = document.getElementById("logout")
    let submitLogin = document.getElementById("submitLogin");
    let submitRegistar = document.getElementById("submitRegistar");
    let novoTestemunho = document.getElementById("novoTestemunho");
    let inputNome = document.getElementById("inputNome");
    let comentario = document.getElementById("comentario")
    let apagarTestemunho = document.getElementById("apagarTestemunho");

    //carregar array de utilizadores do localstorage
    utilizadores = JSON.parse(localStorage.getItem("utilizadores"));
    //verificar se está feito login, e se sim, info de utilizador
    logado = JSON.parse(localStorage.getItem("logado"));


    //Autofill do ID do user logado para criar testemunho (comentário)
    //isto depois mal esteja feito é preciso meter limite de 4 caracteres
    if (logado != null) {
        inputNome.value = logado[1];
    }
    if (logado == null) {

        registar.style.display = 'block';
        login.style.display = 'block';
        logout.style.display = 'none';

        novoTestemunho.style.display = 'none';

    }
    else {
        registar.style.display = 'none';
        login.style.display = 'none';
        logout.style.display = 'block';

        novoTestemunho.style.display = 'block'
        console.log("alguem ta logado")
    }


    logout.addEventListener("click", function (event) {
        localStorage.removeItem("logado");
        location.reload();

    });

    //LOGIN
    login.addEventListener("click", function (event) {

        let login = document.getElementById("modalLogin")
        let encontrado = false
        login.addEventListener("submit", function (event) {
            console.log(utilizadores)
            let lEmail = document.getElementById("loginEmail")
            let lPass = document.getElementById("loginPass")

            //Verifica se o input existe
            for (let i = 0; i < utilizadores.length; i++) {
                console.log(i)
                if (lEmail.value == utilizadores[i]._email && lPass.value == utilizadores[i]._pass) {
                    if (localStorage.getItem("logado") == null) {
                        let logado = [];
                        logado.push(utilizadores[i]._id, utilizadores[i]._nome, utilizadores[i]._email, utilizadores[i]._estatuto);
                        localStorage.setItem("logado", JSON.stringify(logado));
                        console.log("qualquer coisa")
                    }
                    encontrado = true

                    alert("Login feito com sucesso")
                    location.reload()
                    //window.location.replace("Testemunhos.html");
                    //ESTE RELOAD NÃO ESTÁ A DAR!!! 

                }
            }
            if (encontrado == false) {
                alert("Email ou palavra passe incorretos!")
                event.preventDefault();
            }


        })

    })
    //REGISTAR
    registar.addEventListener("click", function (event) {
        let registo = document.getElementById("modalRegisto")
        registo.addEventListener("submit", function (event) {
            let rNome = document.getElementById("modalNome")
            let rEmail = document.getElementById("modalEmail")
            let rPass = document.getElementById("modalPass")
            let rConfPass = document.getElementById("modalConfPass")
            let rFoto = document.getElementById("modalFoto")


            let strErro = ""

            //Verificar se as passes sao iguais
            if (rPass.value != rConfPass.value) {
                strErro += "As passwords tem de ser iguais"
                rPass.focus()
            }
            else {
                console.log(utilizadores)
                //ler array de utilizadores
                for (let i = 0; i < utilizadores.length; i++) {
                    //ver se ja existe email usado
                    if (utilizadores[i]._email == rEmail.value) {
                        strErro = "Email já existente"
                        registado = true;
                        event.preventDefault();
                        rEmail.focus()
                        break;
                    }
                    else {
                        //ver se nome ja existe
                        if (utilizadores[i]._nome == rNome.value) {
                            strErro = "Utilizador já existente"
                            registado = true;
                            console.log("nome" + registado)
                            event.preventDefault();
                            rNome.focus()
                            break;
                        }
                        else {
                            registado = false
                        }
                    }
                }
            }

            if (strErro == "") {
                if (registado == false) {
                    let novoUtilizador = new Utilizador(rNome.value, rEmail.value, rPass.value, rFoto.value, "estudante")
                    utilizadores.push(novoUtilizador);
                    alert("Registo criado com sucesso")
                    console.log(utilizadores);

                    localStorage.setItem("utilizadores", JSON.stringify(utilizadores));
                    console.log(utilizadores);
                    location.reload();
                    //ESTE LOCATION RELOAD TB NAO FUNCIONA (TAL COMO NO LOGIN, NÃO DÁ PARA DAR RELOAD DEPOIS DE ALERTS?)
                }

            } else {
                alert(strErro)
                registado = false;
                event.preventDefault();
            }
        })

    })


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