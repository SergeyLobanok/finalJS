let registrationForm = document.getElementById("registration");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmpassword");
let btn = document.getElementById("btn");
registrationForm.addEventListener("submit", getSubmit);
function getSubmit(e){
    if (email.value === ""){
        alert("Please enter your email");
        e.preventDefault();
        return;
    } 
    if (password.value === ""){
        alert("Please write your password ");
        e.preventDefault();
        return;
    }
    if(password.value.length < "8"){
        alert("Your password very short");
        e.preventDefault();
        return;
    }
    if(confirmPassword.value === ""){
        alert("Please write your confirm password");
        e.preventDefault();
        return;
    }
    if (password.value !== confirmPassword.value){
        alert("Yours password is not correct");
        e.preventDefault();
        return;
    } 
        let userData = {
            "email": email.value,
            "password": password.value
        }
        let usersArr = JSON.parse(localStorage.getItem("userArr") || "[]");
        usersArr.push(userData);
        localStorage.setItem("userArr", JSON.stringify(usersArr));
        window.location.replace("login/index.html");
        e.preventDefault();
    
}