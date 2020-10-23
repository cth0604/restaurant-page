function clearContent() {
    const active = document.querySelector(".active");
    active.classList.remove('active');
    const content = document.querySelector(".tabContent");
    content.innerHTML = '';
}

export default clearContent;