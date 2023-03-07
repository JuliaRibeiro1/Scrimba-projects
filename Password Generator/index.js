const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let generatePassword = document.querySelector(".generateBtn")
let passwordDiv = document.querySelectorAll(".password")
let passwordContainer = document.querySelector(".password-container div")
let inputEl = document.querySelector("input")
let counterElements = 0
let counterDigits = 0
let password = ""
let pass = []
let inputDivEl = document.querySelector(".inputDiv")

function generatePasswords() { // Irá gerar senhas
 if(checkValue(inputEl.value)) { 
while(counterElements < passwordContainer.childElementCount) { // Decidi usar childElementCount ao invés de um número para que eu possa adicionar outras divs dentre de passwordContainer sem precisar mudar essa parte do código todas as vezes 

    while(counterDigits < inputEl.value) { // Irá adiconar novos digitos a senha até atinger o valor determinado pelo usuário no input
        
        let random = Math.floor(Math.random() * characters.length)
        password += characters[random]
        counterDigits++   
    }
    pass.push(password) 
    counterElements++
    password = ""
    counterDigits = 0    // serve para atualizar o valor para 0 para ser reautilizado na proxima vez que o "Generate passwords" for clicado
}

 counterElements = 0 // serve para atualizar o valor para 0 para ser reautilizado na proxima vez que o "Generate passwords" for clicado
 }
}

generatePassword.addEventListener("click",() => { // irá colocar a cada senha em uma div diferente
    generatePasswords() 
    for(let i = 0; i < pass.length;i++) {
        for (let j = 0; j < passwordDiv.length; j++) { 
           passwordDiv[j].textContent = pass[j]
    }}
    pass = [] // "limpando" o array para possuir apenas as senhas atuais
     
})

function checkValue(value) { // Essa função irá checar se o valor digitado pelo usuário é válido ou não
    if(value >= 5 && value <= 25) {
        return true
    }
    else if(value < 5) {
        inputDivEl.setAttribute("data-content","Passoword should have more than 4 digits") // Mudando a frase do content de inputDivEl::before para alertar o usuário
        return false
    }
    else if(isNaN(value)) { 
        inputDivEl.setAttribute("data-content","Digit is not valid")
        redBorders()
         return false
    }
    else {
          inputDivEl.setAttribute("data-content","Passoword should have less than 26 digits")
          redBorders()
          return false
    }
}
inputDivEl.addEventListener("click",normalize) 

function redBorders() {
     inputEl.style.cssText = "border: red 2px solid" // Irá adiconar bordas vermelhas ao input para indicar onde está o erro
}
function normalize() { // Irá remover os atributos anteriormente adicionados ao css , o intuito aqui é que a frase de erro não continue aparecendo ao usuário depois que ele digitar um novo digito
    inputDivEl.setAttribute("data-content","")
     inputEl.style.cssText = "border: none"
}