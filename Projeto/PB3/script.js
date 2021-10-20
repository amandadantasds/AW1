const icon = document.getElementById('icon');
let nav = document.getElementById ('navigation');
let botaosalvaredicao = document.querySelector('#botaosalvaredicao');
let idanimeedicao = document.querySelector('#idanimeedicao');
let edit = document.querySelector('#edit');

icon.addEventListener('click', () => {
    if(nav.style.left === '0rem'){
       nav.style.left = '-21rem';
    }
    else{
        nav.style.left = '0rem';
    }
})

const Modal = {
    open(){
        document.querySelector('.modal-overlay')
        .classList.add('active')
    },

    close(){
        document.querySelector('.modal-overlay')
        .classList.remove('active')
    }
}

function editanimeabrir() {
    document.querySelector('.editanime-overlay')
        .classList.add('active')
}
const editanimefechar = {

    close(){
        document.querySelector('.editanime-overlay')
        .classList.remove('active')
    }
}

let inputAnime = document.querySelector('#description');
let salvar = document.querySelector('#salvar');
let lista = document.querySelector('#lista');

inputAnime.addEventListener('keypress',(e) =>{

    if(e.keyCode == 13){
    let anime = {
        nome: inputAnime.value,
        id: gerarId(),
    }
    
}
});

salvar.addEventListener('click', (e) => {
    let anime = {
        nome: inputAnime.value,
        id: gerarId(),
    }
    adicionarAnime(anime);
});

function gerarId(){
    return Math.floor(Math.random() * 3000);
}

function adicionarAnime(anime){
    let li = criarTagLi(anime);
    lista.appendChild(li);
    inputAnime.value = '';
}

function criarTagLi(anime){
    let li = document.createElement('li');
    li.id = anime.id;

    let span = document.createElement('span');
    span.classList.add('nomeanime');
    span.innerHTML = anime.nome;

    let div = document.createElement('div');

    let btndelet = document.createElement('a');
    btndelet.classList.add('buttonacao');
    btndelet.innerHTML = '<img src="./assets/iconlixeira.svg">';
    btndelet.setAttribute('onclick', 'excluir('+anime.id+')');

    let btnedit = document.createElement('a');
    btnedit.classList.add('buttonacao');
    btnedit.innerHTML = '<img src="./assets/iconlapis.svg">';
    btnedit.setAttribute('onclick', 'editar('+anime.id+')');

    div.appendChild(btnedit);
    div.appendChild(btndelet);

    li.appendChild(span);
    li.appendChild(div);

    return li;
}

botaosalvaredicao.addEventListener('click', (e) =>{
    e.preventDefault();

    let idAnime = idanimeedicao.innerHTML.replace('#','');

    let anime ={
        nome: edit.value,
        id: idAnime
    }

    let animeatual = document.getElementById('' +idAnime+'');

    if(animeatual){
        let li = criarTagLi(anime);
        lista.replaceChild(li, animeatual);
    }
})

function editar(idAnime){
let li = document.getElementById(''+ idAnime +'');
if(li){
    idanimeedicao.innerHTML = '#' + idAnime;
    edit.value = li.innerText;
    editanimeabrir();
}
}

function excluir(idAnime){
    let li = document.getElementById(''+ idAnime +'');
    if(li){
        lista.removeChild(li);
    }
}

var header = document.querySelector("header")
var logo = document.querySelector(".logo")
var navegacao = document.querySelector("#navigation")
var titulo = document.querySelector(".totoroheader h1")
var adicionar = document.querySelector(".totoroheader a")
var modal = document.querySelector (".modal")
var modaleditar = document.querySelector (".editanime")
var footer = document.querySelector("footer")

var chihiro = document.querySelector(".chihiro")
    chihiro.addEventListener("click", function(){
    header.style.backgroundColor = "#E8615E";
    logo.style.color = "#4BE37B";
    navegacao.style.backgroundColor = "#E8615E"; 
    titulo.style.color = "#219C47";
    adicionar.style.color = "#219C47";
    modal.style.backgroundColor = "#E8615E";
    modaleditar.style.backgroundColor = "#E8615E";
    footer.style.backgroundColor = "#E8615E";
});

var castelo = document.querySelector(".castelo")
    castelo.addEventListener("click", function(){
    header.style.backgroundColor = "#2C226B";
    logo.style.color = "#F5EAAA";
    navegacao.style.backgroundColor = "#2C226B"; 
    titulo.style.color = "#2C226B";
    adicionar.style.color = "#2C226B";
    modal.style.backgroundColor = "#2C226B";
    modaleditar.style.backgroundColor = "#2C226B";
    footer.style.backgroundColor = "#2C226B";
});

var totoro = document.querySelector(".totoro")
    totoro.addEventListener("click", function(){
    header.style.backgroundColor = "#5073B3";
    logo.style.color = "#F5EAAA";
    navegacao.style.backgroundColor = "#5073B3"; 
    titulo.style.color = "#5073B3";
    adicionar.style.color = "#5073B3";
    modal.style.backgroundColor = "#B39450";
    modaleditar.style.backgroundColor = "#B39450";
    footer.style.backgroundColor = "#5073B3";
});

function imagemchihiro(){
    document.getElementById("totoroimg").src = "assets/circulochihiro.png"
    document.getElementById("icon").src = "assets/iconchihiro.png"
}

function imagemcastelo(){
    document.getElementById("totoroimg").src = "assets/circulocastelo.png"
    document.getElementById("icon").src = "assets/icon.png"
}

function imagemtotoro(){
    document.getElementById("totoroimg").src = "assets/circulototoro.png"
    document.getElementById("icon").src = "assets/icon.png"
}