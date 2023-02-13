
import { menuArray } from "./data.js"
let b = ""
function RenderHtml(data) {
    Object.assign(this,data)
    
    this.renderMenu = data.map(function (item) {
            const { name, ingredients, id, price, image } = item
             return (
                `<div class="item-container" id="${id}">
            <img src=${image}>
                <div class="item">
                        
                        <h1 class="item-name">${name}</h1>
                        <p class="item-ingredients">${ingredients}</p>
                </div>
                <button class="add-item-btn">+</button>
        </div> `
             )
        })   
        this.renderNoteContainer = function() {
            return (
                `
                <aside class="note-container">
                <h1>Notes</h1>
                <textarea class="note" placeholder="No onions or garlic."></textarea>
                <div class="finish-option-container">
                    <div class="quantity-container">
                        <button class="sub-btn">-</button>
                        <span class="quantity">0</span>
                        <button class="sum-btn">+</button>
                    </div>
                    <button class="add-option-btn red-btn">Add <span class="total-option-price"></span></button>
                </div>
            </aside>
                `
            )
        }
    this.renderOptions = function(item) {
        let result = ""
    item.options.forEach(function(option)  {
        console.log(option)
        const { optionId,optionName,optionPrice,optionsDescription } = option
       
        result +=
           ` <div class="option" id=${optionId}>
            <div class="option-item" id=option-${optionId}>
                <h1 id=title-${optionId}>${optionName}</h1>
                <p id=description-${optionId}>${optionsDescription}</p>
                <div class="price">$<span id="price-${optionId}">${optionPrice}</span>  
            </div>
        </div>
            <div>
                <input type="radio" class="option-radio" name="radio" >
                <label for="radio"></label>
            </div>
        </div>
    `
    console.log(optionName)
    })
    
    return result
    }
    
}
let menuRenderFunction = new RenderHtml(menuArray)

document.querySelector(".menu").innerHTML = menuRenderFunction.renderMenu


let quantity = 0



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

/*document.querySelector(".close-options-btn").addEventListener("click",(e) => {
    document.querySelector(".options-section").style.display = "none" 
})*/

let element;
let parentEl;
let priceOption;
let radioSelected;
let price = ""
let radioParent;
let addOptionBtn;
let quantityHtml;
let spanPriceOption;

document.querySelector("body").addEventListener("click",(e) => {
    
    element = e.target
    console.log(e.target)
    if(element.className == "option-radio") {
        menuArray.forEach(option => {
            if(element.parentElement.parentElement.id == option.id) {
                RenderHtml.renderOptions(option)
            }
        })
        console.log(element.parentElement.parentElement)
        addOptionBtn = document.querySelector(".add-option-btn")
        radioSelected = e.target
        quantityHtml = document.querySelector(".quantity")
        parentEl = radioSelected.parentElement.parentElement.id
        spanPriceOption = document.querySelector(".total-option-price")
        priceOption = document.getElementById(`price-${parentEl}`)
        addTotalOption()
        radioParent = radioSelected.parentElement.parentElement.id
        
    }
    else if(element.className == ".close-options-btn") {
        closeOptions()
    }
    else if(element.className == "add-option-btn red-btn") {
        console.log("Oi")
       // document.querySelector(".options-container").innerHTML = finishOrder()
        closeOptions()
        document.querySelector(".finish-order-btn").style.cssText = "opacity:1"
        document.querySelector(".finish-order-btn").textContent = addTotalOption()


    }

    else if(element.className == "sum-btn") {
        sumQuantity()
        if(quantity > 0) {
            addTotalOption(priceOption,quantity)
        }
    }
    else if(element.className == "sub-btn") {
        if(quantity > 0) {
            subQuantity()
            addTotalOption(priceOption,quantity)
        }
    }
})
function closeOptions() {
    document.querySelector(".options-section").style.display = "none" 
}
function sumQuantity() {
    quantity++
    quantityHtml.textContent = quantity  
    console.log(quantity) 
}
function subQuantity() {
    quantity--
    quantityHtml.textContent = quantity  
}
function addTotalOption() {
    console.log(priceOption.textContent)
    price += priceOption.textContent
    addOptionBtn.style.cssText = "opacity:1"
    if(quantity == 0) {
        sumQuantity()
        spanPriceOption.textContent = price
    }
    else {
        console.log(quantity)
        spanPriceOption.textContent =  price * quantity
        console.log(spanPriceOption.textContent)
  }
   return price
}
function finishOrder() {
   let finishReview = ""
   let name = document.getElementById(`title-${radioParent}`)
   let description = document.getElementById(`description-${radioParent}`)
   finishReview += `
    <div class="order-container">
        <div class="order">
            <h1 class="order-name">${name.textContent}<span class="total-quantity"> x ${quantity}</span></h1>
            <p>${description.textContent}</p>
        </div>
    </div>
   `
   return finishReview

}
