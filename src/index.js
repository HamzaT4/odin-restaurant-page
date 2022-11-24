import './style.css';

import { loadHome } from './home';
import { loadMenu } from './menu';
import { loadContact } from './contact';
const container = document.getElementById('content');
const header = document.createElement('header');
    const navbar = document.createElement('nav');
    const list = document.createElement('ul');
    const homeUnit = document.createElement('li');
    const menuUnit = document.createElement('li');
    const contactUnit = document.createElement('li');
function loadHeader() {
    
    homeUnit.innerHTML="Home";
    homeUnit.setAttribute('id','home-tab');
    homeUnit.addEventListener("click",()=> pageLoad("Home"))
    menuUnit.innerHTML="Menu";
    menuUnit.addEventListener("click",()=> pageLoad("Menu"))
    menuUnit.setAttribute('id','menu-tab');
    contactUnit.innerHTML="Contact";
    contactUnit.addEventListener("click",()=> pageLoad("Contact"))
    contactUnit.setAttribute('id','contact-tab');
    document.body.prepend(header);
    header.appendChild(navbar);
    navbar.appendChild(list);
    list.appendChild(homeUnit);
    list.appendChild(menuUnit);
    list.appendChild(contactUnit);
}

function pageLoad(selectedPage) {
container.innerHTML='';
homeUnit.style.backgroundColor="#facc15";
menuUnit.style.backgroundColor="#facc15";
contactUnit.style.backgroundColor="#facc15";
if(selectedPage=="Home"){
homeUnit.style.backgroundColor="#fef08a";
loadHome();
}
else if(selectedPage=="Menu"){
menuUnit.style.backgroundColor="#fef08a";
loadMenu();
}
else if(selectedPage=="Contact"){
 contactUnit.style.backgroundColor="#fef08a";
loadContact();
}
}


pageLoad("Home");  
loadHeader(); 