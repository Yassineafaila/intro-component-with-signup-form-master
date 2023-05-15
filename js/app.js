//variables:
let fname = document.querySelector("#fname");
let lname = document.querySelector("#lname");
let email = document.querySelector("#email");
let passWord = document.querySelector("#password");
let form = document.querySelector("form");
let warning=document.querySelectorAll(".warning")
let isValid = true;
form.addEventListener("click", function (event) {
    let validFname = false;
    let validLname = false;
    let validEmail = false;
    let validPassword = false;
    let validRegex =
       /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (fname.value !== "") {
        validFname = true;
    }
    if (lname.value !== "") {
        validLname = true;
    }
    if (email.value.match(validRegex)) {
        validEmail = true;
    }
    if (passWord.value.Length > 8 || passWord.value !== "" || passWord.value.Length <= 15) {
        validPassword=true
    }
    if (validFname !== true || validLname !== true || validPassword !== true || validEmail !== true) {
        fname.classList.add("warning");
        lname.classList.add("warning");
        email.classList.add("warning");
        passWord.classList.add("warning");
        warning.forEach((w) => {
            w.style.display = "block";
        })
        event.preventDefault();
    } else {
        fname.classList.remove("warning");
        lname.classList.remove("warning");
        email.classList.remove("warning");
        passWord.classList.remove("warning");
        warning.forEach((w) => {
          w.style.display = "none";
        });
        console.log("done");
    }
    
})