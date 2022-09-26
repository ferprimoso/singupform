const pass = document.querySelector('input[id="password"]');
const confirmpass = document.querySelector('input[id="confirm-password"]');

const passbox = document.querySelector('.pass-box');

const notValidNode = document.createTextNode('* Password do not match')

console.log(pass.value)

function checkPass(pass, confirmpass){
    if (pass.value !== confirmpass.value){
        passbox.appendChild(notValidNode);
    }
}

checkPass(pass,confirmpass);