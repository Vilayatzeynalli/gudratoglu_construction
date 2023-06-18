const form=document.querySelector("#form");
const inputFirstName=document.querySelector("#inputFirstName");
const inputLastName=document.querySelector("#inputLastName");
const inputEmail=document.querySelector("#inputEmail");
const inputPassword=document.querySelector("#inputPassword");
const submitBtn=document.querySelector("#submitBtn");

const BASE_URL="http://localhost:8000/users";

form.addEventListener("submit", async function(e){
 e.preventDefault();
 let obj={
 name:inputFirstName.value,
 lastname:inputLastName.value,
 email:inputEmail.value,
 password:inputPassword.value
 }
 console.log();
  await axios.post(`${BASE_URL}`,obj)
  window.location="log-in.html";
})


//menu iconu
let menuIcon = document.querySelector("#menu");
let navMobile = document.querySelector(".nav-mobile");

menuIcon.addEventListener("click", function () {
  navMobile.classList.toggle("show");

  this.classList.contains("fa-bars")
    ? (this.classList = "fa-solid fa-xmark")
    : (this.classList = "fa-solid fa-bars");
});