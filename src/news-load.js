import clearContent from "./content-clear";

function loadNews() {
    clearContent();
    const ul = document.querySelector("ul");
    ul.childNodes[2].classList.add("active");
}

export default loadNews;