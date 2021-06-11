/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homepage);

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function homebox() {
    const homeBox = document.createElement("div");
    homeBox.innerText = "Our restaurant has been creating the best pies in the market since 1594. Our customers, whether they prefer our diner pies or our sweet pies, all agree on one thing. You should not leave our restaurant without trying our signature meat pie, whose recipe has been a family secret, since it was first created more than four centuries ago. Enjoy!";
    homeBox.style.width = "50%";
    homeBox.style.minWidth = "200px";
    homeBox.style.margin = "0 auto";
    homeBox.style.padding = "1rem";
    homeBox.style.fontSize = "1.5rem";
    homeBox.style.backgroundColor = "rgba(0, 0, 0, 0.75)";
    homeBox.style.color = "rgb(255, 255, 255)";

    return homeBox;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homebox);

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menubox);

/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function contactbox() {
    const contactBox = document.createElement("div");
    contactBox.innerHTML = `
        <p>Name : Titus Andronicus</p>
        <p>Phone : +306912345678</p>
        <p>Email : pies@revenge.com</p>
    `;
    contactBox.style.width = "50%";
    contactBox.style.minWidth = "fit-content";
    contactBox.style.margin = "0 auto";
    contactBox.style.padding = "1rem";
    contactBox.style.textAlign = "center";
    contactBox.style.fontSize = "1.5rem";
    contactBox.style.whiteSpace = "nowrap";
    contactBox.style.backgroundColor = "rgba(0, 0, 0, 0.75)";
    contactBox.style.color = "rgb(255, 255, 255)";

    return contactBox;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactbox);

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _Homebox_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _Menubox_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _Contactbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);





const content = document.getElementById("content");
content.appendChild((0,_Homepage__WEBPACK_IMPORTED_MODULE_0__.default)());

const box = document.getElementById("box");
box.appendChild((0,_Homebox_js__WEBPACK_IMPORTED_MODULE_1__.default)());

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
    box.appendChild((0,_Homebox_js__WEBPACK_IMPORTED_MODULE_1__.default)());
});

menuDiv.addEventListener("click", () => {
    removeAllChildNodes(box);
    box.appendChild((0,_Menubox_js__WEBPACK_IMPORTED_MODULE_2__.default)());
});

contactDiv.addEventListener("click", () => {
    removeAllChildNodes(box);
    box.appendChild((0,_Contactbox__WEBPACK_IMPORTED_MODULE_3__.default)());
});
})();

/******/ })()
;