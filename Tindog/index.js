import {dogsArr} from "./data.js"
import {liked,swiped,endProfiles} from "./utils.js"
//let dogsProfiles = dogsArr[0]

let dogsProfiles = dogsArr
//let getMinAge = JSON.parse(localStorage.getItem("ageMin"))
localStorage.setItem("isFirstTime",true)
/*if(localStorage.getItem("isFirstTime") == true) {
    console.log("Oi")
    localStorage.setItem("doggos",JSON.stringify(dogsProfiles[0]))
    localStorage.setItem("isFirstTime",false)
    
}*/

//localStorage.setItem("doggos",JSON.stringify(dogsProfiles[0]))
//localStorage.clear()
console.log(dogsProfiles)
setTimeout(() => {
    dogsProfiles = dogsArr
    console.log(dogsArr)
 /*  localStorage.setItem("ageMin",28)
    localStorage.setItem("ageMax",55)
    localStorage.setItem("distanceMin",0)
    localStorage.setItem("distanceMax",15)*/
   localStorage.setItem("doggos",JSON.stringify(dogsProfiles))
   localStorage.setItem("doggos",JSON.stringify(dogsProfiles.filter(check)))
},1000)


//localStorage.setItem("doggos",JSON.stringify(dogsProfiles))
let doggos = JSON.parse(localStorage.getItem("doggos"))



document.querySelector(".settings-icon").addEventListener("click",() => {
    console.log("OI")
    renderSettings()
})
let currentProfile = document.createElement("div")
let rangesHtml = document.createElement("nav")
rangesHtml.className = "settings-nav"
let profilesSection = document.querySelector(".profiles-section")
let profilesHtml = document.querySelector(".profiles")
let i = 0

console.log(dogsProfiles)
doggos.length > 0 ? renderProfile(dogsProfiles): profilesSection.innerHTML = endProfiles()
//let oi = dogsProfiles[0].filter(check)

//localStorage.setItem("length", JSON.stringify(dogsProfiles.length))
let length = window.localStorage.getItem("length")
let btnDisabled = true
//console.log(oi)
document.querySelectorAll(".btns-container button").forEach((button) => button.addEventListener("click",() => {
 //   localStorage.setItem("doggos",JSON.stringify(doggos))
 doggos = JSON.parse(localStorage.getItem("doggos"))
  
  i = 0
  if(btnDisabled == true) {
    
    if(button.className == "like-btn") { 
           // liked(doggos)
            profilesHtml.innerHTML += `<span class="badge-span"><img src="images/badge-like.png"></span>`
    }
     else if(button.className == "pass-btn") {
 
            profilesHtml.innerHTML += `<span class="badge-span"><img src="images/badge-nope.png"></span>`  

    }
    swiped(doggos)
    
   // localStorage.setItem("doggos",JSON.stringify(dogsProfiles.filter(check)))
   
    console.log(doggos)
    btnDisabled = false
    doggos.shift()
    console.log(JSON.parse(localStorage.getItem("doggos")))
    //dogsProfiles.length
    console.log(doggos.length > 1 )
  if(doggos[0] ) {
  
 console.log("OI")
        setTimeout(() => {
            
           console.log(doggos)

           console.log(doggos)
//if(doggos.length > 0) {
            renderProfile(doggos)
//}
          
localStorage.setItem("doggos",JSON.stringify(doggos))
           
            
           
            btnDisabled=true 

        },900)
    
       
}
else {
    setTimeout(() => {
     
        profilesSection.innerHTML = endProfiles()
       // oi.shift()
        //doggos.shift()
       //if(dogsProfiles.length > 1) {
        //dogsProfiles.shift()
      /*  console.log(dogsProfiles)
        console.log(dogsProfiles[1])
        console.log(doggos[0])
       /* if(JSON.parse(localStorage.getItem("doggos")).length === 1) {
            doggos.shift()
            profilesSection.innerHTML = endProfiles()
           
           }
           localStorage.setItem("doggos",JSON.stringify(doggos))
           console.log(doggos)*/
          // localStorage.setItem("doggos",JSON.stringify(doggos))
      //  localStorage.setItem("doggos",JSON.stringify(dogsProfiles[0].filter(check)))
      /*  if(doggos.length == 1) {
            doggos.shift()
         
        }
       /*localStorage.setItem("doggos",JSON.stringify(dogsProfiles))
        
        localStorage.setItem("doggos",JSON.stringify(dogsProfiles[0].filter(check)))*/
     //  }
        /**/
        
        
     //   }
       
    },1000)

  }}
}))



function check(obj) {
    console.log(localStorage.getItem("ageMin"))
// console.log(JSON.parse(localStorage.getItem("minAge")))
    if(obj.age >= localStorage.getItem("ageMin") && obj.age <= localStorage.getItem("ageMax")){
        
        if(obj.distance/1000 >= localStorage.getItem("distanceMin") && obj.distance/1000 <= localStorage.getItem("distanceMax")) {
        return true
        }
 }
   
}
function getCurrentImg(profile) {
    document.querySelectorAll(".dot").forEach(link => link.classList.remove('white'));
   document.querySelector(".current-img").src = profile[0].avatar[i]
   parent[i].classList.add("white")

}

function renderProfile(profile) {
   
    const {avatar,name,bio,age,distance} = profile[0]
let checkDistance = distance >= 1000 ? `${distance / 1000}km away` : `${distance} metres away`
  let imgsDots = ""
    avatar.map((dot,index) => {
        if(index == 0) {
            imgsDots += `<button class="dot white" ></button>`
        }
        else {
            imgsDots += `<button class="dot"></button>`
        }
    })

    currentProfile.innerHTML = `
    ${avatar.length > 1? `<span class="dots-container">${imgsDots}</span>`:""}
    <img class="current-img" src=${avatar[0]}></img>
    <div class="user-information-container">
        <h1>${name}, ${age}</h1>
        <p>${bio}</p>
        <span class="user-location"><img id=location-icon src=images/icons8-location-50.png>${checkDistance}</span>
    </div>`
     
    profilesHtml.append(currentProfile)

    return profilesHtml.innerHTML = currentProfile.innerHTML
}

let parent;
let parent2;
document.querySelector("body").addEventListener("click",(e) => {
    if(document.querySelector(".dots-container")) {
    parent =  Array.from(document.querySelector(".dots-container").children) 
    }
   
if(e.target.className == "dot") { 
    i = parent.indexOf(e.target)
    console.log(doggos[0])
    getCurrentImg(doggos)
   
 
}
if(e.target.className == "current-img") {   
    let imgWidth = e.target.width
    if(e.clientX < (imgWidth + 50) / 2 ){
        if(i !== 0) {
            i--
        }
    }
    else {
        if(i < parent.length -1) {
            i++
        }
    }
    getCurrentImg(doggos)
}
if(e.target.className == "save-settings-btn") {
    console.log("OI")
    let ageMinValue = document.querySelector("#age-min")
    let ageMaxValue = document.querySelector("#age-max")
    let distanceMinValue = document.querySelector("#distance-min")
    let distanceMaxValue = document.querySelector("#distance-max")
console.log(ageMinValue.value)

    localStorage.setItem("ageMin",ageMinValue.value)
    localStorage.setItem("ageMax",ageMaxValue.value)
    localStorage.setItem("distanceMin",distanceMinValue.value)
    localStorage.setItem("distanceMax",distanceMaxValue.value)


 

  // renderProfile(doggos[0].filter(check))
  dogsProfiles = dogsArr
  localStorage.setItem("doggos",JSON.stringify(dogsProfiles.filter(check)))
  console.log(dogsProfiles.filter(check))
  dogsProfiles.filter(check) ? renderProfile(dogsProfiles.filter(check)): profilesSection.innerHTML = notFoundMessage()
 

}
})

document.querySelector("body").addEventListener("input",(e) => {
    renderRangeValues(e)
})
document.querySelector("body").addEventListener("touchdown",(e) => {
    renderRangeValues(e)
})


let min = ""
function renderRangeValues(e) {
   parent2 =  Array.from(e.target.parentElement.children) 

    if(e.target == parent2[0]) {
        if(e.target.value > parent2[1].value - 1) {
            e.target.value = parseInt(parent2[1].value) -1
        }
        //document.querySelector(".min-range-value").textContent = e.target.value
        document.querySelector(`.${e.target.parentElement.parentElement.className} .min-range-value`).textContent = e.target.value
       
    }
    else if(e.target == parent2[1]) {
        console.log(e.target.value)
        if(e.target.value < parseInt(parent2[0].value) + 1) {
       
            e.target.value = parseInt(parent2[0].value) + 1
         
           
           // console.log(Number(parent2[0].value)+1)
        }
       
       //document.querySelectorAll(".max-range-value").forEach(e => e.textContent = "oi")
       // console.log(document.querySelector(".inputs2"))
       document.querySelector(`.${e.target.parentElement.parentElement.className} .max-range-value`).textContent = e.target.value
    }
}


function renderSettings() {
   console.log(localStorage.getItem("ageMin"))
    rangesHtml.innerHTML = `

      <li> 
        <div class="range-container">
            <fieldset class="field5">
                <legend>Distance</legend>
                <div class="minmax-distance"><span class="min-range-value">${localStorage.getItem("distanceMin")}</span> - <span class="max-range-value">${localStorage.getItem("distanceMax")}</span> km</div>
                <div class="inputs">
                    <input type="range" min=0 max=15 value=${localStorage.getItem("distanceMin")} id=distance-min >
                    <input type="range" min=0 max=15 value=${localStorage.getItem("ageMax")} id=distance-max >
                </div>
            </fieldset>
            </li>
            <li>
            <fieldset class="field">
            <legend>Age</legend>
                <div class="minmax-distance"><span class="min-range-value">${localStorage.getItem("ageMin")}</span> - <span class="max-range-value">${localStorage.getItem("ageMax")}</span></div>
                <div class="inputs2">
                    <input type="range" min=18 max=100 value=${JSON.parse(localStorage.getItem("ageMin"))} id=age-min >
                    <input type="range" min=18 max=100 value=${JSON.parse(localStorage.getItem("ageMax"))} id=age-max >
                </div>
        </fieldset>
        </div>
        </li>
        <button class="save-settings-btn">Save</button>
    

   
    `
    profilesSection.append(rangesHtml)
    return rangesHtml.innerHTML
}

function notFoundMessage() {
    let endText = ""
    endText = `
    <div class="end-message-container">
    <svg class="heart" viewBox="0 0 32 29.6">
    <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
      c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
    </svg> 
        <p class="endMessage">We couldn't find anyome</p>
    </div>
    `
    return endText
}


