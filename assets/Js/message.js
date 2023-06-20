const base_url="http://localhost:8000/message";
const row=document.querySelector(".cards");



async function getAllData(){
    let res=await axios(`${base_url}`);
    let data=await res.data;
    data.innerHTML="";
    data.forEach(element => {
        row.innerHTML+=`
        <div class="card">
            <div class="box">
                <h3>${element.name}</h3>
                <h5>${element.email}</h5>
                <p>${element.message}</p><br>
                <a href="#" class="btn btn-primary" onclick=deleteBtn(${element.id})>Delete</a>
            </div>
        </div>`
    });
}
getAllData();

//delete
async function deleteBtn(userId){
    axios.delete(`${base_url}/${userId}`);
};
getAllData();


//menu iconu
let menuIcon = document.querySelector("#menu");
let navMobile = document.querySelector(".nav-mobile");

menuIcon.addEventListener("click", function () {
  navMobile.classList.toggle("show");

  this.classList.contains("fa-bars")
    ? (this.classList = "fa-solid fa-xmark")
    : (this.classList = "fa-solid fa-bars");
});