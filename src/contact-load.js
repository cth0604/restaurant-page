import clearContent from "./content-clear";

function loadContact() {
    clearContent();
    const ul = document.querySelector("ul");
    ul.childNodes[3].classList.add("active");
}

export default loadContact;