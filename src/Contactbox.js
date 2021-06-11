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

export default contactbox;