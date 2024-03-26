let nav  = document.querySelector('nav');
let menu = document.querySelector('.menu');
let burger = document.getElementById('burger');
let lune = document.getElementById('lune');
let linkNav = document.querySelectorAll('.menu a');
let sections = document.querySelectorAll('section');

burger.addEventListener('click', () => {
    menu.classList.toggle('active')
    burger.classList.toggle('bx-x')
});

lune.addEventListener('click', () => {
    if (lune.classList.contains('bx-moon')) {
        lune.classList.replace('bx-moon', 'bx-sun')
        document.body.classList.add('active')
    }else{
        lune.classList.replace('bx-sun', 'bx-moon')
        document.body.classList.remove('active')
    }
});

window.addEventListener('scroll', () => {
    nav.classList.toggle('active', scrollY > 0)
    menu.classList.remove('active')
    burger.classList.remove('bx-x')
});

let scrollActive = () => {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            linkNav.forEach(links => {
                links.classList.remove('active')
                document.querySelector('.menu a[href*='+id+']').classList.add('active')
            });
        }
    });
}

window.addEventListener('scroll', scrollActive);

let sr = ScrollReveal({
    origin: 'top',
    distance: '40px',
    duration: 2000,
    reset: true
})
sr.reveal('.text, .image, .titles, .cards, .cartes, form', {interval: 200})