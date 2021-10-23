const icon = document.getElementById('icon');
let nav = document.getElementById('navigation');
let botaosalvaredicao = document.querySelector('#botaosalvaredicao');
let idanimeedicao = document.querySelector('#idanimeedicao');
let edit = document.querySelector('#edit');


/* abrir menu */

icon.addEventListener('click', () => {
    if (nav.style.left === '0rem') {
        nav.style.left = '-21rem';
    }
    else {
        nav.style.left = '0rem';
    }
})

/* abrir janela para inserir anime */

const Modal = {
    open() {
        document.querySelector('.modal-overlay')
            .classList.add('active')
    },

    close() {
        document.querySelector('.modal-overlay')
            .classList.remove('active')
    }
}

/* abrir janela para editar anime */

function editanimeabrir() {
    document.querySelector('.editanime-overlay')
        .classList.add('active')
}

/* fechar janela de editar anime */

const editanimefechar = {

    close() {
        document.querySelector('.editanime-overlay')
            .classList.remove('active')
    }
}

let inputAnime = document.querySelector('#description');
let salvar = document.querySelector('#salvar');
let lista = document.querySelector('#lista');

/* adicionar anime com enter */
inputAnime.addEventListener('keypress', (e) => {

    if (e.keyCode == 13) {
        let anime = {
            nome: inputAnime.value,
            id: gerarId(),
        }

    }
});

/* adicionar anime clicando no botão */
salvar.addEventListener('click', (e) => {
    let anime = {
        nome: inputAnime.value,
        id: gerarId(),
    }
    adicionarAnime(anime);
});

/* gerar id de cada anime */
function gerarId() {
    return Math.floor(Math.random() * 3000);
}

/* adicionar anime à lista */

function adicionarAnime(anime) {
    let li = criarTagLi(anime);
    lista.appendChild(li);
    inputAnime.value = '';
}

/* criar tag para adicionar anime */

function criarTagLi(anime) {
    let li = document.createElement('li');
    li.id = anime.id;
    li.classList.add(header.classList.item(0))

    let span = document.createElement('span');
    span.classList.add('nomeanime');
    span.innerHTML = anime.nome;

    let div = document.createElement('div');

    let btndelet = document.createElement('a');
    btndelet.classList.add('buttonacao');
    btndelet.innerHTML = '<img src="./assets/iconlixeira.svg">';
    btndelet.setAttribute('onclick', 'excluir(' + anime.id + ')');

    let btnedit = document.createElement('a');
    btnedit.classList.add('buttonacao');
    btnedit.innerHTML = '<img src="./assets/iconlapis.svg">';
    btnedit.setAttribute('onclick', 'editar(' + anime.id + ')');

    div.appendChild(btnedit);
    div.appendChild(btndelet);

    li.appendChild(span);
    li.appendChild(div);

    return li;
}

/* salvar edição do anime */

botaosalvaredicao.addEventListener('click', (e) => {
    e.preventDefault();

    let idAnime = idanimeedicao.innerHTML.replace('#', '');

    let anime = {
        nome: edit.value,
        id: idAnime
    }

    let animeatual = document.getElementById('' + idAnime + '');

    if (animeatual) {
        let li = criarTagLi(anime);
        lista.replaceChild(li, animeatual);
    }
})

/* função para editar o anime */

function editar(idAnime) {
    let li = document.getElementById('' + idAnime + '');
    if (li) {
        idanimeedicao.innerHTML = '#' + idAnime;
        edit.value = li.innerText;
        editanimeabrir();
    }
}

/* função para excluir anime */

function excluir(idAnime) {
    let li = document.getElementById('' + idAnime + '');
    if (li) {
        lista.removeChild(li);
    }
}

/* var para troca de cor */

var header = document.querySelector("header")
var logo = document.querySelector("#logo")
var navegacao = document.querySelector("#navigation")
var titulo = document.querySelector("#headerMain h1")
var adicionar = document.querySelector("#headerMain a")
var modal = document.querySelector("#modal")
var modaleditar = document.querySelector("#editanime")
var inputedit = document.querySelector("input#edit")
var botao = document.querySelector("button#salvar")
var salvaredicao = document.querySelector("#botaosalvaredicao")
var input = document.querySelector("input#description")
var footer = document.querySelector("footer")
var troca = document.getElementById("lista").children


/* troca de cor viagem a chihiro */

var chihiro = document.querySelector(".chihiro")
chihiro.addEventListener("click", function () {

    header.removeAttribute("class")
    header.classList.add("chihiro")

    logo.removeAttribute("class")
    logo.classList.add("chihiro")

    navegacao.removeAttribute("class")
    navegacao.classList.add("chihiro")

    titulo.removeAttribute("class")
    titulo.classList.add("chihiro")

    adicionar.removeAttribute("class")
    adicionar.classList.add("chihiro")

    modal.removeAttribute("class")
    modal.classList.add("chihiro")

    modaleditar.removeAttribute("class")
    modaleditar.classList.add("chihiro")

    botao.removeAttribute("class")
    botao.classList.add("chihiro")

    salvaredicao.removeAttribute("class")
    salvaredicao.classList.add("chihiro")

    input.removeAttribute("class")
    input.classList.add("chihiro")

    inputedit.removeAttribute("class")
    inputedit.classList.add("chihiro")

    footer.removeAttribute("class")
    footer.classList.add("chihiro")

    for (i = 0; i < troca.length; i++) {
        troca[i].removeAttribute("class")
        troca[i].classList.add("chihiro")
    }
});

/* troca de cor castelo animado */
var castelo = document.querySelector(".castelo")
castelo.addEventListener("click", function () {
    header.removeAttribute("class")
    header.classList.add("castelo")

    logo.removeAttribute("class")
    logo.classList.add("castelo")

    navegacao.removeAttribute("class")
    navegacao.classList.add("castelo")

    titulo.removeAttribute("class")
    titulo.classList.add("castelo")

    adicionar.removeAttribute("class")
    adicionar.classList.add("castelo")

    modal.removeAttribute("class")
    modal.classList.add("castelo")

    modaleditar.removeAttribute("class")
    modaleditar.classList.add("castelo")

    botao.removeAttribute("class")
    botao.classList.add("castelo")

    salvaredicao.removeAttribute("class")
    salvaredicao.classList.add("castelo")

    input.removeAttribute("class")
    input.classList.add("castelo")

    inputedit.removeAttribute("class")
    inputedit.classList.add("castelo")

    footer.removeAttribute("class")
    footer.classList.add("castelo")

    for (i = 0; i < troca.length; i++) {
        troca[i].removeAttribute("class")
        troca[i].classList.add("castelo")
    }
});

/* troca de cor meu amigo totoro */

var totoro = document.querySelector(".totorobotao")
totoro.addEventListener("click", function () {
    header.removeAttribute("class")
    header.classList.add("totoro")

    logo.removeAttribute("class")
    logo.classList.add("totoro")

    navegacao.removeAttribute("class")
    navegacao.classList.add("totoro")

    titulo.removeAttribute("class")
    titulo.classList.add("totoro")

    adicionar.removeAttribute("class")
    adicionar.classList.add("totoro")

    modal.removeAttribute("class")
    modal.classList.add("totoro")

    modaleditar.removeAttribute("class")
    modaleditar.classList.add("totoro")

    botao.removeAttribute("class")
    botao.classList.add("totoro")

    salvaredicao.removeAttribute("class")
    salvaredicao.classList.add("totoro")

    input.removeAttribute("class")
    input.classList.add("totoro")

    inputedit.removeAttribute("class")
    inputedit.classList.add("totoro")

    footer.removeAttribute("class")
    footer.classList.add("totoro")

    for (i = 0; i < troca.length; i++) {
        troca[i].removeAttribute("class")
        troca[i].classList.add("totoro")
    }
});

/* troca de imagem viagem a chihiro */

function imagemchihiro() {
    document.getElementById("totoroimg").src = "assets/circulochihiro.png"
    document.getElementById("icon").src = "assets/iconchihiro.png"
}

/* troca de imagem castelo animado */

function imagemcastelo() {
    document.getElementById("totoroimg").src = "assets/circulocastelo.png"
    document.getElementById("icon").src = "assets/icon.png"
}

/* troca de imagem meu amigo totoro */

function imagemtotoro() {
    document.getElementById("totoroimg").src = "assets/circulototoro.png"
    document.getElementById("icon").src = "assets/icon.png"
}
