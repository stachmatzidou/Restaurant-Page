import homepage from "./Homepage";
import homebox from "./Homebox.js";
import menubox from "./Menubox.js";
import contactbox from "./Contactbox";

const content = document.getElementById("content");
content.appendChild(homepage());

const box = document.getElementById("box");
box.appendChild(homebox());

const homeDiv = document.getElementById("home");
const menuDiv = document.getElementById("menu");
const contactDiv = document.getElementById("contact");

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};

homeDiv.addEventListener("click", () => {
    removeAllChildNodes(box);
    box.appendChild(homebox());
});

menuDiv.addEventListener("click", () => {
    removeAllChildNodes(box);
    box.appendChild(menubox());
});

contactDiv.addEventListener("click", () => {
    removeAllChildNodes(box);
    box.appendChild(contactbox());
});