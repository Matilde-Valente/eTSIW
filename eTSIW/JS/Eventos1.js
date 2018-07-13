//VARIÁVEIS GLOBAIS
let eventos = [];
let existe = false;
let detalhesEvento;
let catalogoEventos;
let adicionar;
let botao;
let arrayComentarios = [];
let substringID;
let url;
let categoriasArray = [];
let dataAtual

//CLASSE EVENTO
class Evento {
    constructor(nome, descricao, data, hora, sala, responsavel, parceria, imagem, comentario, pontuacao, categoria) {
        this._id = Evento.ultimoId() + 1
        this.nome = nome
        this.descricao = descricao
        this.data = data
        this.hora = hora
        this.sala = sala
        this.responsavel = responsavel
        this.parceria = parceria
        this.imagem = imagem
        this.comentario = comentario
        this.pontuacao = pontuacao
        this.categoria = categoria
    }

    get nome() {
        return this._nome
    }
    set nome(novoNome) {
        this._nome = novoNome
    }

    get descricao() {
        return this._descricao
    }
    set descricao(novaDescricao) {
        this._descricao = novaDescricao
    }

    get data() {
        return this._data
    }
    set data(novaData) {
        this._data = novaData
    }

    get hora() {
        return this._hora
    }
    set hora(novaHora) {
        this._hora = novaHora
    }

    get sala() {
        return this._sala
    }
    set sala(novaSala) {
        this._sala = novaSala
    }

    get responsavel() {
        return this._responsavel
    }
    set responsavel(novoResponsavel) {
        this._responsavel = novoResponsavel
    }

    get parceria() {
        return this._parceria
    }
    set parceria(novaParceria) {
        this._parceria = novaParceria
    }

    get imagem() {
        return this._imagem
    }
    set imagem(novaImagem) {
        this._imagem = novaImagem
    }

    get comentario() {
        return this._comentario
    }
    set comentario(novoComentario) {
        this._comentario = novoComentario
    }

    get pontuacao() {
        return this._pontuacao
    }
    set pontuacao(novaPontuacao) {
        this._pontuacao = novaPontuacao
    }

    get categoria() {
        return this._categoria
    }
    set categoria(novaCategoria) {
        this._categoria = novaCategoria
    }

    static ultimoId() {
        let ultimoId = 0
        if (eventos.length != 0) {
            ultimoId = eventos[eventos.length - 1]._id
        }
        return ultimoId
    }
}

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

if (localStorage.getItem("eventos") == null) {
    eventos.push(new Evento("Workshop Bootstrap", "Aprender bootstrap", "2018-05-13", "11:00", "B201", "Ricardo Queirós", "ESMAD", "", [], "5", "Workshop"))
    eventos.push(new Evento("Workshop Design", "Vem aprender algumas técnicas de design, neste workshop divertido", "2018-03-21", "14:30", "B206", "Marta Fernandes", "ESMAD", "", [], "5", "Workshop"))
    eventos.push(new Evento("Conferência Blockchain", "A revolução Blockchain está a acontecer agora, e irá ter um profundo efeito transformador. É a maior inovação desde a Internet, criando processos mais democráticos, seguros, transparentes e eficientes, podendo dar origem a um mundo mais próspero em que as organizações e os indivíduos vão poder participar de forma mais ativa no valor que criam.", "2018-06-13", "11:00", "B201", "Ricardo Queirós", "ESMAD", "", [], "5", "Conferência"))
    eventos.push(new Evento("MasterClass Blockchain", "Aprender sobre blockchain", "2018-07-17", "11:00", "B201", "Ricardo Queirós", "ESMAD", "", [], "5", "MasterClass"))
    eventos.push(new Evento("Workshop Criatividade e Inovação", "Dar a conhecer a importância da criatividade na adoção de práticas inovadoras;", "2018-07-21", "14:30", "B206", "Rui Rodrigues e Teresa Terroso", "ESMAD", "", [], "5", "Workshop"))
    localStorage.setItem("eventos", JSON.stringify(eventos));
}

//Criar categorias caso key utilizadores esteja vazia
if (localStorage.getItem("categorias") == null) {
    categoriasArray.push(new Categoria("Workshop"))
    categoriasArray.push(new Categoria("Conferência"))
    categoriasArray.push(new Categoria("MasterClass"))
    localStorage.setItem("categorias", JSON.stringify(categoriasArray));
}

if (localStorage.getItem("parcerias") == null) {
    localStorage.setItem("parcerias", JSON.stringify(parceriasArray));
}

window.onload = function () {
    //Vai buscar a key utilizadores e guarda no array UTLIZADORES
    utilizadores = JSON.parse(localStorage.getItem("utilizadores"));
    //Vai buscar a key logado e guarda no array LOGADO
    logado = JSON.parse(localStorage.getItem("logado"));
    //Vai buscar a key docentes e guarda no array DOCENTES
    docentes = JSON.parse(localStorage.getItem("docentes"));
    //Vai buscar a key categorias e guarda no array CATEGORIAS
    categoriasArray = JSON.parse(localStorage.getItem("categorias"))
    //Vai buscar a key parecerias e guarda no array PARCERIAS
    parcerias = JSON.parse(localStorage.getItem("parcerias"))

    if (eventos <= 0) {
        eventos = JSON.parse(localStorage.getItem("eventos"));
    }

    //Data Atual
    dataAtual = new Date();
    let dd = dataAtual.getDate();
    let mm = dataAtual.getMonth() + 1; //Janeiro é 0
    let aaaa = dataAtual.getFullYear();

    if (dd < 10) {
        dd = '0' + dd
    }
    if (mm < 10) {
        mm = '0' + mm
    }
    dataAtual = aaaa + '-' + mm + '-' + dd;
    console.log("Data atual: " + dataAtual)


    catalogoEventos = document.getElementById("card")
    if (catalogoEventos != null) {
        criarCard("todos", "todos");
    }

    detalhesEvento = document.getElementById("detalhes")
    if (detalhesEvento != null) {
        carregarEventos();
        arrayComentarios = eventos[substringID - 1]._comentario
        mostrarComentarios();
    }

    adicionar = document.getElementById("modalEventos")
    if (adicionar != null) {
        adicionar.addEventListener("submit", adicionarEvento);
    }

    //Variáveis para as restrições
    let registar = document.getElementById("registar")
    let login = document.getElementById("login")
    let logout = document.getElementById("logout")
    let eventosBotao = document.getElementById("eventos")
    let cDocentes = document.getElementById("consultarDocente")
    let configuracoes = document.getElementById("configuracoes")
    let registarEventos = document.getElementById("registarEventos")
    let imgLogado = document.getElementById("imagemLogado")

    //Restrições
    if (logado == null) {
        registar.style.display = 'block';
        login.style.display = 'block';
        logout.style.display = 'none';
        configuracoes.style.display = 'none';
        registarEventos.style.display = 'none'
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
                registarEventos.style.display = 'none'
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
    //Adicionar Categorias à Combobox
    adicionarCategorias();
}

function adicionarEvento() {
    let strErro = "";
    let nomeEvento = document.getElementById("modalNomeEvento")
    let descricao = document.getElementById("modalDescricao")
    let data = document.getElementById("modalData")
    let hora = document.getElementById("modalHora")
    let sala = document.getElementById("modalSala")
    let responsavel = document.getElementById("modalResponsavel")
    let parceria = document.getElementById("modalParceria")
    let categoriaModal = document.getElementById("modalCategorias")
    let imagem = document.getElementById("modalImagemEvento")

    //Verificações
    if (data.value <= dataAtual) {
        strErro += "\nA data escolhida é inválida! Por favor escolha outra data."
    }
    for (let i = 0; i < eventos.length; i++) {
        if (nomeEvento.value == eventos[i]._nome) {
            strErro += "\nJá existe um evento com esse nome! Por favor insira outro nome."
            existe = true
            event.preventDefault();
        }
        if (sala.value == eventos[i]._sala && data.value == eventos[i]._data && hora.value == eventos[i]._hora) {
            strErro += "\nA sala já está ocupada! Por favor escolha outra sala"
            existe = true
            event.preventDefault();
        }
        else {
            existe = false
        }
    }

    if (strErro == "") {
        if (existe == false) {
            let novoEvento = new Evento(nomeEvento.value, descricao.value, data.value, hora.value, sala.value, responsavel.value, parceria.value, imagem.value, arrayComentarios, "", categoriaModal.value)
            eventos.push(novoEvento);
            alert("Registo criado com sucesso")

            localStorage.setItem("eventos", JSON.stringify(eventos));
        }
    }
    else {
        alert(strErro)
    }
}

//Adiciona dados ao card
function criarCard(filtro, tempo) {
    let strCard = ""
    for (var i = 0; i < eventos.length; i++) {
        if (eventos[i]._imagem == "") {
            url = "https://pbs.twimg.com/profile_images/792011747397865473/2r6wseRk_400x400.jpg"
        }

        if (i % 3 == 0) {
            strCard += `<div class="row">`
        }
        //se o tempo for todos
        if (tempo == "todos") {
            //se o filtro for todos
            if (filtro == "todos") {
                // Cria o card
                strCard += `<div class="col-sm-4">
            <div class="card" onclick="abrirEventos(${eventos[i]._id})" style="width: 18rem">
                <img class="card-img-top" style="width: 286px; heigth: 286px" src="${url}">
                <div class="card-body">
                    <h5 class="card-title">${eventos[i]._nome}</h5>
                    <p class="card-text">${eventos[i]._descricao}</p>`

                strCard += `</div></div></div>`
            }
            //se o filtro for uma categoria
            if (filtro == eventos[i]._categoria) {
                strCard += `<div class="col-sm-4">
                <div class="card" onclick="abrirEventos(${eventos[i]._id})" style="width: 18rem;">
                    <img class="card-img-top" style="width: 286px; heigth: 286px" src="${url}">
                    <div class="card-body">
                        <h5 class="card-title">${eventos[i]._nome}</h5>
                        <p class="card-text">${eventos[i]._descricao}</p>`

                strCard += `</div></div></div>`
            }
        }
        //se o tempo for eventosFuturos
        else if (tempo == "eventosFuturos") {
            //se o filtro for todos e se a data do evento for maior do que a data atual
            if (filtro == "todos" && eventos[i]._data >= dataAtual) {
                strCard += `<div class="col-sm-4">
                <div class="card" onclick="abrirEventos(${eventos[i]._id})" style="width: 18rem;">
                    <img class="card-img-top" style="width: 286px; heigth: 286px" src="${url}">
                    <div class="card-body">
                        <h5 class="card-title">${eventos[i]._nome}</h5>
                        <p class="card-text">${eventos[i]._descricao}</p>`

                strCard += `</div></div></div>`
            }
            //se o filtro for uma categoria e se a data do evento for maior do que a data atual
            if (filtro == eventos[i]._categoria && eventos[i]._data >= dataAtual) {
                strCard += `<div class="col-sm-4">
                <div class="card" onclick="abrirEventos(${eventos[i]._id})" style="width: 18rem;">
                    <img class="card-img-top" style="width: 286px; heigth: 286px" src="${url}">
                    <div class="card-body">
                        <h5 class="card-title">${eventos[i]._nome}</h5>
                        <p class="card-text">${eventos[i]._descricao}</p>`

                strCard += `</div></div></div>`
            }
        }
        //se o tempo for eventosRealizados
        else if (tempo == "eventosRealizados") {
            //se o filtro for todos e se a data do evento for menor do que a data atual
            if (filtro == "todos" && eventos[i]._data <= dataAtual) {
                strCard += `<div class="col-sm-4">
                <div class="card" onclick="abrirEventos(${eventos[i]._id})" style="width: 18rem;">
                    <img class="card-img-top" style="width: 286px; heigth: 286px" src="${url}">
                    <div class="card-body">
                        <h5 class="card-title">${eventos[i]._nome}</h5>
                        <p class="card-text">${eventos[i]._descricao}</p>`

                strCard += `</div></div></div>`
            }
            //se o filtro for uma categoria e se a data do evento for menor do que a data atual
            if (filtro == eventos[i]._categoria && eventos[i]._data <= dataAtual) {
                strCard += `<div class="col-sm-4">
                <div class="card" onclick="abrirEventos(${eventos[i]._id})" style="width: 18rem;">
                    <img class="card-img-top" style="width: 286px; heigth: 286px" src="${url}">
                    <div class="card-body">
                        <h5 class="card-title">${eventos[i]._nome}</h5>
                        <p class="card-text">${eventos[i]._descricao}</p>`

                strCard += `</div></div></div>`
            }
        }
        if (i % 3 == 2) {
            strCard += `</div>`
        }
    }
    catalogoEventos = document.getElementById("card")
    catalogoEventos.innerHTML = strCard
}

function abrirEventos(_id) {
    window.location.href = "vEventos.html" + "#" + _id
    console.log(window.location.href)
    carregarEventos();
}

//PÁGINA VER EVENTOS
let eventoCarregado = []
function carregarEventos() {
    let id = window.location.hash
    console.log("ID evento: " + id)

    substringID = id.substring(1)

    for (let i = 0; i < eventos.length; i++) {
        if (eventos[i]._id == substringID) {
            eventoCarregado.push(eventos[i])
            break;
        }
    }
    let strDetalhes = ""

    if (eventoCarregado[0]._imagem == "") {
        url = "https://pbs.twimg.com/profile_images/792011747397865473/2r6wseRk_400x400.jpg"
    }
    strDetalhes += `<div class="col-1"></div>
        <div class="col-10"><div class="jumbotron mt-5">
        <img class="img-responsive w-100 h-100" src="${url}">
        <div><h1 class="display-3 text-center m-2">${eventoCarregado[0]._nome}</h1></div>
        <div><p class="text-center">${eventoCarregado[0]._categoria}</p></div>
        <div><center><table class='w-25' style='text-align:center'>
        <thead>
            <tr><th>Data</th><th>Hora</th><th>Sala</th></tr>
        </thead>
        <tbody>
            <tr><td>${eventoCarregado[0]._data}</td><td>${eventoCarregado[0]._hora}</td><td>${eventoCarregado[0]._sala}</td></tr>
        </tbody>
        </table ></center></div>
        <p class="lead my-4" style="">${eventoCarregado[0]._descricao}</p>
        <div><textarea id="comentarioTextArea" class="w-100" cols="150" rows="4"></textarea></div>
        <div style="text-align:right"><button id="comentarioBotao" type="button" onclick="adicionarComentario()" value="Enviar">Enviar</button></div></div>`

    strDetalhes += `</div>`

    detalhesEvento = document.getElementById("detalhes")
    detalhesEvento.innerHTML += strDetalhes
}

function adicionarComentario() {
    botao = document.getElementById("comentarioBotao")

    let comentarioTextArea = document.getElementById("comentarioTextArea")
    let comentarioNovo = comentarioTextArea.value
    let arrayLogado = JSON.parse(localStorage.getItem("logado"));
    let nomeLogado = arrayLogado[0]
    console.log(arrayLogado)

    arrayComentarios.push({ nomeLogado, comentarioNovo });
    console.log("Array Comentários: " + arrayComentarios)

    eventos[substringID - 1]._comentario = arrayComentarios;
    localStorage.setItem("eventos", JSON.stringify(eventos));
    window.location.reload()

    comentarioTextArea.value = ""
}

function mostrarComentarios() {
    let strComentarios = ""
    let img;

    strComentarios += `<div class="col-1"></div>
    <div class="col-10"><div class="jumbotron">`

    for (let i = 0; i < arrayComentarios.length; i++) {
        for (let j = 0; j < utilizadores.length; j++) {
            if (arrayComentarios[i].nomeLogado == utilizadores[j]._nome) {
                img = utilizadores[j]._foto
            }
        }
        strComentarios += `<div><h4><img class="rounded border border-dark m-2" style="width: 40px; height: 40px" src="${img}"></img>${arrayComentarios[i].nomeLogado}</h4></div><div class="mb-2">${arrayComentarios[i].comentarioNovo}</div><hr>`
    }
    strComentarios += `</div></div>`

    let comentarios = document.getElementById("comentarios")
    comentarios.innerHTML += strComentarios
}

// Preencher combobox com categorias
function adicionarCategorias() {
    let strCategorias = "<option value='todos'>Todos</option>"
    let strCategoriasModal = "<option value='' selected disabled>Categoria</option>"
    for (let i = 0; i < categoriasArray.length; i++) {
        strCategorias += `<option value='${categoriasArray[i]._descricao}'>${categoriasArray[i]._descricao}</option>`
        strCategoriasModal += `<option value='${categoriasArray[i]._descricao}'>${categoriasArray[i]._descricao}</option>`
    }

    let filtro = document.getElementById("filtro")
    filtro.innerHTML = strCategorias

    let modalCategorias = document.getElementById("modalCategorias")
    modalCategorias.innerHTML = strCategoriasModal
}

function procurarEventos() {
    let filtro = document.getElementById("filtro").value
    let filtroTempo = document.getElementById("filtroData").value
    criarCard(filtro, filtroTempo)
}

