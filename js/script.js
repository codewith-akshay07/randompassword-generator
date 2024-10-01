// receiving input values
const passwordBox = document.getElementById("password");
const length = 8;

//initiallize the veriables with values
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const symbal = "!@#$%^&*()~?><_/,{}[]`-+=";

const allChars = upperCase + lowerCase + number + symbal;


// function to generate random password
function createPassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbal[Math.floor(Math.random() * symbal.length)];

    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    } passwordBox.value = password;

}
// function to copy the password

function copyPassword() {
    passwordBox.select();
    document.execCommand("copy");
    if (passwordBox.value === "") {
        alert("please generate a Password")

    }
    else { alert("your Password copied") }

}