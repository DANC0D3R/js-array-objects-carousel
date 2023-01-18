// Array slide e info
const picutres = [
    {
        title: 'Marvel\'s Spiderman Miles Morale',
        image: 'img/01.webp',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        title: 'Ratchet & Clank: Rift Apart',
        image: 'img/02.webp',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        title: 'Fortnite',
        image: 'img/03.webp',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        title: 'Stray',
        image: 'img/04.webp',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        title: "Marvel's Avengers",
        image: 'img/05.webp',
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    },
];


/* ----- FUNZIONI ----- */
// Funzione che crea un contenitore di immagini
function createImgDiv(imgSrc) {
    const imgCont = document.createElement('div');
    imgCont.innerHTML = `
        <img src=${imgSrc}>
    `;
    return imgCont;
}

// Funzione che crea un contenitore di testo
function createtext(title, description) {
    const text = document.createElement('div');
    text.classList.add('text');
    text.innerHTML = `
        <h3>${title}</h3>
        <p>${description}</p>
    `;
    return text;
}


// Crea tante slide quanto il numero di elementi nell'array "pictures"
picutres.forEach((element, i) => {
    // Seleziona i contenitori
    const slides = document.getElementById('slides');
    const thumbnails = document.getElementById('thumbnails');
    // Crea una slide
    const slide = createImgDiv(element.image);
    slide.classList.add('slide');
    const text = createtext(element.title, element.text);
    slide.append(text);
    slides.append(slide);
    // Assegna allaprima la classe "current"
    if(i == 0) {
        slide.classList.add('current');
    }
    // Crea una miniatura
    const thumb = createImgDiv(element.image);
    thumb.classList.add('thumb');
    thumb.style.width = (100 / picutres.lenght) + '%'; // Imposta la dimensione delle slide in percentuale in base al numero di slide nell'array
    thumbnails.append(thumb);
    // Assegna allaprima la classe "current"
    if(i == 0) {
        thumb.classList.add('current');
    }
});

// Seleziona i bottoni
const leftButton = document.querySelector('.button-left');
const rightButton = document.querySelector('.button-right');

// Crea il contaore di current
let current = 0;

// Crea due array, rispettivamente uno con slide e uno con thumb
const slides = document.getElementsByClassName('slide');
const thumbs = document.getElementsByClassName('thumb');

// Al click sul bottone sinitro
leftButton.addEventListener('click',() => {
    // Toglie la classe current
    slides[current].classList.remove('current');
    thumbs[current].classList.remove('current');
    // Aggiorna il contatore current
    if (current == 0) {
        current = slides.length - 1;
    }
    else {
        current--;
    }
    // Assegna la classe current alla slide precedente
    slides[current].classList.add('current');
    thumbs[current].classList.add('current');
}
)

// Al click sul bottone destro
rightButton.addEventListener('click',() => {
        // Toglie la classe current
        slides[current].classList.remove('current');
        thumbs[current].classList.remove('current');
        // Aggiorna il contatore current
        if (current == slides.length - 1) {
            current = 0;
        }
        else {
            current++;
        }
        // Assegna la classe current alla slide successiva
        slides[current].classList.add('current');
        thumbs[current].classList.add('current');
    }
)