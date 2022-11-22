import './style.css';
const container = document.getElementById('content');
function pageLoad() {
    const header = document.createElement('h1'); 
    header.innerText="Welcome to my restaurant";
    container.appendChild(header);   
    
}
pageLoad();   