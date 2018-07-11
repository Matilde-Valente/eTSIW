let eventos = [];
let existe = false;
let detalhesEvento;
let catalogoEventos;
let adicionar;
let botao;
let arrayComentarios = [];
let substringID;
let url;

//CLASSE EVENTO
class Evento {
    constructor(nome, descricao, data, hora, sala, responsavel, parceria, imagem, comentario, pontuacao) {
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

    static ultimoId() {
        let ultimoId = 0
        if (eventos.length != 0) {
            ultimoId = eventos[eventos.length - 1]._id
        }
        return ultimoId
    }
}

if (localStorage.getItem("eventos") == null) {
    localStorage.setItem("eventos", JSON.stringify(eventos));
}

//Vai buscar a key utilizadores e guarda no array utilizadores
utilizadores = JSON.parse(localStorage.getItem("utilizadores"));

window.onload = function () {
    console.log(localStorage.getItem("eventos"))

    if (eventos <= 0) {
        eventos = JSON.parse(localStorage.getItem("eventos"));
    }
    console.log(eventos)

    adicionar = document.getElementById("modalEventos")
    detalhesEvento = document.getElementById("detalhes")
    catalogoEventos = document.getElementById("card")

    if (catalogoEventos != null) {
        criarCard();
    }
    if (detalhesEvento != null) {
        carregarEventos();
        arrayComentarios = eventos[substringID - 1]._comentario
        mostrarComentarios();
    }

    if (adicionar != null) {
        adicionar.addEventListener("submit", adicionarEvento);
    }
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
    let imagem = document.getElementById("modalImagemEvento")
    url = imagem.value

    //Data Atual
    let dataAtual = new Date();
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
        if (sala.value == eventos[i]._sala) {
            strErro += "\nA sala já está ocupada! Por favor escolha outra sala"
            existe = true
            event.preventDefault();
        }
        if (imagem.value == "") {
            url = "https://pbs.twimg.com/profile_images/792011747397865473/2r6wseRk_400x400.jpg"
            existe = false
        }
        else {
            existe = false
        }
    }

    console.log("passou o primeiro if");
    if (strErro == "") {
        if (existe == false) {
            let novoEvento = new Evento(nomeEvento.value, descricao.value, data.value, hora.value, sala.value, responsavel.value, parceria.value, url, arrayComentarios, "")
            eventos.push(novoEvento);
            alert("Registo criado com sucesso")

            localStorage.setItem("eventos", JSON.stringify(eventos));
            console.log(localStorage);
        }
        console.log("criou o str error");
    }
    else {
        alert(strErro)
    }
}

//Adiciona dados ao card
function criarCard() {
    let strCard = ""

    for (var i = 0; i < eventos.length; i++) {
        if (i % 3 == 0) {
            strCard += `<div class="row">`
        }
        // Cria o card
        strCard += `<div class="col-sm-4">
        <div class="card" onclick="abrirEventos(${eventos[i]._id})" style="width: 18rem;">
            <img class="card-img-top" style="width: 286px; heigth: 286px" src="${eventos[i]._imagem}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${eventos[i]._nome}</h5>
                <p class="card-text">${eventos[i]._descricao}</p>`

        strCard += `</div></div></div>`

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

let eventoCarregado = []
//PAGINA VER EVENTOS
function carregarEventos() {
    let id = window.location.hash

    substringID = id.substring(1)
    console.log(substringID)

    for (let i = 0; i < eventos.length; i++) {
        if (eventos[i]._id == substringID) {
            eventoCarregado.push(eventos[i])
            break;
        }
    }
    console.log(eventoCarregado)
    let strDetalhes = ""


    strDetalhes += `<div class="col-1"></div>
        <div class="col-10"><div class="jumbotron mt-5">
        <img class="img-responsive w-100 h-100" src="${eventoCarregado[0]._imagem}">
    
        <div><h1 class="display-3 text-center m-3">${eventoCarregado[0]._nome}</h1></div>
        <div><center><table class='w-25' style='text-align:center'>
        <thead>
            <tr><th>Data</th><th>Hora</th><th>Sala</th></tr>
        </thead>
        <tbody>
            <tr><td>${eventoCarregado[0]._data}</td><td>${eventoCarregado[0]._hora}</td><td>${eventoCarregado[0]._sala}</td></tr>
        </tbody>
        </table ></center></div>
        <p class="lead">${eventoCarregado[0]._descricao}</p>
        <div><textarea id="comentarioTextArea" class="w-100" cols="150" rows="4"></textarea></div>
        <div style="text-align:right"><button id="comentarioBotao" type="button" onclick="adicionarComentario()" value="Enviar">Enviar</button></div></div>`

    strDetalhes += `</div>`

    detalhesEvento = document.getElementById("detalhes")
    detalhesEvento.innerHTML += strDetalhes
}

function adicionarComentario() {
    botao = document.getElementById("comentarioBotao")
    console.log(botao)

    let comentarioTextArea = document.getElementById("comentarioTextArea")
    let comentarioNovo = comentarioTextArea.value
    let arrayLogado = JSON.parse(localStorage.getItem("logado"));
    let nomeLogado = arrayLogado[0]

    console.log(arrayLogado)

    arrayComentarios.push({ nomeLogado, comentarioNovo });
    console.log(arrayComentarios)

    console.log(eventos)
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
            console.log("ola")
            if (arrayComentarios[i].nomeLogado == utilizadores[j]._nome) {
                img = utilizadores[j]._foto
            }

        }
        strComentarios += `<div><h4><img  class="rounded border border-secondary m-2" style="width: 40px; height: 40px" src="${img}"></img>${arrayComentarios[i].nomeLogado}</h4></div><div class="mb-2">${arrayComentarios[i].comentarioNovo}</div><hr>`
        console.log("entrei")
    }
    strComentarios += `</div></div>`
    console.log(img)
    console.log(arrayComentarios.length)

    let comentarios = document.getElementById("comentarios")
    comentarios.innerHTML += strComentarios
}

