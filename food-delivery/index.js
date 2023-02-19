
import { menuArray } from "./data.js"
import { returnMenu } from "./utils.js"
import { RenderHtml } from "./RenderHtml.js"

//let menuRenderFunction = new RenderHtml(menuArray)
let menuRenderFunction = new RenderHtml(menuArray)
  
document.querySelector(".menu").innerHTML += menuRenderFunction.renderMenuHtml(menuArray)
/*document.querySelector(".menu").innerHTML += menuRenderFunction.renderMenuHtml(menuArray)*/
//console.log(menuRenderFunction.renderTest(menuArray))
document.querySelectorAll(".add-item-btn").forEach(btn => btn.addEventListener("click", (e) => {
    
    let id = e.target.parentElement.id

    menuArray.forEach(option => {

        if(id == option.id) {
            document.querySelector(".options").innerHTML = menuRenderFunction.renderOptions(option)
            document.querySelector(".options-section").style.display = "inline"
            document.querySelector(".options").innerHTML +=  menuRenderFunction.renderNoteContainer()

        }
    })
}))

document.querySelector(".close-options-btn").addEventListener("click",(closeOptionSection)) 

function closeOptionSection() {
    document.querySelector(".options-section").style.display = "none" 
}

console.log(menuRenderFunction.renderT(menuArray))
let element;
let selectedRadio;
let optionOriginalPrice
let quantity;

let quantityHtml;

let optionRefreshPrice
let totalPrice = 0
document.querySelector("body").addEventListener("click",(e) => {
    
    element = e.target
    quantityHtml = document.querySelector(".quantity")
    
    
    let optionRefreshPrice;
            if(element.className == "add-item-btn"){
                quantityHtml.textContent = 0
                console.log("OI")
            }
            if(element.className == "option-radio") {
             selectedRadio = e.target
             quantityHtml.textContent = 1
            
             document.querySelector(".total-option-price").textContent = refreshPrice()

            }
           
           
            else if(element.className == "sum-btn") {
                
                quantityHtml.textContent = menuRenderFunction.increment(menuRenderFunction.renderOption(menuArray,selectedRadio))

               document.querySelector(".total-option-price").textContent =  refreshPrice()//optionRefreshPrice
               
                 
             }
             else if(element.className == "sub-btn") {
                
                
                if(quantityHtml.textContent > 0) {
                    quantityHtml.textContent = menuRenderFunction.decrement(menuRenderFunction.renderOption(menuArray,selectedRadio))
                document.querySelector(".total-option-price").textContent = refreshPrice()
                }

             }
             else if(element.className == "add-option-btn red-btn") {
                closeOptionSection()
                
                totalPrice = Number(totalPrice +  (menuRenderFunction.renderPrice(menuRenderFunction.renderOption(menuArray,selectedRadio))* quantityHtml.textContent))
                console.log(typeof(totalPrice))
                document.querySelector(".finish-order-btn").textContent = totalPrice 
                document.querySelector(".finish-order-container").innerHTML += menuRenderFunction.finishOrder(menuRenderFunction.renderOption(menuArray,selectedRadio))
             }
             else if(element.className == "finish-order-btn red-btn") {
                document.querySelector(".finish-order-container").style.display = "inline"
                
             }
    
})
function refreshPrice() {
    return menuRenderFunction.renderPrice(menuRenderFunction.renderOption(menuArray,selectedRadio)) * quantityHtml.textContent
}
