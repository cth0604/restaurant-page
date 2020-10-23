import loadHome from "./home-load";

function loadPage() {
  const tabNames = ["Home", "Menu", "News", "Contact"];

  const ul = document.createElement("ul");

  for (let i = 0; i < 4; i++) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = tabNames[i];
    a.id = tabNames[i];
    li.appendChild(a);
    ul.appendChild(li);
  }

  ul.firstChild.classList.add('active');
  ul.lastChild.id = "right";

  document.querySelector("#content").appendChild(ul);
  const div = document.createElement("div");
  div.classList.add('tabContent');
  document.querySelector("#content").appendChild(div);
  loadHome();
}

export default loadPage;
