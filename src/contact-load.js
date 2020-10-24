import clearContent from "./content-clear";

function loadContact() {
    clearContent();

    const form = document.createElement('form');
    const h2 = document.createElement('h2');
    h2.innerHTML = 'Contact Us';
    const nameLabel = document.createElement('label');
    const nameInput = document.createElement('input');
    nameInput.name = 'name';
    nameLabel.htmlFor = 'name';
    nameLabel.innerHTML = 'Name:';
    const emailLabel = document.createElement('label');
    const emailInput = document.createElement('input');
    emailInput.name = 'email';
    emailLabel.htmlFor = 'email';
    emailLabel.innerHTML = 'Email:';
    const messageLabel = document.createElement('label');
    const messageInput = document.createElement('input');
    messageLabel.name = 'messageInput';
    messageLabel.htmlFor = 'messageInput';
    messageLabel.innerHTML = 'Message:';
    const submit = document.createElement('button');
    submit.innerHTML = 'Submit';

    form.appendChild(h2)
    form.appendChild(nameLabel)
    form.appendChild(nameInput)
    form.appendChild(emailLabel)
    form.appendChild(emailInput)
    form.appendChild(messageLabel)
    form.appendChild(messageInput)
    form.appendChild(submit)

    document.querySelector('.tabContent').appendChild(form);
    
    const contact = document.createElement('img');
    contact.id = 'contact';
    contact.src = '../images/contact.png';

    document.querySelector('.tabContent').appendChild(contact);

    const ul = document.querySelector("ul");
    ul.childNodes[3].classList.add("active");
}

export default loadContact;