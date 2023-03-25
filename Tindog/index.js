"use strict"

import {dogsArr} from "./data.js"
import {liked,swiped,renderProfile,endProfiles,notFound,updateSettingsDisplay,renderSettings,ageConditions,distanceConditions,removeFadeAnimation,setCurrentSettings,updateLocalStorageArr} from "./utils.js"
export {profilesHtml,rangesHtml}

const get = element => document.querySelector(element)
const getAll = element => document.querySelectorAll(element)
let rangesHtml = document.createElement("nav")
rangesHtml.className = "settings-nav"
let profilesHtml = get(".profiles")
let currentImgIndex = 0
let btnDisabled = true
let eventsFired = localStorage.getItem('fired');
let dogsProfiles = dogsArr


 function load() {

  if (eventsFired != '1'){
    resetLocalStorage();
    localStorage.setItem('fired', '1');
  }
  else if(eventsFired == 1 && JSON.parse(localStorage.getItem("doggos")).length == 0) {
    location.reload()
    resetLocalStorage()
  }
}

let filter = JSON.parse(localStorage.getItem("dogsArr")).filter(filterProfilesConditions)
if(!(JSON.parse(localStorage.getItem("dogsArr"))).find(e => e.hasBeenSwiped == false)) {
    load()
}
else {
    setTimeout(() => {
        load()
    },6000)
}
function resetLocalStorage() {
    dogsProfiles = dogsArr
    localStorage.setItem("ageMin",18)
    localStorage.setItem("ageMax",100)
    localStorage.setItem("distanceMin",0)
    localStorage.setItem("distanceMax",15)
    localStorage.setItem("doggos",JSON.stringify(dogsArr.filter(filterProfilesConditions)))
    localStorage.setItem("dogsArr",JSON.stringify(dogsArr))
}

get(".settings-icon").addEventListener("click",() => {
   updateSettingsDisplay()
})
let i = 0
JSON.parse(localStorage.getItem(("doggos"))).length > 0 ? renderProfile(JSON.parse(localStorage.getItem(("doggos")))): profilesHtml.innerHTML = endProfiles()

function retu(filter) {
    let total = ""
    filter.map(item => {
        i++
        total += `<div class=div-${i}>
        <img class="img-${i}" src=${item.avatar[0]}></img>
        <div class="user">
            <h1>${item.name}, ${item.age}</h1>
            <p>${item.bio}</p>
            <span class="user-location"><img id=location-icon src=images/icons8-location-50.png></span>
        </div>
        </div>`
    })
    get(".next-profiles").innerHTML = total
    profilesHtml.innerHTML = get(".next-profiles").innerHTML 
}

retu(JSON.parse(localStorage.getItem(("doggos"))))
function addBadge(button,currentProfile) {
    if(button.className == "like-btn") { 
        liked(currentProfile)
        profilesHtml.innerHTML += `<span class="badge-span"><img src="images/badge-like.png"></span>`
        profilesHtml.classList.add("active-fade-right")
        removeFadeAnimation("right")
    }

     else if(button.className == "pass-btn") {
        profilesHtml.innerHTML += `<span class="badge-span"><img src="images/badge-nope.png"></span>`  
        get(".profiles").classList.add("active-fade-left")
        removeFadeAnimation("left")
    }
}

getAll(".btns-container button").forEach((button) => button.addEventListener("click",() => {
    filter = JSON.parse(localStorage.getItem(("doggos")))
   let currentProfile =  dogsProfiles.find(e => e.id == filter[0].id);
  
  currentImgIndex = 0
  if(btnDisabled == true) {
    addBadge(button,currentProfile)
    btnDisabled = false
    swiped(currentProfile)

if(filter.length > 1) {
    setTimeout(() => {
        btnDisabled=true
        filter.shift()
        renderProfile(filter)
        updateLocalStorageArr(filter,dogsProfiles)
       
    },500)
}
else {
    filter.shift()
    setTimeout(() => {
        profilesHtml.innerHTML = endProfiles()
        btnDisabled = true
        updateLocalStorageArr(filter,dogsProfiles)
        
    },500)
}}
}))

function filterProfilesConditions(obj) {
    if(ageConditions(obj)){
        if(distanceConditions(obj)) {
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
        }}
    else {
        if(currentImgIndex < parent.length -1) {
            currentImgIndex++
        }
    }
    getCurrentImg(filter)
}

if(e.target.className == "save-settings-btn") {
  setCurrentSettings()
  filter = JSON.parse(localStorage.getItem("dogsArr")).filter(filterProfilesConditions)
  filter.length > 0? renderProfile(filter):profilesHtml.innerHTML = notFound()
  updateLocalStorageArr(filter,dogsProfiles)
}
})

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