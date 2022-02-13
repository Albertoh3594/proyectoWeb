//obtener el elemento span por el id move
let move = document.getElementById("move");

//flecha para home
let home = document.getElementById("home");
home.addEventListener("mouseover", () => {
    move.className = "flecha";
    move.style.setProperty("left", "30px");
}, false)
home.addEventListener("mouseout", () => {
    move.className = "flecha";
}, false)

//flecha para sobre nosotros
let sobre = document.getElementById("sobre");
sobre.addEventListener("mouseover", () => {
    move.className = "flecha";
    move.style.setProperty("left", "148px");
}, false)
sobre.addEventListener("mouseout", () => {
    move.style.setProperty("left", "30px");
}, false)


//flecha para galeria
let galery = document.getElementById("galery");
galery.addEventListener("mouseover", () => {
    move.className = "flecha";
    move.style.setProperty("left", "277px");
}, false)
galery.addEventListener("mouseout", () => {
    move.style.setProperty("left", "30px");
}, false)


//flecha para noticias
let noticias = document.getElementById("noticias");
noticias.addEventListener("mouseover", () => {
    move.className = "flecha";
    move.style.setProperty("left", "378px");
}, false)
noticias.addEventListener("mouseout", () => {
    move.style.setProperty("left", "30px");
}, false)


//flecha para contacto
let contacto = document.getElementById("conta");
contacto.addEventListener("mouseover", () => {
    move.className = "flecha";
    move.style.setProperty("left", "480px");
}, false)
contacto.addEventListener("mouseout", () => {
    move.style.setProperty("left", "30px");
}, false)


//flecha para mapa web
let mapa = document.getElementById("mapa");
mapa.addEventListener("mouseover", () => {
    move.className = "flecha";
    move.style.setProperty("left", "590px");
}, false)
mapa.addEventListener("mouseout", () => {
    move.style.setProperty("left", "30px");
}, false)


//Navbar fixed

let nav = document.querySelector(".navbar");
let logo = document.getElementById("logo");

window.addEventListener('scroll', fixNav);

function fixNav() {
    if (window.scrollY > 200) {
        nav.className = "fixed";
    } else {
        nav.className = "navbar";
    }
}