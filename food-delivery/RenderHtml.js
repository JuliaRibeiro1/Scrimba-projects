//import {increment,decrement} from "./utils.js"

export function RenderHtml(data) {
    Object.assign(this,data)

   
    this.renderMenuHtml = function(item) {
        let result = ""
        
           const { name, ingredients, id, price, image,quantity } = item.apply(this)
           // console.log(name)
             result +=
                `<div class="item-container" id="${id}">
            <img src=${image}>
                <div class="item">
                        
                        <h1 class="item-name">${name}</h1>
                        <p class="item-ingredients">${ingredients}</p>
                </div>
                <button class="add-item-btn">+</button>
        </div> `
             
             return result
        }

        this.renderNoteContainer = function() {
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
        this.renderOp = function(price) {
            return price * this.quantity
            
        }
        
        this.increment = function(element) {
            return element.quantity = element.quantity + 1
           
        }
        this.decrement = function(element) {
            return element.quantity = element.quantity - 1
        }
       /* this.addOption = function(element) {
            return 
        }*/
        this.renderMenu = function(data) {
            data.forEach(item => {
                return item
            })
        }
        
        this.renderOption = function(data,event) {
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
        this.renderPrice = function(element) {
            return element.optionPrice
        }
            
        
        this.finishOrder = function(item) {
             const { optionId,optionName,optionPrice,optionsDescription } = item
             let finishReview = ""
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
        
        
    this.refreshPrice = function(element) {
        let price = this.renderPrice(element)
        return price * element.quantity

    }     
        
    this.renderOptions = function(item) {

    let result = ""

    item.options.forEach(function(element)  {
        const { optionId,optionName,optionPrice,optionsDescription } = element
       
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