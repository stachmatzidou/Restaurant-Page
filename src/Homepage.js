function homepage() {
    // STYLING THE BODY
    document.body.style.backgroundImage = "url(../Pies.jpg)";
    document.body.style.backgroundSize = "cover";
    document.body.style.minHeight = "100vh";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.fontFamily = "Gabriola";


    // MAIN ELEMENT
    const element = document.createElement("div");
    element.classList.add("element");

    // HEADER
    const header = document.createElement("div");
    header.style.backgroundColor = "rgba(0, 0, 0, 0.75)";
    // header.style.marginTop = "2rem";
    header.style.paddingTop = "1rem";
    header.style.paddingBottom = "0.5rem";
    header.style.color = "rgb(255, 255, 255)";



    // HEADER CONTENT
    const restaurantName = document.createElement("h1");
    restaurantName.innerText = "Titus's delicious pies";
    restaurantName.style.textAlign = "center";
    restaurantName.style.fontSize = "4rem";
    restaurantName.style.fontWeight = "bolder";
    header.appendChild(restaurantName);

    const since = document.createElement("p");
    since.innerText = "since 1594 AD";
    since.style.textAlign = "center";
    since.style.fontSize = "1rem";
    since.style.marginBottom = "1rem";
    header.appendChild(since);

    // NAVBAR
    const navbar = document.createElement("div");
    navbar.style.borderTop = "1px solid rgb(255, 255, 255)";
    navbar.style.paddingTop = "0.5rem";
    navbar.style.display = "flex";
    navbar.style.justifyContent = "center";
    navbar.style.gap = "1rem";
    navbar.style.fontSize = "2rem";

    // NAVBAR CONTENT
    const home = document.createElement("div");
    home.innerText = "Home";
    home.setAttribute("id", "home");
    home.style.cursor = "pointer";

    const menu = document.createElement("div");
    menu.innerText = "Menu";
    menu.setAttribute("id", "menu");
    menu.style.cursor = "pointer";


    const contact = document.createElement("div");
    contact.innerText = "Contact Us";
    contact.style.whiteSpace = "nowrap";
    contact.setAttribute("id", "contact");
    contact.style.cursor = "pointer";

    const box = document.createElement("div");
    box.setAttribute("id", "box");


    navbar.appendChild(home);
    navbar.appendChild(menu);
    navbar.appendChild(contact);

    header.appendChild(navbar);

    element.appendChild(header);
    element.appendChild(box);


    return element;
};

export default homepage;