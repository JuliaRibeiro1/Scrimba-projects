const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","&gt","&lt",".","?",
"/"];
// "&gt" e "&lt" são,respectivamente, > e < para evitar bugs no HTML

let generatePassword = document.querySelector(".generateBtn")
let passwordDiv = document.querySelectorAll(".password")
let passwordContainer = document.querySelector(".passwords")
let inputEl = document.querySelector("#div-password")
let counterElements = 0
let counterDigits = 0
let password = ""
let passwordArr = []
let passwordInput = document.querySelector(".passwords-quantity-input")
let digitsInput = document.querySelector(".digits-quantity-input")
let digitsInputContainer =  document.querySelector("#div-digit")
let passwordInputContainer = document.querySelector("#div-password")

function generatePasswords() {
    if(checkDigits(digitsInput.value)){ // checar se o número é valido
        if((checkPassword(passwordInput.value))) { 
        while(counterElements < passwordInput.value) { 
            while(counterDigits < digitsInput.value) { // Irá adiconar novos digitos a senha até atinger o valor determinado pelo usuário no input
                let random = Math.floor(Math.random() * characters.length)
                password += characters[random]
                counterDigits++   
            }
        passwordArr.push(password) 
        counterElements++
        password = ""
        counterDigits = 0    
}
 counterElements = 0 
 }
return passwordArr
    }
}

let passwordsPlaceholderHtml = ""
function renderPasswordsHtml(pass) {
    passwordsPlaceholderHtml  += `<div class=password >${passwordArr[pass]}</div>`
    return passwordsPlaceholderHtml
}
 
generatePassword.addEventListener("click",() => { 
    passwordContainer.innerHTML = ""
    passwordsPlaceholderHtml = ""
    passwordArr.length = 0 
    generatePasswords()
    if(passwordArr.length > 0) {
    for(let passwordArrItem = 0; passwordArrItem < passwordArr.length;passwordArrItem++) {     
         passwordContainer.innerHTML = renderPasswordsHtml(passwordArrItem)
        
    }
}   
})

function updateAttribute(element,text) {
    return element.setAttribute("data-content",text)

}
function checkPassword(value) {
    let passwordInput = document.querySelector("#div-password input")
    if(isNaN(value) || value <= 0) { // verifica se o valor é um número positivo
        updateAttribute(passwordInputContainer,"Invalid character")
        redBorders(passwordInput)
        return false
    } 
    else if(value > 10) {
        updateAttribute(passwordInputContainer,"Number of passwords should be less or equal to 10")
        redBorders(passwordInput)
        return false
    }
    
    else {
        return true 
    }
}

function checkDigits(value) {
    let digitInput = document.querySelector("#div-digit input")
    if(value >= 5 && value <= 25) { // A senha deve ter entre 5 e 25 dígitos
        return true
    }
    else if(value < 5) {
        updateAttribute(digitsInputContainer,"Passoword should have more than 4 characters")
        redBorders(digitInput)
    }
    else if(isNaN(value)) { 
        updateAttribute(digitsInputContainer,"Invalid character")
        redBorders(digitInput)
    }
    else {
        updateAttribute(digitsInputContainer,"Passoword should have less than 26 characters")
          redBorders(digitInput)

    return false
}
}
document.querySelectorAll(".setUp-container div").forEach(item => item.addEventListener("click",(e) => {
    normalize(e.target.parentElement,e.target)
}))

function redBorders(inputHtml) {
     inputHtml.style.cssText = "border: red 2px solid" // Irá adiconar bordas vermelhas ao input para indicar onde está o erro
}
function normalize(inputParent,inputHtml) { // Irá remover os atributos anteriormente adicionados ao css , o intuito aqui é que a frase de erro não continue aparecendo ao usuário depois que ele digitar um novo digito
    inputParent.setAttribute("data-content","")
     inputHtml.style.cssText = "border: none"
}