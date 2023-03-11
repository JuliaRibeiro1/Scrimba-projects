import {dogs} from "./data.js"
let dogsProfiles = dogs
let currentProfile = document.createElement("div")
let profilesSection = document.querySelector(".profiles-section")
let profilesHtml = document.querySelector(".profiles")
let i = 0
renderProfile(dogsProfiles)

let buttons = document.querySelectorAll(".btns-container button")

let click = true
document.querySelectorAll(".btns-container button").forEach((button,index,array) => button.addEventListener("click",(e) => {
  console.log(click)
  
  if(click == true) {
    if(button.className == "like-btn") { 
            liked(dogsProfiles)
            profilesHtml.innerHTML += `<span class="badge-span"><img src="images/badge-like.png"></span>`
    
    }
     else if(button.className == "pass-btn") {
 
            profilesHtml.innerHTML += `<span class="badge-span"><img src="images/badge-nope.png"></span>`   

    }
    click = false
    if(dogsProfiles.length > 1) {
        setTimeout(() => {
            dogsProfiles.shift()
            swiped(dogsProfiles)
            renderProfile(dogsProfiles)
            click=true 
           
        },900)
    
}
else {
    setTimeout(() => {
        profilesSection.innerHTML = endProfiles()
    },1000)

  }}
}))


function getCurrentImg(profile) {
    document.querySelectorAll(".dot").forEach(link => link.classList.remove('white'));
   document.querySelector(".current-img").src = profile[0].avatar[i]

}

function renderProfile(profile) {
    const {avatar,name,bio,age} = profile[0]
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
    ${avatar.length > 1? `<span class="dots-container ">${imgsDots}</span>`:""}
    <img class="current-img" src=${avatar[0]}></img>
    <div class="user-information-container">
    <h1>${name}, ${age}</h1>
    <p>${bio}</p>
    </div>`
     
    profilesHtml.append(currentProfile)

    return profilesHtml.innerHTML = currentProfile.innerHTML
  
}

let parent;
document.querySelector("body").addEventListener("click",(e) => {
    parent =  Array.from(document.querySelector(".dots-container").children) 
if(e.target.className == "dot") {
   
    i = parent.indexOf(e.target)
    getCurrentImg(dogsProfiles)
    e.target.classList.toggle("white")
    
}
if(e.target.className == "current-img") {
    console.log(e.clientY)
    
    let imgWidth = e.target.width
   // console.log(imgWidth)
   console.log(parent.length)
  if(parent.length > i) {
    console.log(i)
    if(e.clientX < (imgWidth + 50) / 2 ){
        i--
        getCurrentImg(dogsProfiles)
        parent[i].classList.add("white")
    }
    else {
        i++
        getCurrentImg(dogsProfiles)
        parent[i].classList.add("white")
    }
    //getCurrentImg(dogsProfiles)*/
}
}
})

function liked(profile) {
    return profile[0].hasBeenLiked = true
}
function swiped(profile) {
    return profile[0].hasBeenSwiped = true
}
function endProfiles() {
    let endText = ""
    endText = `
    <div class="end-message-container">
    <svg class="heart" viewBox="0 0 32 29.6">
    <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
      c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
    </svg> 
        <p class="endMessage">Oops, that's it for now, come back later for new more matches!</p>
    </div>
    `
    return endText
}