import img from './logo.png';
const container = document.getElementById('content');
export function loadHome() {
   
    let logo = new Image();
    logo.src=img;   
    logo.setAttribute('class','logo');
    container.appendChild(logo);

    const title1= document.createElement("h3");
    title1.innerText="Welcome";
    container.appendChild(title1);
    let welcome = document.createElement("p");
    welcome.setAttribute("class","bio");
    welcome.innerHTML="It's the best ingredients. The spiciest spices. All prepared with loving care! And always delivered with a friendly smile. That's the Los Pollos Hermanos promise.<br>Gus Fring — Owner and Proprietor";
    container.appendChild(welcome);

    const title2= document.createElement("h3");
    title2.innerText="Who we are";
    container.appendChild(title2);
    let bio = document.createElement("p");
    bio.setAttribute("class","bio");
    bio.innerText="Los Pollos Hermanos was a fast-food restaurant chain that specialized in fried chicken, operating across the southwestern United States. The name, pronounced [los ˈpo.ʝos eɾˈma.nos], is ungrammatical Spanish for `The Chicken Brothers.` Founded by Gustavo Fring and Max Arciniega, the restaurant chain had fourteen locations throughout the southwest and was Gustavo Fring's major business concern. Los Pollos Hermanos was a subsidiary of Madrigal Electromotive, a German conglomerate with an ownership stake in the company. The restaurant also provided money-laundering and logistics for illegal activities.";
    container.appendChild(bio);

    const title3= document.createElement("h3");
    title3.innerText="Locations";
    container.appendChild(title3);
    let locations = document.createElement("ul");
    locations.setAttribute("class","bio");
    locations.innerHTML="<li>Alamogordo, NM</li><li>Albuquerque, NM</li><li>Brownfield, TX</li>";
    container.appendChild(locations);

}
