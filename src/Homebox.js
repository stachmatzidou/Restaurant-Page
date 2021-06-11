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

export default homebox;