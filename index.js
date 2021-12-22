slideshow();
const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener('click',themeChange);

const jnuLogo = document.getElementById("logo");

function themeChange(){
    let theme = document.querySelector('nav');

    if(theme.classList.contains('bg-dark')){
        theme.classList.remove('bg-dark','navbar-dark');
        theme.classList.add('light','navbar-light');
        themeBtn.src = 'moon-fill.svg';
        jnuLogo.src = "jnu.png";
    }
    else{
        theme.classList.remove('light','navbar-light');
        theme.classList.add('bg-dark','navbar-dark');
        themeBtn.src = 'icons8-sun.svg';
        jnuLogo.src = 'jnu2.gif';
    }
}

let image = document.getElementById('image');
let count = 0; 
function slideshow(){
    let array = ['pic1.jpeg', 'pic2.jpeg', 'pic3.jpeg', 'pic4.jpeg', 'pic5.jpeg'];
    setInterval(function () {
        let i = count % 5;
        image.src = array[i];
        count++;
    }, 1500);
}