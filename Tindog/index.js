"use strict"

import {dogsArr} from "./data.js"
import {liked,swiped,endProfiles,notFound,renderSettings} from "./utils.js"

const get = element => document.querySelector(element)
let dogsProfiles = dogsArr
localStorage.setItem("isFirstTime",true)
export{rangesHtml,profilesSection}

//localStorage.setItem("doggos",JSON.stringify(dogsProfiles[0]))
//localStorage.clear()
let doggos = JSON.parse(localStorage.getItem("doggos"))
if(doggos.length == 0) {
setTimeout(() => {
    dogsProfiles = dogsArr
    localStorage.setItem("ageMin",18)
    localStorage.setItem("ageMax",100)
    localStorage.setItem("distanceMin",0)
    localStorage.setItem("distanceMax",15)
   localStorage.setItem("doggos",JSON.stringify(dogsProfiles))
   localStorage.setItem("doggos",JSON.stringify(dogsProfiles.filter(check)))
},6000)
}

//localStorage.setItem("doggos",JSON.stringify(dogsProfiles))
//let doggos = JSON.parse(localStorage.getItem("doggos"))

let isSettingsOpen = false
get(".settings-icon").addEventListener("click",() => {
   if(!isSettingsOpen) {
    rangesHtml.classList.add("open")
        renderSettings()
        isSettingsOpen = true
   }
   else {
        rangesHtml.classList.remove("open")
        isSettingsOpen = false
    }
}
)
let currentProfile = document.createElement("div")
let rangesHtml = document.createElement("nav")
rangesHtml.className = "nav-settings-container"
rangesHtml.className = "settings-nav"
let profilesSection = get(".profiles-section")
let profilesHtml = get(".profiles")
let i = 0

doggos.length > 0 ? renderProfile(doggos): profilesHtml.innerHTML = endProfiles()
let btnDisabled = true


document.querySelectorAll(".btns-container button").forEach((button) => button.addEventListener("click",() => {
 //   localStorage.setItem("doggos",JSON.stringify(doggos))
 
 doggos = JSON.parse(localStorage.getItem("doggos"))
  i = 0
  if(btnDisabled == true) {
    
    if(button.className == "like-btn") { 
            liked(doggos)
            profilesHtml.innerHTML += `<span class="badge-span"><img src="images/badge-like.png"></span>`
    }
     else if(button.className == "pass-btn") {
            swiped(doggos)
            profilesHtml.innerHTML += `<span class="badge-span"><img src="images/badge-nope.png"></span>`  
    }
    btnDisabled = false
  
  if(doggos[0]) {
 
        setTimeout(() => {
        btnDisabled=true
if(doggos.length > 1) {
    doggos.shift()
    renderProfile(doggos)
}
else {
    doggos.shift()
    setTimeout(() => {
     
        profilesHtml.innerHTML = endProfiles()
        btnDisabled = true
       
    },1000)
}
        
localStorage.setItem("doggos",JSON.stringify(doggos))          
},900)
}
  }
}))

function check(obj) {
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
    get(".btns-container").classList.add("open")
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
get("body").addEventListener("click",(e) => {
    if(get(".dots-container")) {
    parent =  Array.from(get(".dots-container").children) 
    }
   
if(e.target.className == "dot") { 
    i  = parent.indexOf(e.target)
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

    localStorage.setItem("ageMin", get("#age-min").value)
    localStorage.setItem("ageMax",get("#age-max").value)
    localStorage.setItem("distanceMin",get("#distance-min").value)
    localStorage.setItem("distanceMax", get("#distance-max").value)

  dogsProfiles = dogsArr
  localStorage.setItem("doggos",JSON.stringify(dogsProfiles.filter(check)))
  isSettingsOpen = false
  rangesHtml.classList.add("close")

  dogsProfiles.filter(check).length > 0? renderProfile(dogsProfiles.filter(check)):profilesHtml.innerHTML = notFound()

}
})

get("body").addEventListener("input",(e) => {
    renderRangeValues(e)
})
get("body").addEventListener("touchdown",(e) => {
    renderRangeValues(e)
})

let min = ""
function renderRangeValues(e) {
   parent2 =  Array.from(e.target.parentElement.children) 

    if(e.target == parent2[0]) {
        if(e.target.value > parent2[1].value - 1) {
            e.target.value = parseInt(parent2[1].value) -1
        }
        get(`.${e.target.parentElement.parentElement.className} .min-range-value`).textContent = e.target.value  
    }
    else if(e.target == parent2[1]) {
        if(e.target.value < parseInt(parent2[0].value) + 1) {
       
            e.target.value = parseInt(parent2[0].value) + 1
        }
       get(`.${e.target.parentElement.parentElement.className} .max-range-value`).textContent = e.target.value
    }
}
