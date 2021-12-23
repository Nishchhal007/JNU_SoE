slideshow();
const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener('click',themeChange);

const jnuLogo = document.getElementById("logo");
const soeText = document.getElementById("schoolOfEngineering");
const footer = document.getElementById("footer");
const body = document.getElementById("body");
const bodyText = document.getElementById("bodyText");
const footerList = document.getElementById("footerList");
function themeChange(){
    let theme = document.querySelector('nav');

    if(theme.classList.contains('dark')){
        theme.classList.remove('dark','navbar-dark');
        theme.classList.add('bg-light','navbar-light');
        themeBtn.innerHTML = `<button type="button" class="btn btn-light" style="background-color: rgb(255,255,255);">Dark Mode<img src="moon-fill.svg" style="margin-left: 8px;"></button>`;
        jnuLogo.src = "jnu.png";
        soeText.style.color = "black";
        footer.style.backgroundColor = "white";
        body.style.backgroundColor = "white";
        bodyText.style.color = "black";
        footerList.style.color = "grey";
    }
    else{
        theme.classList.remove('bg-light','navbar-light');
        theme.classList.add('dark','navbar-dark');
        themeBtn.innerHTML = `<button type="button" class="btn btn-dark">Light Mode<img src="icons8-sun.svg" style="margin-left: 8px;"></button>`;
        jnuLogo.src = 'jnu2.gif';
        soeText.style.color = "white";
        footer.style.backgroundColor = "rgb(40,40,40)";
        body.style.backgroundColor = "rgb(40,40,40)";
        bodyText.style.color = "white";
        footerList.style.color = "grey";
    }
}

let image = document.getElementById('image');
let count = 0; 
function slideshow(){
    let array = ['pics/pic.gif', 'pics/pic1.jpeg', 'pics/pic2.jpeg', 'pics/pic3.jpeg', 'pics/pic4.jpeg', 'pics/pic5.jpeg', 'pics/pic7.jpg'];
    setInterval(function () {
        let i = count % 7;
        image.src = array[i];
        count++;
    }, 1800);
}