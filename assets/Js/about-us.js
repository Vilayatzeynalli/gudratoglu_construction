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



/////log in button
const logIn=document.querySelector(".login");
logIn.addEventListener("click",function(e){
  e.preventDefault()
  window.location="log-in.html"
})

/////animation
ScrollReveal({ reset: true,
  distance:"60px",
  duration:2500,
  delay:400
});
ScrollReveal().reveal('.our', { delay: 500,origin:'left'});
// ScrollReveal().reveal('.vision', { delay: 500});
ScrollReveal().reveal('.title', { delay: 500,origin:'left'});
ScrollReveal().reveal('.bg-img', { delay: 500,origin:'top'});
ScrollReveal().reveal('.corporation', { delay: 500});
ScrollReveal().reveal('.manag', { delay: 500,origin:'left'});
ScrollReveal().reveal('.end', { delay: 500});

