import './style.scss';
import Typed from 'typed.js';
import "bootstrap";
import "waypoints/lib/noframework.waypoints.min";
import ScrollReveal from 'scrollreveal';

typed 
var options = {
    strings: ['Food...', 'Drink..'],
    typeSpeed: 40,
    backSpeed:40,
    backDelay: 2000,
    loop:true
  };
  
  var typed = new Typed('.element', options);

  //scroolreveal
  let toDown = {
    distance: '50px',
    origin: 'top',
    interval : 300,
    duration : 800,
};

ScrollReveal().reveal('.to-down', toDown);

let toUp = {
  distance: '50px',
  origin: 'bottom',
  interval : 300,
  duration : 1000,
};



  //navlink add active
 new Waypoint({
    element: document.getElementById('home'),
    handler: function(direction) {
      let oldNavlink = document.querySelector('.nav-link.active')
      if(oldNavlink != null){
        oldNavlink.classList.remove('active')
      }
      let currentNavlink = document.querySelector(`[href="#home"]`)
      currentNavlink.classList.add('active')
    },
    offset: "5%",
  })

  let section = ['about','services','menus']
  section.forEach(function(section){
new Waypoint({
      element: document.getElementById(section),
      handler: function(direction) {
        let oldNavLink = document.querySelector('.nav-link.active')
        oldNavLink.classList.remove('active')
        let currentNavLink = document.querySelector(`[href="#${section}"]`)
        currentNavLink.classList.add('active')
      },
      offset: "5%",
    })
  })

new Waypoint({
    element: document.getElementById('contact'),
    handler: function(direction) {
      let oldNavlink = document.querySelector('.nav-link.active')
      if(oldNavlink != null){
        oldNavlink.classList.remove('active')
      }
      let currentNavlink = document.querySelector(`[href="#contact"]`)
      currentNavlink.classList.add('active')
    },
    offset:"80%",
  })

let menuLists = [
    {
        id:1,
        img: './img/plate1.png',
        title : 'Barbecue Salad',
        description: 'Special Delicious Dish',
        price: 50,
        currency : "$",
    },
    {
        id:2,
        img: './img/plate2.png',
        title: "Barbecue Salad",
        description: "Special Delicious Dish",
        price: 30,
        currency:"$",
    },
    {
        id:3,
        img:"./img/plate3.png",
        title: "Babecue Salad",
        description: "Special Delicious Dish",
        price: 40,
        currency: "$",
    },
    {
      id:4,
      img: './img/plate1.png',
      title : 'Barbecue Salad',
      description: 'Special Delicious Dish',
      price: 50,
      currency : "$",
  },
  {
      id:5,
      img: './img/plate2.png',
      title: "Barbecue Salad",
      description: "Special Delicious Dish",
      price: 30,
      currency:"$",
  },
  {
      id:6,
      img:"./img/plate3.png",
      title: "Babecue Salad",
      description: "Special Delicious Dish",
      price: 40,
      currency: "$",
  },
]

let menuRow = document.getElementById('menurow');

menuLists.forEach(function(menuLists){
    let div = document.createElement("div")
    div.classList.add("col-12","col-md-4","col-lg-3","menus-card","mb-5")
    div.innerHTML = `
    <img src="${menuLists.img} " class="img-top menus-img" alt="">
    <div class="card pt-5 px-3 border-0 shadow text-center">
      <div class="card-title pt-5">
       <h4 class=" mb-0">${menuLists.title}</h4>
      </div>
      <div class="card-body p-0 pb-3 mt-0">
        <p class="text-black-50">${menuLists.description}</p>
        <div class="col-10 d-flex m-auto justify-content-between align-items-center">
          <p class="mb-0">${menuLists.currency}${menuLists.price}</p>
          <i class="bi bi-cart btn-sm btn btn-primary add-cart" data-id="${menuLists.id}></i>
        </div>
      </div>
    </div>
    `;
    menuRow.append(div)
})


window.onload = function(){
  document.getElementById("loading").style.display = "none";
}

//narbar-toggler

let navToggler = document.querySelector(".navbar-toggler");
let menuicons = document.querySelector(".menu-icons");

navToggler.addEventListener("click",function(){
//  let result =  navCollapse.classList.includes("show");
//   console.log(result)
menuicons.classList.toggle("bi-x-lg")
})



