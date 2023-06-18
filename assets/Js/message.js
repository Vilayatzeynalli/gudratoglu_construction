const base_url="http://localhost:8000/message";
const row=document.querySelector(".row");


async function getAllData(){
    let res=await axios(`${base_url}`);
    let data=await res.data;
    data.innerHTML="";
    data.forEach(element => {
        row.innerHTML+=`
        <div class="col-12 col-lg-4 flex-nowrap mb-4">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                      <h4 class="card-title">${element.name}</h4>
                      <h6 class="card-title">${element.email}</h6>
                      <p class="card-text">${element.message}</p>
                      <a href="#" class="btn btn-primary" onclick=deleteBtn(${element.id})>Delete</a>
                    </div>
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