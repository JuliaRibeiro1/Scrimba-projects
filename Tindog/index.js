import {dogs,dogs2} from "./data.js"


console.log(dogs2)
let dogsProfiles = dogs
//localStorage.setItem("doggos",JSON.stringify(dogsProfiles))
let doggos = JSON.parse(localStorage.getItem("doggos"))
let currentProfile = document.createElement("div")
let profilesSection = document.querySelector(".profiles-section")
let profilesHtml = document.querySelector(".profiles")
let i = 0

renderProfile(JSON.parse(localStorage.getItem("doggos")))

//localStorage.setItem("length", JSON.stringify(dogsProfiles.length))
let length = window.localStorage.getItem("length")
let btnDisabled = true
console.log(length)
document.querySelectorAll(".btns-container button").forEach((button) => button.addEventListener("click",() => {
  i = 0
  if(btnDisabled == true) {
    if(button.className == "like-btn") { 
            liked(dogsProfiles)
            profilesHtml.innerHTML += `<span class="badge-span"><img src="images/badge-like.png"></span>`
    }
     else if(button.className == "pass-btn") {
 
            profilesHtml.innerHTML += `<span class="badge-span"><img src="images/badge-nope.png"></span>`   
    }
    btnDisabled = false
    //dogsProfiles.length
  if(doggos.length > 1) {
    console.log(doggos)
        setTimeout(() => {
            //dogsProfiles.shift()
            localStorage.setItem("doggos",JSON.stringify(doggos))
            doggos.shift()
            
        ///   doggos.shift()
            swiped(doggos)
            renderProfile(doggos)
            btnDisabled=true 
           
            
           
        },900)
    
}
else {
    setTimeout(() => {
      //  doggos.shift()
        profilesSection.innerHTML = endProfiles()
        localStorage.setItem("doggos",JSON.stringify(dogs2))
        renderProfile(doggos)

       
    },1000)

  }}
}))

function getCurrentImg(profile) {
    document.querySelectorAll(".dot").forEach(link => link.classList.remove('white'));
   document.querySelector(".current-img").src = profile[0].avatar[i]
   parent[i].classList.add("white")

}

function renderProfile(profile) {
    console.log(profile)
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