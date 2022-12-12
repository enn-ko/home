let calcArray1 = ['7','8','9','DEL','4','5','6','+','1','2','3','-','.','0','/','x']
let calcArray2 = ['RESET','=']
let operator = ["+","-","x",".","/"];

let numArray = document.querySelector('.numArray1')

let html = '';
let i = 0;


calcArray1.forEach((el,i)=>{
    
    html += `
    <div class="calcArr1 col-3 text-center">
        <div class="key p-2 mb-3 rounded" id="${i}" onclick="showDisplay(${el})">${el}</div>
    </div>
    `;
    numArray.innerHTML = html;
});

calcArray2.forEach((el) => {
    let html = '';
    html += `
    <div class="calcArr2 col-6 text-center">
        <div class="key p-2 mb-3 rounded" id="${el}" onclick="${el}">${el}</div>
    </div>
    `;
    numArray.innerHTML += html;
});

//changeColor
document.getElementById("3").classList.add("calcArr")
document.getElementById("RESET").classList.add("calcArr")

let result = document.querySelector(".result")

function showDisplay(el){
    let current = result.innerHTML;
    let lastIndex = current[current.]
}