const switchEl = document.querySelector('.switch');
// console.log(switchEl);
const titleEl = document.querySelector('.banniere-titre');
// console.log(titleEl);

lightDarkMode = () => {
    const mode = document.querySelector("link[href='./css/style-light.css']");

    if(mode) {
        document.querySelector("link[href='./css/style-light.css']").href = "./css/style-dark.css";
        titleEl.innerText = "LIGHT MODE";
    } else {
        document.querySelector("link[href='./css/style-dark.css']").href = "./css/style-light.css";
        titleEl.innerText = "DARK MODE";
    }
}

switchEl.addEventListener('click', lightDarkMode)