function menubox() {
    const menuBox = document.createElement("div");
    
    menuBox.style.width = "50%";
    menuBox.style.minWidth = "200px";
    menuBox.style.margin = "0 auto";
    menuBox.style.padding = "1rem";
    menuBox.style.display = "flex";
    menuBox.style.flexDirection = "column";
    menuBox.style.alignItems = "center";
    menuBox.style.whiteSpace = "nowrap";
    menuBox.style.fontSize = "1.5rem";
    menuBox.style.backgroundColor = "rgba(0, 0, 0, 0.75)";
    menuBox.style.color = "rgb(255, 255, 255)";

    const h1 = document.createElement("h1");
    h1.innerText = "Titus's delicious pies";
    h1.style.marginBottom = "1rem";
    h1.style.fontSize = "2rem";
    menuBox.appendChild(h1);

    const list = document.createElement("div");
    list.style.display = "flex";
    list.style.justifyContent = "space-between";
    list.style.gap = "1rem";
    const pies = document.createElement("div");
    pies.innerHTML = `
        <ul>
        <li>Apple pie</li>
        <li>Peach pie</li>
        <li>Chocolate pie</li>
        <li>Sweet pumpkin pie</li>
        <br>
        <li>Chicken pot pie</li>
        <li>Shepherd's pie</li>
        <li>Sea food pot pie</li>
        <li>Special meat pie</li>
        </ul>
    `;
    const prices = document.createElement("div");
    prices.innerHTML = `
        <ul>
        <li>7</li>
        <li>8</li>
        <li>8</li>
        <li>9</li>
        <br>
        <li>12</li>
        <li>12</li>
        <li>15</li>
        <li>20</li>
        </ul>
    `;
    list.appendChild(pies);
    list.appendChild(prices);
    menuBox.appendChild(list);

    return menuBox;
};

export default menubox;