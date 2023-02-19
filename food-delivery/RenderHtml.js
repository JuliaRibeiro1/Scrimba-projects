//import {increment,decrement} from "./utils.js"
import { menuArray } from "./data.js"
import { returnMenu} from "./utils.js"
let i = -1
let result = ""
let finishReview = ""
 export class RenderHtml {
    constructor(data) {
        Object.assign(this, data)
        
        this.data = data
       // this.element = function() {returnMenu(data)}
    }
    renderT = function(data) {
      //      return data[0]
       
    }
    renderTest = function(data) {
            return data[i]
        
      
   // 
    
 }
    renderMenuHtml = function(data) {
       
        //console.log(result)
        while(i < 1) {
            i++
            
          const { name, ingredients, id, price, image,quantity } = this.renderTest(data)
             result +=
                `<div class="item-container" id="${id}">
            <img src=${image}>
                <div class="item">
                    <h1 class="item-name">${name}</h1>
                    <p class="item-ingredients">${ingredients}</p>
                </div>
                <button class="add-item-btn">+</button>
        </div> `
        
        }   
            
      //  })
    //  console.log(result)
         return result
         
  //  }
        
}
        

        renderNoteContainer = function() {
            return (
                `
                <aside class="note-container">
                <h1>Notes</h1>
                <textarea class="note" placeholder="No onions or garlic."></textarea>
                <div class="finish-option-container">
                    <div class="quantity-container">
                        <button class="sub-btn">-</button>
                        <span class="quantity">1</span>
                        <button class="sum-btn">+</button>
                    </div>
                    <button class="add-option-btn red-btn">Add <span class="total-option-price"></span></button>
                </div>
            </aside>
                `
            )
        }
        renderOp = function(price) {
            return price * this.quantity
            
        }
        
        increment = function(element) {
            return element.quantity = element.quantity + 1
           
        }
        decrement = function(element) {
            return element.quantity = element.quantity - 1
        }
       /* this.addOption = function(element) {
            return 
        }*/
         
        renderOption = function(data,event) {
            let selectedEl;
            data.forEach(option => {
                
                option.options.map(i => {

                    if(event.parentElement.parentElement.id == i.optionId) {
                        selectedEl =  i
                   }
                    
                })
            });
            return selectedEl
             
        }
        renderPrice = function(element) {
            return element.optionPrice
        }
            
        
        finishOrder = function(item) {
             const { optionId,optionName,optionPrice,optionsDescription,quantity } = item
             
            finishReview += `
                <div class="order-container">
                    <div class="order">
                        <h1 class="order-name">${optionName}<span class="total-quantity"> x ${quantity}</span></h1>
                        <p>${optionsDescription}</p>
                    </div>
                 </div>
             `
            return finishReview
        }
        
        
    refreshPrice = function(element) {
        let price = this.renderPrice(element)
        return price * element.quantity

    }     
        
    renderOptions = function(item) {

    let result = ""

    item.options.forEach(function(element)  {
        const { optionId,optionName,optionPrice,optionsDescription,quantity } = element
       
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
    
     
   
    
    })
    return result
}
 }