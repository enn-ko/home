import './style.scss'

let searchBtn = document.getElementById("search-btn");
let result = document.querySelector(".result");
let details = document.querySelector(".details");
let detailsClo = document.getElementById("details-close")
searchBtn.addEventListener("click",getMealList)

//getMealList 

 function getMealList(){
    let searchInputText = document.getElementById("search-input").value.trim();
   
}