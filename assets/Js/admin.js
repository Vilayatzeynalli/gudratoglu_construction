const form=document.querySelector("form");
const userName=document.querySelector("#userName");
const password=document.querySelector("#password");

const admin_url="http://localhost:8000/admin";


form.addEventListener("submit",function(e){
  e.preventDefault();
  if(userName.value==`Zeynalli` && password.value == `vilayat0111`){
    window.location=`../admin-dashboard.html`
  }else{
    alert("Go away, this is not you place");
  }
})