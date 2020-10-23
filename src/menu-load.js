import clearContent from "./content-clear";

function loadMenu() {
    clearContent();
    const div = document.querySelector(".tabContent");
    const menu = document.createElement("img");
    menu.src = '../images/menu';
    div.appendChild(menu);
    const ul = document.querySelector("ul");
    ul.childNodes[1].classList.add("active");
}

export default loadMenu;