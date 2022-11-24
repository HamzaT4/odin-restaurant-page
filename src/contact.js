const container = document.getElementById('content');
import mikeImage from './mike.png';
import lyleImage from './lyle.jpeg';
import gusImage from './gus.png';
export function loadContact() {
    const heading = document.createElement('h1');
    heading.innerText="Contact Us";
    container.appendChild(heading);
    
    const card1 = document.createElement("div");
    card1.setAttribute("class","card");
    card1.innerHTML=" <div> <h4>Gus Fring — Owner and Proprietor</h4><h5>855-662-7285</h5><h5>gus2928@madrigalelectromotive.org</h5></div>";
    const card2 = document.createElement("div");
    card2.setAttribute("class","card");
    card2.innerHTML="<div> <h4>Mike Ehrmantraut — head of security</h4><h5>855-322-3285</h5><h5>mike1987@madrigalelectromotive.org</h5></div>";
    const card3 = document.createElement("div");
    card3.setAttribute("class","card");
    card3.innerHTML="<div>  <h4>Lyle Thomas — Assistant manager</h4><h5>855-121-1551</h5><h5>lyleT123@madrigalelectromotive.org</h5></div>";
    container.append(card1,card2,card3);

    let gusPfp = new Image();
    gusPfp.src=gusImage; 
    card1.appendChild(gusPfp);

    let mikePfp = new Image();
    mikePfp.src=mikeImage; 
    card2.appendChild(mikePfp);  
    
    let lylePfp = new Image();
    lylePfp.src=lyleImage; 
    card3.append(lylePfp);
}