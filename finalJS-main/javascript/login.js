let loginForm = document.getElementById("loginform");
let loginPassword = document.getElementById("loginpassword");
let loginMail = document.getElementById("loginmail");
let loginSubmit = document.getElementById("loginSubmit");


loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const userData = JSON.parse(localStorage.getItem("userArr"));
    const {email, password} = userData.find(item => item.email === loginMail.value);
    if(email != loginMail.value || password != loginPassword.value){
        alert('Login or password is not correct');
      }else{
        window.location.replace("../home/index.html");
      }
});



