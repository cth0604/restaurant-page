import loadPage from "./page-load";
import loadHome from "./home-load";
import loadMenu from "./menu-load";
import loadNews from "./news-load";
import loadContact from "./contact-load";


loadPage();

const home = document.querySelector('#Home');
home.addEventListener('click', loadHome);

const menu = document.querySelector('#Menu');
menu.addEventListener('click', loadMenu);

const News = document.querySelector('#News');
News.addEventListener('click', loadNews);

const Contact = document.querySelector('#Contact');
Contact.addEventListener('click', loadContact);
