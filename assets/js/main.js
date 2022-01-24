// Dark mode
let toggle = document.querySelector('#toggle');
let h1 = document.querySelector('h1');
let p = document.querySelectorAll('p');
let i = document.querySelectorAll('i');

let body = document.querySelector('body');

let lk = document.querySelector('#linkedin');
let gh = document.querySelector('#github');
let yb = document.querySelector('#youtube');
let up = document.querySelector('#unsplash');
let rs = document.querySelector('#rocketseat');
let art = document.querySelector('#artigos');
let prt = document.querySelector('#portifolio');
let crr = document.querySelector('#curriculo');

toggle.addEventListener('click', function() {
    let classe = toggle.classList.contains('ri-sun-fill');
    if(classe === true) {
        toggle.classList.remove('ri-sun-fill');
        toggle.classList.add('ri-moon-fill');
        body.style.transition = "all 0.5s";
        body.style.backgroundColor = '#191919';
        h1.style.color = 'white';
        p[0].style.color = 'white';
        for(index = 0; index < 3; index++) {
            i[index].style.color = 'white';
        };
        localStorage.setItem("theme", "dark");
    } else {
        toggle.classList.remove('ri-moon-fill');
        toggle.classList.add('ri-sun-fill');
        body.style.backgroundColor = 'white';
        h1.style.color = '#191919';
        p[0].style.color = '#191919';
        for(index = 0; index < 3; index++) {
            i[index].style.color = '#191919';
        };
        localStorage.setItem("theme", "light");
    };
});

// Local storage
window.onload = checkTheme();

function checkTheme() {
    const lsTheme = localStorage.getItem('theme');
    if(lsTheme !== null && lsTheme === 'dark') {
        toggle.classList.remove('ri-sun-fill');
        toggle.classList.add('ri-moon-fill');
        body.style.transition = "all 0.5s";
        body.style.backgroundColor = '#191919';
        h1.style.color = 'white';
        p[0].style.color = 'white';
        for(index = 0; index < 3; index++) {
            i[index].style.color = 'white';
        };
    };
}

// Mensagens aleatórias
let msg = document.querySelector('#msg');
setInterval(function() {
    const rndInt = Math.floor(Math.random() * 3) + 1
    if(rndInt === 1) {
        msg.innerText = 'All of me for you 😀';
    } else if(rndInt === 2) {
        msg.innerText = 'My links here:';
    } else if(rndInt === 3) {
        msg.innerText = 'Email: vinicius.nevesco@gmail.com';
    };
}, 1500);