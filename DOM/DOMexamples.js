let kardImg = document.getElementById("KARD photo"); //access by ID

function imgSwap() { //called by onclick attribute of change image button
    //when button pressed, change to the other image
    if (kardImg.getAttribute("src") === "KARD M Countdown.webp") { //use getAttribute to see what the current src is
        kardImg.setAttribute("src", "KARD Ride on the Wind.webp"); //use setAttribute to assign a new value to src
        kardImg.setAttribute("alt", "KARD Ride on the Wind");
    } else {
        kardImg.setAttribute("src", "KARD M Countdown.webp");
        kardImg.setAttribute("alt", "KARD M Countdown");
    }

    //update innerText of photo caption to match current image
    document.getElementById("KARD photo caption").innerText = kardImg.getAttribute("alt");
}

function imgShrink(){ //called by onclick attribute of shrink image button
    kardImg.setAttribute("width", (kardImg.width - 5).toString());
}

function imgGrow(){
    kardImg.setAttribute("width", (kardImg.width + 5));
}

function memberAdd(){
    const kardMembers = ['J.Seph', 'BM', 'Somin', "Jiwoo"];
    let addText = document.createElement("p"); //create a new paragraph element
    let member = document.createTextNode(kardMembers[Math.floor(Math.random() * 4)]); //create a text node to be used as the innerText of the <p>
    addText.appendChild(member); //append the member textNode to the addText paragraph

    document.getElementById("Members List").appendChild(addText); //append the addText paragraph to the Members List div
}