
/*====== Scroll - Show, To Top ======*/
let up = document.getElementById("scroll-up");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    up.style.display = "block";
  } else {
    up.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
/*====== Scroll - Show, To Top Done ======*/

/*====== Nav Hamburger -  ======*/
// Get the nav hamburger selections
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");
// Get the select nav links
const navLink = document.querySelectorAll(".nav-link");

// Hamburger menu function
burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});

// Close hamburger menu when a link is clicked
navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);
/*====== Nav Hamburger Done ======*/

/*====== Project - Filter and Active ======*/
//adds "show to the class name of the elements to be shown"
// Filter each project by subject
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("projects-column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  if (arr1.indexOf(arr2[0]) == -1) {element.className += " " + arr2[0];}
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  if (arr1.indexOf("show") > -1) {
    arr1.splice(arr1.indexOf(arr2[0]), 1);     
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("projects-filter");
var btns = btnContainer.getElementsByClassName("projects-filter-btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
/*====== Project - Filter and Active Done ======*/

/*====== Modal - Open/Close ======*/
function modalDisplay(btnName, modalName) {
  var modal, btn, span;
  // Get the modal
  modal = document.getElementById(modalName);
  // Get the button that opens the modal
  btn = document.getElementById(btnName);
  // Get the <span> element that closes the modal
  var span = document.getElementById(modalName);

  // When the user clicks on the button, open the modal
  btn.onclick = function() {
    modal.style.display = "block";
  }
  btn.click();

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}
/*====== Modal - Open/Close Done ======*/
