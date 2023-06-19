const form2=document.querySelector("form");
const inputFirstName=document.querySelector("#inputFirstName");
const inputPassword=document.querySelector("#inputPassword");
const submitBtn=document.querySelector("#submitBtn");

const BASE="http://localhost:8000/users";

form2.addEventListener("submit",async function(e){
e.preventDefault();
const res=await axios(BASE)
const data=await res.data
console.log(data);
if(data.find((item)=>item.name == inputFirstName.value && item.password == inputPassword.value)){
    window.location="index.html";
}else{
    alert("Such user is not exists")
}
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
