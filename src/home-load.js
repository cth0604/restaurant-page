import clearContent from "./content-clear";

function loadHome() {
  clearContent();
  const h1 = document.createElement("h1");
  const p = document.createElement("p");
  const div = document.querySelector(".tabContent");
  h1.innerHTML = "Welcome!";
  p.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis rem consequuntur consequatur porro nesciunt autem quia nostrum id quis. Corporis ipsa quaerat odio rem possimus ullam adipisci numquam quasi eligendi.";
  div.appendChild(h1);
  div.appendChild(p);
  const ul = document.querySelector("ul");
  ul.firstChild.classList.add("active");
}

export default loadHome;
