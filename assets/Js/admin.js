const form3=document.querySelector("form");
const inputFirstName=document.querySelector("#inputFirstName");
const inputPassword=document.querySelector("#inputPassword");
const submitBtn=document.querySelector("#submitBtn");

const admin_url="http://localhost:8000/users";

form3.addEventListener("submit",async function(e){
e.preventDefault();
const res=await axios(admin_url)
const data=await res.data
console.log(data);
if(data.find((item)=>item.name == inputFirstName.value && item.password == inputPassword.value)){
    window.location="admin-dashboard.html";
}else{
    alert("Such user is not exists")
}
})







// let form = document.querySelector("#form");
// let userName = document.querySelector("#username");
// let password = document.querySelector("#password");
// const  admin_url= "http://localhost:8000/admin";


// form.addEventListener("submit",function(e){
//   e.preventDefault();
//   if(userName.value==`Zeynalli` && password.value == `vilayat0111`){
//     window.location=`../admin-dashboard.html`
//   }else{
//     alert("Qaqa get sora gel");
//   }
// })