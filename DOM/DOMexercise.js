//Q1
document.getElementById("submitButton").onclick = function (){
    let userEmail = "Email: " + document.getElementById("email").value;
    let userPassword = "Password: " + document.getElementById("password").value;

    document.getElementById("emailSubmitted").innerText = userEmail;
    document.getElementById("passwordSubmitted").innerText = userPassword;
}