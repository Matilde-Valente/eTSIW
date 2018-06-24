//VARIAVEIS GLOBAIS
let utilizadores = [];
let docentes = [];
let parcerias = [];
let registado;
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
    constructor(nome, foto, formacao, unidadesCurriculares, shortCV) {
        this._nome = nome;
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
    utilizadores.push(new Utilizador("Mário Pinto", "mariopinto@esmad.ipp.pt", "12345", "../Imagens/mariopinto.jpg", "docente"));
    utilizadores.push(new Utilizador("Marta Fernandes", "marta@esmad.ipp.pt", "12345", "../Imagens/martafernandes.jpg", "docente"));
    utilizadores.push(new Utilizador("Filomena Soares", "filomenasoares@esmad.ipp.pt", "12345", "../Imagens/mariopinto.jpg", "docente"));
    utilizadores.push(new Utilizador("André Baltazar", "andrebaltazar@esmad.ipp.pt", "12345", "../Imagens/andrebaltazar.jpg", "docente"));
    utilizadores.push(new Utilizador("Ricardo Queirós", "ricardoqueiros@esmad.ipp.pt", "12345", "../Imagens/ricardoqueiros.jpg", "docente"));
    utilizadores.push(new Utilizador("Teresa Terroso", "teresaterroso@esmad.ipp.pt", "12345", "../Imagens/teresaterroso.jpg", "docente"));
    utilizadores.push(new Utilizador("João Azevedo", "joaoazevedo@esmad.ipp.pt", "12345", "../Imagens/joaoazevedo.jpg", "docente"));
    utilizadores.push(new Utilizador("Luís Mourão", "luismourao@esmad.ipp.pt", "12345", "../Imagens/luismourao.jpg", "docente"));
    utilizadores.push(new Utilizador("Jorge Lima", "jorgelima@esmad.ipp.pt", "12345", "../Imagens/jorgelima.jpg", "docente"));
    utilizadores.push(new Utilizador("Carlos Portela", "carlosportela@esmad.ipp.pt", "12345", "../Imagens/carlosportela.jpg", "docente"));
    utilizadores.push(new Utilizador("Rui Rodrigues", "ruirodrigues@esmad.ipp.pt", "12345", "../Imagens/ruirodrigues.jpg", "docente"))
    localStorage.setItem("utilizadores", JSON.stringify(utilizadores));
    console.log("Utilizador 'admin' adicionado à Local Storage")
}

//Criar docentes caso key docentes esteja vazia
if (localStorage.getItem("docentes") == null) {
    docentes.push(new Docente("Mário Pinto", "../Imagens/mariopinto.jpg", "Doutoramento", "Algoritmia e Estrutura de Dados, Bases de Dados", "Ciências de Computadores, UPT"));
    docentes.push(new Docente("Marta Fernandes", "../Imagens/martafernandes.jpg", "Mestrado", "Fundamentos de Design, Design Gráfico", "CV Desconhecido"));
    docentes.push(new Docente("Filomena Soares", "../Imagens/mariopinto.jpg", "Doutoramento", "Matemática I, Matemática II", "Análise de Fundamentos, Matemática, UPT"));
    docentes.push(new Docente("André Baltazar", "../Imagens/andrebaltazar.jpg", "Doutoramento", "Sistemas Computacionais", "Ciência e Tecnologia das Artes, UCP"));
    docentes.push(new Docente("Ricardo Queirós", "../Imagens/ricardoqueiros.jpg", "Doutoramento", "Programação Orientada a Objetos", "Ciências de Computadores, FCUP"));
    docentes.push(new Docente("Teresa Terroso", "../Imagens/teresaterroso.jpg", "Doutoramento", "Animação Gráfica, Sistemas Gráficos", "Engenharia Informática, FEUP"));
    docentes.push(new Docente("João Azevedo", "../Imagens/joaoazevedo.jpg", "Formação Desconhecida", "Conceção e Produção Multimédia", "CV Desconhecido"));
    docentes.push(new Docente("Luís Mourão", "../Imagens/luismourao.jpg", "Doutoramento", "Fisica Aplicada à Programação", "CV Desconhecido"));
    docentes.push(new Docente("Jorge Lima", "../Imagens/jorgelima.jpg", "Licenciatura", "Análise e Modelação de Sistemas", "Matemática e Ciências da Computação, Desconhecido"));
    docentes.push(new Docente("Carlos Portela", "../Imagens/carlosportela.jpg", "Doutoramento", "Programação Web I", "Tecnologias e Sistemas de Informação, UM"));
    docentes.push(new Docente("Rui Rodrigues", "../Imagens/ruirodrigues.jpg", "Formação Desconhecida", "Modelação e Ambientes 3D", "CV Desconhecido"))
    localStorage.setItem("docentes", JSON.stringify(docentes));
    console.log("Docentes adicionados à Local Storage")
}

if (localStorage.getItem("parcerias") == null) {
    localStorage.setItem("parcerias", JSON.stringify(parcerias));
    console.log("Parcerias adicionadas à Local Storage");
}

window.onload = function () {
    // alert("O que nao acabei ontem importante : \n Arranjar bug ao criar parcerias (nao regista nsei pq) \n Criar Categorias para dps ligá-las a eventos \n Icones FA a editar docentes e blablabla fácil \n De resto o que falta é sempre siga!!")
    let registar = document.getElementById("registar")
    let login = document.getElementById("login")
    let logout = document.getElementById("logout")
    let submitLogin = document.getElementById("submitLogin");
    let submitRegistar = document.getElementById("submitRegistar");
    let eventos = document.getElementById("eventos")
    let testemunhos = document.getElementById("testemunhos")
    let configuracoes = document.getElementById("configuracoes")
    let cDocentes = document.getElementById("consultarDocentes")

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
        eventos.style.display = 'block';
        testemunhos.style.display = 'block';
        configuracoes.style.display = 'none';
        // cDocentes.style.display = 'block';
    }
    else {
        registar.style.display = 'none';
        login.style.display = 'none';
        logout.style.display = 'block';
        console.log("alguem ta logado")


        if (logado[0]._estatuto == "admin" || logado[0]._estatuto == "docentes") {
            eventos.style.display = 'block';
            testemunhos.style.display = 'block';
            configuracoes.style.display = 'block';
            // cDocentes.style.display = 'block';
        }
        if (logado[0]._estatuto == "estudante") {
            eventos.style.display = 'block';
            testemunhos.style.display = 'block';
            configuracoes.style.display = 'none';
            // cDocentes.style.display = 'block';
        }
    }

    logout.addEventListener("click", function (event) {
        localStorage.removeItem("logado");
        window.location.reload();
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
                    console.log("utilizador logado")
                }
                encontrado = true
                alert("Login feito com sucesso")
                // $('#modalLogin').modal('hide')
            }
        }
        if (encontrado == false) {
            alert("Email ou palavra passe incorretos!")
            event.preventDefault();
        }
    })

    var caminho = window.location.pathname.split('/')
    console.log(caminho)
    if (caminho[8] == "cDocentes.html") {
        criarCard();
    }
}

//Adiciona dados ao card
function criarCard() {

    let strCard = ""

    for (var i = 0; i < docentes.length; i++) {
        if (i % 3 == 0) {
            strCard += `<div class="row">`
        }
        // Cria o card
        strCard += `<div class="col-sm-4">
                <div class="card" onclick="" style="width: 18rem;">
                    <img class="card-img-top" src="${docentes[i]._imagem}" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">${docentes[i]._nome}</h5>`

        strCard += `</div></div></div>`

        if (i % 3 == 2) {
            strCard += `</div>`
        }
    }
    let catalogoProfs = document.getElementById("card")
    catalogoProfs.innerHTML = strCard

}

