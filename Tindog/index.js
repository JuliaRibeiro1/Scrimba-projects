"use strict"

import {dogsArr} from "./data.js"
import {liked,swiped,renderProfile,endProfiles,notFound,renderSettings} from "./utils.js"
export{rangesHtml,profilesSection,profilesHtml}

var eventsFired = localStorage.getItem('fired');
const get = element => document.querySelector(element)
const getAll = element => document.querySelectorAll(element)
let dogsProfiles = dogsArr

//let availableProfilesArr = JSON.parse(localStorage.getItem("doggos"))


//localStorage.setItem("fired",)



 function load() {
    
  if (eventsFired != '1'){
      resetLocalStorage();
      localStorage.setItem('fired', '1');
  }
  else if(eventsFired == 1) {
    //alert(availableProfilesArr)
    setTimeout(() => {
    
       /* console.log("vo")
        resetLocalStorage()*/
      /* dogsProfiles = dogsArr
   
        localStorage.setItem("ageMin",18)
       // alert(localStorage.getItem("ageMin"))
        
        localStorage.setItem("ageMax",100)
        localStorage.setItem("distanceMin",0)
        localStorage.setItem("distanceMax",15)
        
        localStorage.setItem("doggos",JSON.stringify(dogsProfiles.filter(check)))
        localStorage.setItem("dogsArr",JSON.stringify(dogsProfiles))
       
        alert(filter)*/
        resetLocalStorage()
  
     
      
   },600000)
  }
}
//JSON.parse(localStorage.getItem("dogsArr"))
let filter = JSON.parse(localStorage.getItem("dogsArr")).filter(check)
load()
//localStorage.setItem("doggos",JSON.stringify(dogsProfiles[0]))
//localStorage.clear()
//localStorage.setItem("doggos",JSON.stringify(dogsProfiles))
    function resetLocalStorage() {
        dogsProfiles = dogsArr
       
        localStorage.setItem("ageMin",18)
        localStorage.setItem("ageMax",100)
        localStorage.setItem("distanceMin",0)
        localStorage.setItem("distanceMax",15)
        localStorage.setItem("doggos",JSON.stringify(dogsProfiles.filter(check)))
        localStorage.setItem("dogsArr",JSON.stringify(dogsProfiles))
    }
  //  }
  // localStorage.setItem("doggos",JSON.stringify(dogsProfiles.filter(check)))
//},6000)
//}
//localStorage.setItem("dogsArr",JSON.stringify(dogsProfiles))

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
})

let rangesHtml = document.createElement("nav")
rangesHtml.className = "nav-settings-container"
rangesHtml.className = "settings-nav"
let profilesSection = get(".profiles-section")
let profilesHtml = get(".profiles")
let currentImgIndex = 0

filter.length > 0 ? renderProfile(JSON.parse(localStorage.getItem("dogsArr")).filter(check)): profilesHtml.innerHTML = endProfiles()
let btnDisabled = true


function addBadge(button,currentProfile) {
    if(button.className == "like-btn") { 
        liked(currentProfile)
        profilesHtml.innerHTML += `<span class="badge-span"><img src="images/badge-like.png"></span>`
        get(".profiles").classList.add("active-fade-right")
        setTimeout(()=> {
        get(".profiles").classList.remove("active-fade-right")
        },500)
 
    }
     else if(button.className == "pass-btn") {
        profilesHtml.innerHTML += `<span class="badge-span"><img src="images/badge-nope.png"></span>`  
        get(".profiles").classList.add("active-fade-left")
        setTimeout(()=> { 
        get(".profiles").classList.remove("active-fade-left")  
        },500)
    }
}
//et currentProfile =  dogsProfiles.find(e => e.id == filter[0].id);
getAll(".btns-container button").forEach((button) => button.addEventListener("click",() => {
    let currentProfile =  dogsProfiles.find(e => e.id == filter[0].id);
 //getDoggos = JSON.parse(localStorage.getItem("dogsArr"))
  currentImgIndex = 0
  if(btnDisabled == true) {
    addBadge(button,currentProfile)
    btnDisabled = false
    swiped(currentProfile)
    console.log(dogsProfiles)
   
if(filter.length > 1) {
    setTimeout(() => {
        btnDisabled=true
        filter.shift()
        renderProfile(filter)
    },500)
}
else {
    filter.shift()
    setTimeout(() => {
        profilesHtml.innerHTML = endProfiles()
        btnDisabled = true
       
    },500)
}
        
localStorage.setItem("doggos",JSON.stringify(filter))          
localStorage.setItem("dogsArr",JSON.stringify(dogsProfiles))
//console.log(dogsProfiles)
}
}))

function check(obj) {
    if(obj.age >= localStorage.getItem("ageMin") && obj.age <= localStorage.getItem("ageMax")){
        if(obj.distance/1000 >= localStorage.getItem("distanceMin") && obj.distance/1000 <= localStorage.getItem("distanceMax")) {
            if(!obj.hasBeenSwiped) {
                return true
            }
        }
 }}

let parent;
let parent2;
get("body").addEventListener("click",(e) => {
    if(get(".dots-container")) {
    parent =  Array.from(get(".dots-container").children) 
    }
   
if(e.target.className == "dot") { 
    currentImgIndex  = parent.indexOf(e.target)
    getCurrentImg(filter) 
 
}
if(e.target.className == "current-img") {   
    if(e.pageX < (window.screen.availWidth / 2) ){
        if(currentImgIndex !== 0) {
            currentImgIndex--
        }
    }
    else {
        if(currentImgIndex < parent.length -1) {
            
            currentImgIndex++
        }
    }
    getCurrentImg(filter)
}
if(e.target.className == "save-settings-btn") {
    setCurrentSettings()
 
  filter = JSON.parse(localStorage.getItem("dogsArr")).filter(check)
  console.log(filter)
  filter.length > 0? renderProfile(filter):profilesHtml.innerHTML = notFound()
  console.log(filter)
  localStorage.setItem("doggos",JSON.stringify(filter))   
  localStorage.setItem("dogsArr",JSON.stringify(dogsProfiles))
  //console.log( availableProfilesArr.length > 0)
}
})
function setCurrentSettings() {
    localStorage.setItem("ageMin", get("#age-min").value)
    localStorage.setItem("ageMax",get("#age-max").value)
    localStorage.setItem("distanceMin",get("#distance-min").value)
    localStorage.setItem("distanceMax", get("#distance-max").value)

}
get("body").addEventListener("input",(e) => {
    renderRangeValues(e)
})

function getCurrentImg(profile) {
    getAll(".dot").forEach(link => link.classList.remove('white'));
   get(".current-img").src = profile[0].avatar[currentImgIndex]
   parent[currentImgIndex].classList.add("white")
}
function renderRangeValues(e) {
   parent2 =  Array.from(e.target.parentElement.children) 

    if(e.target == parent2[0]) {
        if(e.target.value > parent2[1].value - 1) {
            e.target.value = parseInt(parent2[1].value)
        }
        get(`.${e.target.parentElement.parentElement.className} .min-range-value`).textContent = e.target.value  
    }
    else if(e.target == parent2[1]) {
        if(e.target.value < parseInt(parent2[0].value) + 1) {
       
            e.target.value = parseInt(parent2[0].value) 
        }
       get(`.${e.target.parentElement.parentElement.className} .max-range-value`).textContent = e.target.value
    }
}
