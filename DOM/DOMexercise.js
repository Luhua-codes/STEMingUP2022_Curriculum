//Q1
document.getElementById("submitButton").onclick = function (){
    let userEmail = "Email: " + document.getElementById("email").value;
    let userPassword = "Password: " + document.getElementById("password").value;

    document.getElementById("emailSubmitted").innerText = userEmail;
    document.getElementById("passwordSubmitted").innerText = userPassword;
}

//Q2
document.getElementById("changeBG").onclick = function (){
    document.body.style = "background: " + '#'+Math.floor(Math.random()*16777215).toString(16);
}