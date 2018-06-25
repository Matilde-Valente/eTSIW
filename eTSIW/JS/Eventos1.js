let eventos = [];
let existe = false;

//CLASSE EVENTO
class Evento {
    constructor(nome, descricao, data, hora, sala, responsavel, parceria, imagem, comentarios, pontuacao) {
        this._id = Evento.ultimoId() + 1
        this.nome = nome
        this.descricao = descricao
        this.data = data
        this.hora = hora
        this.sala = sala
        this.responsavel = responsavel
        this.parceria = parceria
        this.imagem = imagem
        this.comentarios = comentarios
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

let nomeEvento = document.getElementById("modalNomeEvento")
let descricao = document.getElementById("modalDescricao")
let data = document.getElementById("modalData")
let hora = document.getElementById("modalHora")
let sala = document.getElementById("modalSala")
let responsavel = document.getElementById("modalResponsavel")
let parceria = document.getElementById("modalParceria")
let imagem = document.getElementById("modalImagemEvento")

window.onload = function () {
    eventos = JSON.parse(localStorage.getItem("eventos"));

    let adicionar = document.getElementById("adicionar")

    if (eventos == null) {
        let novoEvento = new Evento(nomeEvento.value, descricao.value, data.value, hora.value, sala.value, responsavel.value, parceria.value, imagem.value)
        eventos.push(novoEvento); localStorage.setItem("eventos", JSON.stringify(eventos));
        alert("Registo criado com sucesso")
        console.log(eventos);
    }

    function adicionarEventos(event) {

        let strErro = "";

        for (let i = 0; i < eventos.length; i++) {
            if (nomeEvento.value == eventos[i]._nome) {
                strErro = "Já existe um evento com esse nome!\nPor favor insira outro nome"
                existe = true
                event.preventDefault();
            }

            else if (sala.value == eventos[i]._sala) {
                strErro += "\nA sala já está ocupada"
                existe = true
                event.preventDefault();
            }
            else {
                existe = false
            }
        }
        console.log("passou o primeiro if");
        if (strErro == "") {
            if (existe == false) {
                let novoEvento = new Evento(nomeEvento.value, descricao.value, data.value, hora.value, sala.value, responsavel.value, parceria.value, imagem.value)
                eventos.push(novoEvento);
                alert("Registo criado com sucesso")
                console.log(eventos);

                localStorage.setItem("eventos", JSON.stringify(eventos));
                console.log(localStorage);
            }
            console.log("criou o str error");
        }
        else {
            alert(strErro)
        }

    }
    var caminho = window.location.pathname.split('/')
    console.log(caminho)
    if (caminho[8] == "Eventos.html") {
        criarCard();
    }
    if (caminho[8] == "vEventos.html") {
        carregarEventos();
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
            <img class="card-img-top" src="${eventos[i]._imagem}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${eventos[i]._nome}</h5>
                <p class="card-text">${eventos[i]._descricao}</p>`

        strCard += `</div></div></div>`

        if (i % 3 == 2) {
            strCard += `</div>`
        }
    }
    let catalogoEventos = document.getElementById("card")
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


    let substringID = id.substring(1)
    console.log(substringID)

    for (let i = 0; i < eventos.length; i++) {
        if (eventos[i]._id == substringID) {
            eventoCarregado.push(eventos[i])
            break;
        }
    }
    console.log(eventoCarregado)
    let strDetalhes = ""

    for (let i = 0; i < eventoCarregado.length; i++) {
        strDetalhes += `<div class="col-12">
        <img class="img-responsive w-100 h-100" src="${eventoCarregado[i]._imagem}">
    </div>
    <div class="col-12">
        <h1 class="display-3 text-center m-3">${eventoCarregado[i]._nome}</h1>
        <p class="text-center" style="font-size: 11pt" id=""><b>&ensp; Data &emsp; &emsp; Hora &emsp; &nbsp; Sala </b></p>
        <p class="lead text-center" style="font-size: 12pt" id="eDetalhes">${eventoCarregado[i]._data} &nbsp; <b> | </b> &nbsp; ${eventoCarregado[i]._hora} &nbsp;<b> | </b> &nbsp; ${eventoCarregado[i]._sala}</p>
        <p class="lead">${eventoCarregado[i]._descricao}</p>`

        strDetalhes += `</div>`
        console.log("entrou")
    }
    console.log(eventoCarregado)

    console.log(strDetalhes)
    let detalhesEvento = document.getElementById("detalhes")
    detalhesEvento.innerHTML += strDetalhes
}