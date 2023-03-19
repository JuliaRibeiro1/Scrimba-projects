import {dogsArr} from "./data.js"
import {liked,swiped,endProfiles} from "./utils.js"
//let dogsProfiles = dogsArr[0]
localStorage.setItem("ageMin",18)
localStorage.setItem("ageMax",100)
localStorage.setItem("distanceMin",0)
localStorage.setItem("distanceMax",50)
let dogsProfiles = dogsArr
//let getMinAge = JSON.parse(localStorage.getItem("ageMin"))
localStorage.setItem("isFirstTime",true)
/*if(localStorage.getItem("isFirstTime") == true) {
    console.log("Oi")
    localStorage.setItem("doggos",JSON.stringify(dogsProfiles[0]))
    localStorage.setItem("isFirstTime",false)
    
}*/

//localStorage.setItem("doggos",JSON.stringify(dogsProfiles))
//localStorage.clear()
console.log(dogsProfiles)
setTimeout(() => {
    localStorage.setItem("doggos",JSON.stringify(dogsProfiles))
},6000)
let doggos = JSON.parse(localStorage.getItem("doggos"))
localStorage.setItem("doggos",JSON.stringify(doggos[0].filter(check)))
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
console.log(doggos)

doggos.length > 0 ? renderProfile(doggos[0].filter(check)): profilesSection.innerHTML = endProfiles()
let oi = doggos[0].filter(check)
localStorage.setItem("doggos",JSON.stringify(oi))
//localStorage.setItem("length", JSON.stringify(dogsProfiles.length))
let length = window.localStorage.getItem("length")
let btnDisabled = true
console.log(oi)
document.querySelectorAll(".btns-container button").forEach((button) => button.addEventListener("click",() => {
  i = 0
  if(btnDisabled == true) {
    if(button.className == "like-btn") { 
            liked(doggos[0])
            profilesHtml.innerHTML += `<span class="badge-span"><img src="images/badge-like.png"></span>`
    }
     else if(button.className == "pass-btn") {
 
            profilesHtml.innerHTML += `<span class="badge-span"><img src="images/badge-nope.png"></span>`   
    }
    btnDisabled = false
    //dogsProfiles.length
  if(JSON.parse(localStorage.getItem("doggos")).length > 1) {
    console.log("OI")
    console.log(oi)
        setTimeout(() => {
            let b = JSON.parse(localStorage.getItem("doggos"))
           // JSON.parse(localStorage.getItem("doggos")).shift()
           b.shift()
            localStorage.setItem("doggos",JSON.stringify(b))
            swiped(oi)
            renderProfile(b)
            btnDisabled=true 

 
        },900)
    
       
}
else {
    setTimeout(() => {
       
        profilesSection.innerHTML = endProfiles()
       // oi.shift()
        doggos.shift()
      
        localStorage.setItem("doggos",JSON.stringify(doggos))
        console.log(doggos)
    
       
    },1000)

  }}
}))



function check(obj) {
// console.log(JSON.parse(localStorage.getItem("minAge")))
    if(obj.age >= localStorage.getItem("ageMin") && obj.age <= localStorage.getItem("ageMax")){
        return true
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
    parent =  Array.from(document.querySelector(".dots-container").children) 
   
if(e.target.className == "dot") { 
    i = parent.indexOf(e.target)
    getCurrentImg(doggos[0])
 
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
    getCurrentImg(doggos[0])
}
if(e.target.className == "save-settings-btn") {
    let ageMinValue = document.querySelector("#age-min")
    let ageMaxValue = document.querySelector("#age-max")
    let distanceMinValue = document.querySelector("#distance-min")
    let distanceMaxValue = document.querySelector("#distance-max")

    localStorage.setItem("ageMin",ageMinValue.value)
    localStorage.setItem("ageMax",ageMaxValue.value)
    localStorage.setItem("distanceMin",distanceMinValue.value)
    localStorage.setItem("distanceMax",distanceMaxValue.value)

    localStorage.setItem("doggos",JSON.stringify(doggos[0].filter(check)))
    console.log(doggos[0].filter(check).length)
  // renderProfile(doggos[0].filter(check))
    doggos[0].filter(check).length > 0 ? renderProfile(doggos[0].filter(check)): profilesSection.innerHTML = notFoundMessage()


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
        localStorage.setItem("ageMin",e.target.value)
       //document.querySelectorAll(".max-range-value").forEach(e => e.textContent = "oi")
       // console.log(document.querySelector(".inputs2"))
       document.querySelector(`.${e.target.parentElement.parentElement.className} .max-range-value`).textContent = e.target.value
    }
}


function renderSettings() {
   
    rangesHtml.innerHTML = `

      <li> 
        <div class="range-container">
            <fieldset class="field5">
                <legend>Distance</legend>
                <div class="minmax-distance"><span class="min-range-value">0</span> - <span class="max-range-value">25</span> km</div>
                <div class="inputs">
                    <input type="range" min="0" max="50" value="0" id="distance-min" >
                    <input type="range" min="0" max="50" value="25" id="distance-max" >
                </div>
            </fieldset>
            </li>
            <li>
            <fieldset class="field">
            <legend>Age</legend>
                <div class="minmax-distance"><span class="min-range-value">18</span> - <span class="max-range-value" >25</span></div>
                <div class="inputs2">
                    <input type="range" min="18" max="100" value="18" id="age-min" >
                    <input type="range" min="18" max="100" value="25" id="age-max" >
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


