const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let generatePassword = document.querySelector(".generateBtn")
let passwordDiv = document.querySelectorAll(".password")
let passwordContainer = document.querySelector(".password-container")
let inputEl = document.querySelector("#div-password")
let counterElements = 0
let counterDigits = 0
let password = ""
let passwordArr = []
let inputDivEl = document.querySelector(".passwords-quantity-input")
let quantityInput = document.querySelector(".digits-quantity-input")
let quantityInputContainer =  document.querySelector("#div-digit")
let passwordInputContainer = document.querySelector("#div-password")

function generatePasswords() {
     // Irá gerar senhas
    if(checkValue(quantityInput.value, quantityInputContainer)){
        if((checkPassword(inputDivEl.value, passwordInputContainer))) { 
        while(counterElements < inputDivEl.value/*passwordContainer.childElementCount*/) { // Decidi usar childElementCount ao invés de um número para que eu possa adicionar outras divs dentre de passwordContainer sem precisar mudar essa parte do código todas as vezes 
            while(counterDigits < quantityInput.value) { // Irá adiconar novos digitos a senha até atinger o valor determinado pelo usuário no input
                let random = Math.floor(Math.random() * characters.length)
                password += characters[random]
                counterDigits++   
            }
        passwordArr.push(password) 
      
        counterElements++
        password = ""
        counterDigits = 0    // serve para atualizar o valor para 0 para ser reautilizado na proxima vez que o "Generate passwords" for clicado
}

 counterElements = 0 // serve para atualizar o valor para 0 para ser reautilizado na proxima vez que o "Generate passwords" for clicado
 }
return passwordArr
    }
}

let passwordsPlaceholderHtml = ""
function renderPasswordsHtml(pass) {
    passwordsPlaceholderHtml  += `<div class="password">${passwordArr[pass]}</div>`
    console.log(pass)
    return passwordContainer.innerHTML = passwordsPlaceholderHtml
}
 
generatePassword.addEventListener("click",() => { 
    passwordContainer.innerHTML = ""
    passwordsPlaceholderHtml = ""
    passwordArr.length = 0 
    generatePasswords()// irá colocar a cada senha em uma div diferente
    if(passwordArr) {
    for(let passwordArrItem = 0; passwordArrItem < passwordArr.length;passwordArrItem++) {
      //  for (let j = 0; j < inputDivEl.value; j++) { 
         //  passwordDiv[j].textContent = pass[j]
        
         renderPasswordsHtml(passwordArrItem)
         console.log(passwordArr)
        
    }
}   
    // "limpando" o array para possuir apenas as senhas atuais
})

function checkPassword(value,div) {
    let c = Array.from(div.children)
    console.log(c)
    console.log("opaaaaaa")
    if(isNaN(value) || value <= 0) {
        div.setAttribute("data-content","Invalid character")
        console.log(quantityInput.children)
        return false
    } 
    else if(value > 10) {
        div.setAttribute("data-content","Invalid character")
        return false
    }
    else {
        return true 
    }

   
}
function checkValue(value,div) {
    let c = Array.from(div.children)[0]
    console.log(c)
    console.log("OIii") // Essa função irá checar se o valor digitado pelo usuário é válido ou não
    if(value >= 5 && value <= 25) {
        return true
    }
    else if(value < 5) {
        console.log("OI")
        //inputDivEl.style.color = "red"
        div.setAttribute("data-content","Passoword should have more than 4 digits")
       // redBorders() // Mudando a frase do content de inputDivEl::before para alertar o usuário
      //  return false
    }
    else if(isNaN(value)) { 
        div.setAttribute("data-content","Digit is not valid")
        redBorders(c)
        console.log()
        // return false
      
    }
    else {
          div.setAttribute("data-content","Passoword should have less than 26 digits")
          redBorders(c)
        // return false
    }
}
//inputDivEl.addEventListener("click",normalize) 

function redBorders(div) {
     div.style.cssText = "border: red 2px solid" // Irá adiconar bordas vermelhas ao input para indicar onde está o erro
}
function normalize(div) { // Irá remover os atributos anteriormente adicionados ao css , o intuito aqui é que a frase de erro não continue aparecendo ao usuário depois que ele digitar um novo digito
    div.setAttribute("data-content","")
     div.style.cssText = "border: none"
}