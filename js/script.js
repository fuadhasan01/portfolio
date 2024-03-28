let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}

document.addEventListener("DOMContentLoaded", function() {
    const footerIconTop = document.querySelector('.footer-iconTop a');

    // Smooth scroll to the top of the page
    footerIconTop.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.navbar a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            const offsetTop = targetSection.offsetTop;

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        });
    });
});



const sr = ScrollReveal ({
    distance: '40px',
    duration: 2500,
    reset: true
})

// sr.reveal('.logo',{delay:200, origin:'left'});
// sr.reveal('.navbar',{delay:400, origin:'top'});
// sr.reveal('.menu-btn',{delay:520, origin:'right'});

sr.reveal('.home-text span',{delay:400, origin:'top'});
sr.reveal('.home-text h1',{delay:480, origin:'left'});
sr.reveal('.home-text p',{delay:550, origin:'right'});
sr.reveal('.main-btn',{delay:560, origin:'left'});

sr.reveal('.share',{delay:650, origin:'bottom'});
sr.reveal('.home-img',{delay:700, origin:'right'});