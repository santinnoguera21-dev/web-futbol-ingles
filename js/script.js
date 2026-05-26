const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    dropdown.addEventListener('mouseover', () => {
        dropdown.classList.add('active');
    });

    dropdown.addEventListener('mouseout', () => {
        dropdown.classList.remove('active');
    });
});
/*mensaje */
const mensaje = document.getElementById('mensajeBienvenida');
const idiomaSelect = document.getElementById('idioma');

function obtenerSaludo(idioma){
    const hora = new Date().getHours();

    let saludo = '';

    if(hora < 12){
        saludo = idioma === 'es' ? 'Buenos días' : 'Good morning';
    } else if(hora < 18){
        saludo = idioma === 'es' ? 'Buenas tardes' : 'Good afternoon';
    } else {
        saludo = idioma === 'es' ? 'Buenas noches' : 'Good evening';
    }

    return saludo;
}

function actualizarMensaje(){
    const idioma = idiomaSelect.value;

    if(idioma === 'es'){
        mensaje.textContent = `${obtenerSaludo('es')}  Bienvenido al fútbol inglés`;
    } else {
        mensaje.textContent = `${obtenerSaludo('en')}  Welcome to English football`;
    }
}

idiomaSelect.addEventListener('change', actualizarMensaje);

// mensaje inicial
actualizarMensaje();
/*slider*/
const slider = document.querySelector('.container_card');

const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let scrollAmount = 0;

const maxScroll = slider.scrollWidth - slider.clientWidth;

nextBtn.addEventListener('click', () => {
    if(scrollAmount < maxScroll){
        scrollAmount += 320;
    }
    slider.style.transform = `translateX(-${scrollAmount}px)`;
});

prevBtn.addEventListener('click', () => {

    if(scrollAmount > 0){
        scrollAmount -= 320;
    }

    slider.style.transform = `translateX(-${scrollAmount}px)`;
});