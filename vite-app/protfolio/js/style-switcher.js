
let styleSwitcherToggler = document.querySelector(".style-switcher-toggler")
styleSwitcherToggler.addEventListener("click", () => {
   document.querySelector(".style-switcher").classList.toggle("open");
})

// if scroll remove open 
window.addEventListener("scroll", ()=>{
if(document.querySelector(".style-switcher").classList.contains("open")){
    document.querySelector(".style-switcher").classList.remove("open");
}
})

let alternateStyle = document.querySelectorAll(".alternate-style");

function setActiveStyle(color){
   alternateStyle.forEach((style)=>{
    if(color == style.getAttribute("title")){
        style.removeAttribute("disabled")
    }else{
        style.setAttribute("disabled","true")
    }
   })
}
// start day and night
let dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click",()=>{
    dayNight.querySelector("i").classList.toggle("fa-moon-o");
    dayNight.querySelector("i").classList.toggle("fa-sun-o");
    document.body.classList.toggle("light")
})
window.addEventListener("load",()=>{
    if(document.body.classList.contains("light")){
        dayNight.querySelector("i").classList.add("fa-moon-o")
    }else{
        dayNight.querySelector("i").classList.add("fa-sun-o")
    }
})