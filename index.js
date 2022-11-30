// Slide Start

let slideIndex = 0

const updateSlide = (n) => {
    slideIndex += n;
    showSlide(slideIndex);
}

const showSlide = (n) => {
    const slides = document.getElementsByClassName("container2-row-content")
    if (n > slides.length - 1) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex].style.display = "block";
    
}

showSlide(slideIndex);

// Slide End

// Modal Start

const openModal1 = document.getElementById('openModalimg1')
const openModal2 = document.getElementById('openModalimg2')
const openModal3 = document.getElementById('openModalimg3')
const openModal4 = document.getElementById('openModalimg4')

const closeModal1 = document.getElementById('closeModalIcon1')
const closeModal2 = document.getElementById('closeModalIcon2')
const closeModal3 = document.getElementById('closeModalIcon3')
const closeModal4 = document.getElementById('closeModalIcon4')

const modal1 = document.getElementById('myModal1')
const modal2 = document.getElementById('myModal2')
const modal3 = document.getElementById('myModal3')
const modal4 = document.getElementById('myModal4')



openModal1.addEventListener('click', () => {
    modal1.style.display = "block"
})
openModal2.addEventListener('click', () => {
    modal2.style.display = "block"
})
openModal3.addEventListener('click', () => {
    modal3.style.display = "block"
})
openModal4.addEventListener('click', () => {
    modal4.style.display = "block"
})

closeModal1.addEventListener('click', () => {
    modal1.style.display = "none"
})
closeModal2.addEventListener('click', () => {
    modal2.style.display = "none"
})
closeModal3.addEventListener('click', () => {
    modal3.style.display = "none"
})
closeModal4.addEventListener('click', () => {
    modal4.style.display = "none"
})

// Modal End

// Info Start

const email = document.getElementById('email')
const message = document.getElementById('message')


const ambilInput = () => {

    if (email.value !== "arvin.kemal2017@gmail.com") {
        alert("Email salah, silahkan masukkan kembali!")
    }
    
    if (message.value !== "salah") {
        alert("Message salah, silahkan masukkan kembali!")
    }
    
}

// Info End

// Accordion Start

const accordion = document.getElementsByClassName('accordion')

for (let i = 0; i < accordion.length; i++){
    accordion[i].addEventListener('click', function () {
        const panel = this.nextElementSibling

        if (panel.style.display === "block") {
            
            panel.style.display = "none"
        } else {
            panel.style.display = "block"
        }

    })
}

// Accordion End