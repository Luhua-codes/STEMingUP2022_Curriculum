let kardImg = document.getElementById("KARD photo"); //access by ID

document.getElementById("imgSwap").onclick = function () { //add onclick attribute to imgSwap button
    kardImg = document.getElementById("KARD photo");
    let newImg = document.createElement("img");
    newImg.setAttribute("id", "KARD photo");

    //when button pressed, change to the other image
    if (kardImg.getAttribute("src") === "KARD M Countdown.webp") { //use getAttribute to see what the current src is
        newImg.setAttribute("src", "KARD Ride on the Wind.webp"); //use setAttribute to assign a new value to src
        newImg.setAttribute("alt", "KARD Ride on the Wind");
    } else {
        newImg.setAttribute("src", "KARD M Countdown.webp");
        newImg.setAttribute("alt", "KARD M Countdown");
    }

    //replace the current image with newImg
    kardImg.replaceWith(newImg);
    //update innerText of photo caption to match current image
    document.getElementById("KARD photo caption").innerText = kardImg.getAttribute("alt");
}

document.getElementById("imgShrink").onclick = function () { //called by onclick attribute of shrink image button
    kardImg = document.getElementById("KARD photo");
    kardImg.setAttribute("width", (kardImg.width - 5).toString());
}

document.getElementById('imgGrow').onclick = function () {
    kardImg = document.getElementById("KARD photo");
    kardImg.setAttribute("width", (kardImg.width + 5));
}

function memberAdd() {
    const kardMembers = ['J.Seph', 'BM', 'Somin', "Jiwoo"];
    let addText = document.createElement("p"); //create a new paragraph element

    //create a text node to be used as the innerText of the <p>
    //choose a random member to add (randomly choose an array index)
    let member = document.createTextNode(kardMembers[Math.floor(Math.random() * 4)]);

    addText.appendChild(member); //append the member textNode to the addText paragraph

    document.getElementById("Members List").appendChild(addText); //append the addText paragraph to the Members List div
}