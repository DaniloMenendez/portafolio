let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("java");
        habilidades[2].classList.add("cchar");
        habilidades[3].classList.add("python");
        habilidades[4].classList.add("php");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");    
        habilidades[9].classList.add("proyect");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 
//boton descargar hoja de vida
function descargarCV() {
    var link = document.createElement("a");
    link.href = "https://drive.google.com/uc?export=download&id=1dvRIL5ZUULtrrBN5Yz19_GBlH3ZsdgT7";
    link.download = "Tu_CV";
    link.click();
}
// Carrusel de imágenes
let carruselPausado = false;
let modalAbierto = false;

document.getElementById('modal-container').addEventListener('click', function (event) {
    const modalImage = document.getElementById('modal-image');
    if (!modalImage.contains(event.target)) {
        cerrarModal();
    }
});

function mostrarDetalle(imagenSrc) {
    abrirModal(imagenSrc);
    pausarCarrusel();
}

function pausarCarrusel() {
    carruselPausado = true;
    detenerAnimacionCarrusel();
}

function reanudarCarrusel() {
    carruselPausado = false;
    reanudarAnimacionCarrusel();
}

function abrirModal(imagenSrc) {
    modalAbierto = true;
    pausarCarrusel();

    const modalContainer = document.getElementById('modal-container');
    const modalImage = document.getElementById('modal-image');
    modalImage.src = imagenSrc;
    modalContainer.style.display = 'flex';

    ajustarDesplazamiento();
}

function cerrarModal() {
    modalAbierto = false;
    reanudarCarrusel();

    const modalContainer = document.getElementById('modal-container');
    modalContainer.style.display = 'none';
}

function detenerAnimacionCarrusel() {
    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.style.animationPlayState = 'paused';
}

function reanudarAnimacionCarrusel() {
    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.style.animationPlayState = 'running';
    
    // Agrega un evento para reiniciar el carrusel al final de la animación
    carouselInner.addEventListener('animationiteration', reiniciarCarrusel);
}

function reiniciarCarrusel() {
    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.scrollLeft = 0; // Reinicia la posición del carrusel al inicio
}
