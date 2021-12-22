slideshow();
const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener('click',themeChange);

const jnuLogo = document.getElementById("logo");
const soeText = document.getElementById("schoolOfEngineering");

function themeChange(){
    let theme = document.querySelector('nav');

    if(theme.classList.contains('bg-dark')){
        theme.classList.remove('bg-dark','navbar-dark');
        theme.classList.add('light','navbar-light');
        themeBtn.innerHTML = `<button type="button" class="btn btn-light" style="background-color: rgb(255,255,255);">Dark Mode<img src="moon-fill.svg" style="margin-left: 8px;"></button>`;
        jnuLogo.src = "jnu.png";
        soeText.style.color = "black";
    }
    else{
        theme.classList.remove('light','navbar-light');
        theme.classList.add('bg-dark','navbar-dark');
        themeBtn.innerHTML = `<button type="button" class="btn btn-dark">Light Mode<img src="icons8-sun.svg" style="margin-left: 8px;"></button>`;
        jnuLogo.src = 'jnu2.gif';
        soeText.style.color = "white";
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