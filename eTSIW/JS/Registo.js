let utilizadores = [];
let docentes = [];
let registado;
let linkFotoFoto;
let logado = [];

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

//CLASSE DOCENTE
class Docente {
    constructor(nome, email, pass, foto, formacao, unidadesCurriculares, shortCV, estatuto) {
        this.nome = nome;
        this.email = email;
        this.pass = pass;
        this.foto = foto;
        this.formacao = formacao;
        this.unidadesCurriculares = unidadesCurriculares;
        this.shortCV = shortCV;
        this.estatuto = estatuto;
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
        this._foto = novaFoto;
    }

    get formacao() {
        return this._formacao;
    }
    set formacao(novaFormacao) {
        this._formacao = novaFormacao;
    }

    get unidadesCurriculares() {
        return this._unidadesCurriculares;
    }
    set unidadesCurriculares(novaUnidadesCurriculares) {
        this._unidadesCurriculares = novaUnidadesCurriculares;
    }

    get shortCV() {
        return this._shortCV;
    }
    set shortCV(novoShortCV) {
        this._shortCV = novoShortCV;
    }

    get estatuto() {
        return this._estatuto;
    }
    set estatuto(novoEstatuto) {
        this._estatuto = novoEstatuto;
    }
}

//Criar admin caso key utilizadores esteja vazia
if (localStorage.getItem("utilizadores") == null) {
    utilizadores.push(new Utilizador("admin", "admin@esmad.ipp.pt", "admin", " ", "admin"));
    localStorage.setItem("utilizadores", JSON.stringify(utilizadores));
}

//Criar docentes na local storage
if (localStorage.getItem("docentes") == null) {
    docentes.push(new Docente("Mário Pinto", "mariopinto@esmad.ipp.pt", "12345", "../Imagens/mariopinto.jpg", "Doutoramento", "Algoritmia e Estrutura de Dados, Bases de Dados", "Ciências de Computadores, UPT", "docente"));
    docentes.push(new Docente("Marta Fernandes", "marta@esmad.ipp.pt", "12345", "../Imagens/default.jpg", "Mestrado", "Fundamentos de Design, Design Gráfico", "CV Desconhecido", "docente"));
    docentes.push(new Docente("Filomena Soares", "filomenasoares@esmad.ipp.pt", "12345", "../Imagens/filomenasoares.jpg", "Doutoramento", "Matemática I, Matemática II", "Análise de Fundamentos, Matemática, UPT", "docente"));
    docentes.push(new Docente("André Baltazar", "andrebaltazar@esmad.ipp.pt", "12345", "../Imagens/andrebaltazar.jpg", "Doutoramento", "Sistemas Computacionais", "Ciência e Tecnologia das Artes, UCP", "docente"));
    docentes.push(new Docente("Ricardo Queirós", "ricardoqueiros@esmad.ipp.pt", "12345", "../Imagens/ricardoqueiros.jpg", "Doutoramento", "Programação Orientada a Objetos", "Ciências de Computadores, FCUP", "docente"));
    docentes.push(new Docente("Teresa Terroso", "teresaterroso@esmad.ipp.pt", "12345", "../Imagens/teresaterroso.jpg", "Doutoramento", "Animação Gráfica, Sistemas Gráficos", "Engenharia Informática, FEUP", "docente"));
    docentes.push(new Docente("João Azevedo", "joaoazevedo@esmad.ipp.pt", "12345", "../Imagens/default.jpg", "Formação Desconhecida", "Conceção e Produção Multimédia", "CV Desconhecido", "docente"));
    docentes.push(new Docente("Luís Mourão", "luismourao@esmad.ipp.pt", "12345", "../Imagens/default.jpg", "Doutoramento", "Fisica Aplicada à Programação", "CV Desconhecido", "docente"));
    docentes.push(new Docente("Jorge Lima", "jorgelima@esmad.ipp.pt", "12345", "../Imagens/jorgelima.jpg", "Licenciatura", "Análise e Modelação de Sistemas", "Matemática e Ciências da Computação, Desconhecido", "docente"));
    docentes.push(new Docente("Carlos Portela", "carlosportela@esmad.ipp.pt", "12345", "../Imagens/filipeportela.png", "Doutoramento", "Programação Web I", "Tecnologias e Sistemas de Informação, UM", "docente"));
    docentes.push(new Docente("Rui Rodrigues", "ruirodrigues@esmad.ipp.pt", "12345", "../Imagens/default.jpg", "Formação Desconhecida", "Modelação e Ambientes 3D", "CV Desconhecido", "docente"))
    localStorage.setItem("docentes", JSON.stringify(docentes));
    console.log("Docentes adicionados à Local Storage")
}

//Vai buscar a key utilizadores e guarda no array utilizadores
utilizadores = JSON.parse(localStorage.getItem("utilizadores"));

//Vai buscar a key docentes e guarda no array docentes
docentes = JSON.parse(localStorage.getItem("docentes"));

//Vai buscar a key logado e guarda no array logado
logado = JSON.parse(localStorage.getItem("logado"));

window.onload = function () {
    let registar = document.getElementById("registar")
    let login = document.getElementById("login")
    let logout = document.getElementById("logout")
    let eventosBotao = document.getElementById("eventos")
    let testemunhos = document.getElementById("testemunhos")
    let cDocentes = document.getElementById("consultarDocente")
    let configuracoes = document.getElementById("configuracoes")
    let submitLogin = document.getElementById("submitLogin");
    let submitRegistar = document.getElementById("submitRegistar");
    let imgLogado = document.getElementById("imagemLogado")

    //Restrições
    if (logado == null) {
        registar.style.display = 'block';
        login.style.display = 'block';
        logout.style.display = 'none';
        eventosBotao.style.display = 'block';
        testemunhos.style.display = 'block';
        configuracoes.style.display = 'none';
        cDocentes.style.display = 'block';
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
                console.log("docente logado")
                for (let j = 0; j < docentes.length; j++) {
                    if (logado[0] == docentes[j]._nome) {
                        imgLogado.src = docentes[j]._foto
                    }
                }
            }
        }
    }

    //REGISTO
    let registo = document.getElementById("formRegisto")
    registo.addEventListener("submit", function (event) {
        let rNome = document.getElementById("modalNome")
        let rEmail = document.getElementById("modalEmail")
        let rPass = document.getElementById("modalPass")
        let rConfPass = document.getElementById("modalConfPass")
        let rFoto = document.getElementById("modalFoto")
        linkFoto = rFoto.value;

        let strErro = ""

        //Verificar se as passes são iguais
        if (rPass.value != rConfPass.value) {
            strErro += "As passwords tem de ser iguais"
            rPass.focus()
        }
        else {
            console.log(utilizadores)
            //ler array de utilizadores
            for (let i = 0; i < utilizadores.length; i++) {
                //ver se já existe email usado
                if (utilizadores[i]._email == rEmail.value) {
                    strErro = "Email já existente"
                    registado = true;
                    event.preventDefault();
                    rEmail.focus()
                    break;
                }
                else {
                    //ver se nome já existe
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
                if (rFoto.value == "") {
                    linkFoto = "../Imagens/default.jpg"
                    registado = false
                }
            }
        }

        if (strErro == "") {
            if (registado == false) {
                let novoUtilizador = new Utilizador(rNome.value, rEmail.value, rPass.value, linkFoto, "estudante")
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
                    logado = []
                    logado.push(utilizadores[i]._nome, utilizadores[i]._email, utilizadores[i]._estatuto);
                    localStorage.setItem("logado", JSON.stringify(logado));
                }
                encontrado = true
                alert("Login efetuado com sucesso")
            }
        }
        //Verifica se o input existe
        for (let i = 0; i < docentes.length; i++) {
            console.log(i)
            if (lEmail.value == docentes[i]._email && lPass.value == docentes[i]._pass) {
                if (localStorage.getItem("logado") == null) {
                    logado = []
                    logado.push(docentes[i]._nome, docentes[i]._email, docentes[i]._estatuto);
                    localStorage.setItem("logado", JSON.stringify(logado));
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

    logout.addEventListener("click", function (event) {
        localStorage.removeItem("logado");
        location.reload();
    });
}