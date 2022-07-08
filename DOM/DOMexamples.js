function imgSwap(){ //caled by onclick attribute of img with ID KARD photo
    let kardImg = document.getElementById("KARD photo"); //access by ID

    //when button pressed, change to the other image
    if (kardImg.getAttribute("src") === "KARD M Countdown.webp") {
        kardImg.setAttribute("src", "KARD Ride on the Wind.webp");
        kardImg.setAttribute("alt", "KARD Ride on the Wind");
    }else{
        kardImg.setAttribute("src", "KARD M Countdown.webp");
        kardImg.setAttribute("alt", "KARD M Countdown");
    }
}