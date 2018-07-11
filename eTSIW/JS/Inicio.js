//VARIAVEIS GLOBAIS
let utilizadores = [];
let docentes = [];
let parcerias = [];
let registado;
let logado = [];
let link;

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
    constructor(nome, email, pass, foto, formacao, unidadesCurriculares, shortCV) {
        this._nome = nome;
        this._email = email;
        this._pass = pass;
        this._foto = foto;
        this._formacao = formacao;
        this._unidadesCurriculares = unidadesCurriculares;
        this._shortCV = shortCV;
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
}

//CLASSE PARCERIA
class Parceria {
    constructor(instituicao, localizacao, link) {
        this._codigo = Parceria.ultimoId() + 1
        this._instituicao = instituicao;
        this._localizacao = localizacao;
        this._link = link;
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
        return this._instituicao;
    }
    set link(novoLink) {
        this._link = novoLink;
    }

    static ultimoId() {
        let ultimoId = 0
        if (parcerias.length != 0) {
            ultimoId = parcerias[parcerias.length - 1]._id
        }
        return ultimoId
    }
}

//Criar admin caso key utilizadores esteja vazia
if (localStorage.getItem("utilizadores") == null) {
    utilizadores.push(new Utilizador("admin", "admin@esmad.ipp.pt", "admin", " ", "admin"));
    localStorage.setItem("utilizadores", JSON.stringify(utilizadores));
}

//Criar docentes na local storage
if (localStorage.getItem("docentes") == null) {
    docentes.push(new Docente("Mário Pinto", "mariopinto@esmad.ipp.pt", "12345", "../Imagens/logo_2.png", "Doutoramento", "Algoritmia e Estrutura de Dados, Bases de Dados", "Ciências de Computadores, UPT"));
    docentes.push(new Docente("Marta Fernandes", "marta@esmad.ipp.pt", "12345", " ", "Mestrado", "Fundamentos de Design, Design Gráfico", "CV Desconhecido"));
    docentes.push(new Docente("Filomena Soares", "filomenasoares@esmad.ipp.pt", "12345", " ", "Doutoramento", "Matemática I, Matemática II", "Análise de Fundamentos, Matemática, UPT"));
    docentes.push(new Docente("André Baltazar", "andrebaltazar@esmad.ipp.pt", "12345", " ", "Doutoramento", "Sistemas Computacionais", "Ciência e Tecnologia das Artes, UCP"));
    docentes.push(new Docente("Ricardo Queirós", "ricardoqueiros@esmad.ipp.pt", "12345", " ", "Doutoramento", "Programação Orientada a Objetos", "Ciências de Computadores, FCUP"));
    docentes.push(new Docente("Teresa Terroso", "teresaterroso@esmad.ipp.pt", "12345", " ", "Doutoramento", "Animação Gráfica, Sistemas Gráficos", "Engenharia Informática, FEUP"));
    docentes.push(new Docente("João Azevedo", "joaoazevedo@esmad.ipp.pt", "12345", " ", "Formação Desconhecida", "Conceção e Produção Multimédia", "CV Desconhecido"));
    docentes.push(new Docente("Luís Mourão", "luismourao@esmad.ipp.pt", "12345", " ", "Doutoramento", "Fisica Aplicada à Programação", "CV Desconhecido"));
    docentes.push(new Docente("Jorge Lima", "jorgelima@esmad.ipp.pt", "12345", " ", "Licenciatura", "Análise e Modelação de Sistemas", "Matemática e Ciências da Computação, Desconhecido"));
    docentes.push(new Docente("Carlos Portela", "carlosportela@esmad.ipp.pt", "12345", " ", "Doutoramento", "Programação Web I", "Tecnologias e Sistemas de Informação, UM"));
    docentes.push(new Docente("Rui Rodrigues", "ruirodrigues@esmad.ipp.pt", "12345", " ", "Formação Desconhecida", "Modelação e Ambientes 3D", "CV Desconhecido"))
    localStorage.setItem("docentes", JSON.stringify(docentes));
    console.log("Docentes adicionados à Local Storage")
}

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
        eventosBotao.style.display = 'block';
        testemunhos.style.display = 'block';
        configuracoes.style.display = 'none';
        cDocentes.style.display = 'block';
    }
    else {
        registar.style.display = 'none';
        login.style.display = 'none';
        logout.style.display = 'block';
        console.log("alguem ta logado")

        for (let i = 0; i < utilizadores.length; i++) {
            if (utilizadores[i]._estatuto == "admin") {
                eventosBotao.style.display = 'block';
                testemunhos.style.display = 'block';
                configuracoes.style.display = 'block';
                cDocentes.style.display = 'block';
            }
        }

        for (let i = 0; i < docentes.length; i++) {
            if (docentes[i]._estatuto == "docentes") {
                eventosBotao.style.display = 'block';
                testemunhos.style.display = 'block';
                configuracoes.style.display = 'none';
                cDocentes.style.display = 'block';
            }
        }
    }

    logout.addEventListener("click", function (event) {
        localStorage.removeItem("logado");
        location.reload();
    });

    registo.addEventListener("submit", function (event) {
        let rNome = document.getElementById("modalNome")
        let rEmail = document.getElementById("modalEmail")
        let rPass = document.getElementById("modalPass")
        let rConfPass = document.getElementById("modalConfPass")
        let rFoto = document.getElementById("modalFoto")
        link = rFoto.value;

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
                    link = "https://cdn.pixabay.com/photo/2016/11/14/17/39/person-1824147_960_720.png"
                    registado = false
                }
            }
        }

        if (strErro == "") {
            if (registado == false) {
                let novoUtilizador = new Utilizador(rNome.value, rEmail.value, rPass.value, link, "estudante")
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
    criarCardDocente();
}

function criarCardDocente() {
    if (docentes <= 0) {
        docentes = JSON.parse(localStorage.getItem("docentes"));
    }

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
                <img class="card-img-top" src="${docentes[i]._imagem}" alt="Card image cap">
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

