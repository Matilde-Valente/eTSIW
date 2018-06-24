let utilizadores = [];
let registado = false;

class Utilizador {
    constructor(nome, email, pass, foto) {
        this._id = Utilizador.ultimoId() + 1
        this.nome = nome
        this.email = email
        this.pass = pass
        this.foto = foto
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

    static ultimoId() {
        let ultimoId = 0
        if (utilizadores.length != 0) {
            ultimoId = utilizadores[utilizadores.length - 1].id
        }
        return ultimoId
    }
}

if (localStorage.getItem("utilizadores") == null) {
    utilizadores.push(new Utilizador("admin", "admin@esmad.ipp.pt", "admin", " "));
    localStorage.setItem("utilizadores", JSON.stringify(utilizadores));
}

window.onload = function () {
    utilizadores = JSON.parse(localStorage.getItem("utilizadores"));

    let registo = document.getElementById("formRegisto")
    let rNome = document.getElementById("modalNome")
    let rEmail = document.getElementById("modalEmail")
    let rPass = document.getElementById("modalPass")
    let rConfPass = document.getElementById("modalConfPass")
    let rFoto = document.getElementById("modalFoto")

    registo.addEventListener("submit", function (event) {

        let strErro = ""

        if (rPass.value != rConfPass.value) {
            strErro += "As passwords tem de ser iguais"
        }
        else {
            for (let i = 0; i < utilizadores.length; i++) {
                if (utilizadores[i].email == rEmail.value) {
                    strErro += "\nEmail já existente"
                    registado = true;
                    break;
                }
                else if (utilizadores[i].nome == rNome.value) {
                    strErro += "\nUtilizador já existente"
                    registado = true;
                    break;
                }
            }
        }

        if (strErro == "") {
            if (registado == false) {
                let novoUtilizador = new Utilizador(rNome.value, rEmail.value, rPass.value, rFoto.value)
                utilizadores.push(novoUtilizador);
                alert("Registo criado com sucesso")
                console.log(utilizadores);

                localStorage.setItem("utilizadores", JSON.stringify(utilizadores));
                console.log(localStorage);
                event.preventDefault();
            }
        } else {
            alert(strErro)
            registo.reset()
            rNome.focus()
            registado = false;
            event.preventDefault();
        }
    })
}