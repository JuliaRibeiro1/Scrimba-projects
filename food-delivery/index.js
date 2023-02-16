
import { menuArray } from "./data.js"


import { RenderHtml } from "./RenderHtml.js"

//let menuRenderFunction = new RenderHtml(menuArray)
let menuRenderFunction = new RenderHtml(menuArray)
    /*menuArray.forEach(item => {
        document.querySelector(".menu").innerHTML += menuRenderFunction.renderMenu(item)

})*/
document.querySelector(".menu").innerHTML += menuRenderFunction.renderMenuHtml(menuArray)

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

document.querySelector(".close-options-btn").addEventListener("click",(e) => {
    document.querySelector(".options-section").style.display = "none" 
})

let element;
let selectedRadio;
let optionOriginalPrice
let quantity;

let quantityHtml 
let optionRefreshPrice

document.querySelector("body").addEventListener("click",(e) => {
    
    element = e.target
    quantityHtml = document.querySelector(".quantity")
    let optionRefreshPrice;

            if(element.className == "option-radio") {
             selectedRadio = e.target

             optionOriginalPrice = menuRenderFunction.renderPrice(menuRenderFunction.renderOption(menuArray,selectedRadio))
             
             
            
             document.querySelector(".total-option-price").textContent = optionOriginalPrice 

             quantityHtml.textContent = 1
             


            }
           
           
            else if(element.className == "sum-btn") {
                
                quantity = menuRenderFunction.increment(menuRenderFunction.renderOption(menuArray,selectedRadio))

                quantityHtml.textContent = quantity
               
               
                optionRefreshPrice = (menuRenderFunction.refreshPrice(menuRenderFunction.renderOption(menuArray,selectedRadio)))
               console.log(optionRefreshPrice)

               document.querySelector(".total-option-price").textContent =  optionRefreshPrice
               

                 
             }
             else if(element.className == "sub-btn") {
                
                quantity = menuRenderFunction.decrement(menuRenderFunction.renderOption(menuArray,selectedRadio))
                if(quantity > 0) {

                quantityHtml.textContent = quantity

                optionRefreshPrice = (menuRenderFunction.refreshPrice(menuRenderFunction.renderOption(menuArray,selectedRadio)))

                document.querySelector(".total-option-price").textContent = optionRefreshPrice
                }


             }
    
    
})
