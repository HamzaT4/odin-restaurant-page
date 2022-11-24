import menuImg from './menu.jpg'
const container = document.getElementById('content');
export function loadMenu() {
    const heading = document.createElement('h1');
    heading.innerText="Menu";
    container.appendChild(heading);

    const menuCover = new Image();
    menuCover.src= menuImg;
    container.appendChild(menuCover);

    const menuItems = document.createElement('div');
    menuItems.setAttribute("class","menu-section");
    container.appendChild(menuItems);

    const breakfast = document.createElement('div');
    breakfast.innerHTML="       <h2>Breakfast Specialties</h2><h3>Huevos Rancheros [5.99]</h3><h3>Carne Adovada Rancheros [6.75]</h3><h3>Taco Rancheros [6.75]</h3><h3>Enchilada Rancheros [6.75]</h3><h3>Two Egg Special (w/meat) [5.99]</h3><h3>Omelettes-(4 eggs) [6.75]</h3>";
    menuItems.appendChild(breakfast);

    const burgers = document.createElement('div');
    burgers.innerHTML="       <h2>Burgers</h2><h3>All American Burger [Ala Carte - 3.79, Combo w/fries & 32oz. Drink - 5.99]</h3><h3>Cheese Burger [Ala Carte - 4.04, Combo w/fries & 32oz. Drink - 6.24]</h3><h3>Double Meat Double Cheese [Ala Carte - 5.29, Combo w/fries & 32oz. Drink - 7.49]</h3><h3>Green Chile Cheese Burger [Ala Carte - 4.29, Combo w/fries & 32oz. Drink - 6.49]</h3><h3>Bacon Cheese Burger [Ala Carte - 4.54, Combo w/fries & 32oz. Drink - 6.74]</h3>";
    menuItems.appendChild(burgers);

    const newMexicoSpecialties = document.createElement('div');
    newMexicoSpecialties.innerHTML="       <h2>New Mexico Specialties</h2><h3>Indian Taco [6.25]</h3><h3>Taco Salad (beef or chicken) [6.25]</h3><h3>Green Chile Stew [4.99]</h3><h3>Nacho Supreme (Added Beef or Chicken - 1.00) [6.25]</h3><h3>Chicken Wrap [5.50]</h3><h3>Macho Burrito Grande [5.99]</h3>";
    menuItems.appendChild(newMexicoSpecialties);
    
    const beverages = document.createElement('div');
    beverages.innerHTML="       <h2>Beverages</h2><h3>Soda & Ice Tea [Small - 1.49, Medium - 1.89, Large - 2.09]</h3><h3>Coffee [Small - 1.19, Large - N/A]</h3><h3>Orange Juice [Small - .99, Large - 1.99]</h3><h3>Bottled Water [Medium - 1.19]</h3>";
    menuItems.appendChild(beverages);

    const sideOrders = document.createElement('div');
    sideOrders.innerHTML="       <h2>Desserts</h2><h3>Apple Bites [1.19]</h3><h3>Churros [1.49]</h3>";
    menuItems.appendChild(sideOrders);
}