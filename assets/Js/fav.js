const FAV_URL="http://localhost:8000/favorites";
const row=document.querySelector(".apartment");
let id=new URLSearchParams(window.location.search).get("id")

async function getAllData(){
    let res=await axios(`${FAV_URL}`);
    let data=await res.data;
    data.innerHTML="";
    data.forEach(element => {
        row.innerHTML+=`
        <div class="col-12 col-lg-3 mb-4 text-center">
        <div class="card" style="width: 18rem;">
            <img src="${element.photo}" class="card-img-top" alt="...">
            <div class="card-body">
              <h4 class="card-title"><strong>${element.price} AZN</strong></h4>
              <h5 class="card-text">${element.address}</h5>
             <p> ${element.grass} grassy,${element.square} Kv.m</p><h5>${element.city}</h5>
             <a href="#" class="btn" onclick=deleteBtn(${element.id})><i class="fa-solid fa-xmark"></i></a>
            </div>
          </div>
      </div>`
    });
}
getAllData();

//delete
async function deleteBtn(userId){
  axios.delete(`${FAV_URL}/${userId}`);
  getAllData();
};

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

