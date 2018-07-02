//VARIAVEIS GLOBAIS
let utilizadores;
let registado;
let logado = []

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

//Criar admin caso key utilizadores esteja vazia
if (localStorage.getItem("utilizadores") == null) {
    utilizadores.push(new Utilizador("admin", "admin@esmad.ipp.pt", "admin", " ", "admin"));
    localStorage.setItem("utilizadores", JSON.stringify(utilizadores));
}

window.onload = function () {
    let registar = document.getElementById("registar")
    let login = document.getElementById("login")
    let logout = document.getElementById("logout")
    let submitLogin = document.getElementById("submitLogin");
    let submitRegistar = document.getElementById("submitRegistar");

    //Vai buscar a key utilizadores e guarda no array utilizadores
    utilizadores = JSON.parse(localStorage.getItem("utilizadores"));

    let registo = document.getElementById("formRegisto")
    //verificar se está feito login, e se sim, info de utilizador
    logado = JSON.parse(localStorage.getItem("logado"));


    //Esconder botões de login e registo consoante login validado ou nao
    if (logado == null) {

        registar.style.display = 'block';
        login.style.display = 'block';
        logout.style.display = 'none';

    }
    else {
        registar.style.display = 'none';
        login.style.display = 'none';
        logout.style.display = 'block';
        console.log("alguem ta logado")
    }

    logout.addEventListener("click", function(event) {
        localStorage.removeItem("logado");
        location.reload();
    
    });

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
                console.log(localStorage);
            }

        } else {
            alert(strErro)
            registado = false;
            event.preventDefault();
        }
    })

    //LOGIN
    let modalLogin = document.getElementById("modalLogin")
    let encontrado = false
    modalLogin.addEventListener("submit", function (event) {
        console.log(utilizadores)
        let lEmail = document.getElementById("loginEmail")
        let lPass = document.getElementById("loginPass")

        //Verifica se o input existe
        for (let i = 0; i < utilizadores.length; i++) {
            console.log(i)
            if (lEmail.value == utilizadores[i]._email && lPass.value == utilizadores[i]._pass) {
                if (localStorage.getItem("logado") == null) {
                    let logado = []
                    logado.push(utilizadores[i]._nome, utilizadores[i]._email, utilizadores[i]._estatuto);
                    localStorage.setItem("logado", JSON.stringify(logado));
                    console.log("qualquer coisa")
                }
                encontrado = true
                alert("Login feito com sucesso")
            }
        }
        if (encontrado == false) {
            alert("Email ou palavra passe incorretos!")
            event.preventDefault();
        }


    })
}

