//menu iconu
let menuIcon = document.querySelector("#menu");
let navMobile = document.querySelector(".nav-mobile");

menuIcon.addEventListener("click", function () {
  navMobile.classList.toggle("show");

  this.classList.contains("fa-bars")
    ? (this.classList = "fa-solid fa-xmark")
    : (this.classList = "fa-solid fa-bars");
});

let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


//////////////////////////////////////////////////////////

const form=document.querySelector("form");
const inputName=document.querySelector("#inputName");
const email=document.querySelector("#inputEmail");
const message=document.querySelector("#area");

const base_url="http://localhost:8000/message";

form.addEventListener("submit", async function(e){
  e.preventDefault();
  let obj={
  name:inputName.value,
  email:email.value,
  message:message.value
  }
   await axios.post(`${base_url}`,obj)
 })