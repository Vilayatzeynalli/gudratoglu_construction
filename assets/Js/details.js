// let id=new URLSearchParams(window.location.search).get("id");
// const BASE="http://localhost:8000/apartments";
// const row=document.querySelector(".apartment");

// async function allData(){
//     let res= await axios(`${BASE}/${id}`);
//     let element=await res.data;
//         row.innerHTML+=`
//         <div class="col-12 col-lg-3 mb-4 text-center">
//         <div class="card" style="width: 18rem;">
//             <img src="${element.photo}" class="card-img-top" alt="...">
//             <div class="card-body">
//               <h5 class="card-title">${element.price} AZN</h5>
//               <p class="card-text">${element.address}</p>
//              <p> ${element.grass} grassy,${element.square} Kv.m</p><span>${element.city}</span><br>
//             </div>
//           </div>
//       </div>
// `
//     };
//     allData();
//     // <div class="col-12 col-lg-6">
//     // <div class="card" style="width: 18rem;">
//     //     <img src="${element.photo}" class="card-img-top" alt="...">
//     // </div>
//     //     <div class="col-12 col-lg-6 card-body">
//     //       <h5 class="card-title">${element.price} AZN</h5>
//     //       <p class="card-text"${element.address}</p>
//     //       <p>${element.grass} grassy</p><p>${element.square} Kv.m</p><span>${element.city}</span>
//     //     </div>
//     //     </div>
//     // const back=document.querySelector("#back");

//     // back.addEventListener("click", function(e){
//     //     e.preventDefault();
//     //     window.location.href="./index.html"
//     // })


    
  






//menu iconu
let menuIcon = document.querySelector("#menu");
let navMobile = document.querySelector(".nav-mobile");

menuIcon.addEventListener("click", function () {
  navMobile.classList.toggle("show");

  this.classList.contains("fa-bars")
    ? (this.classList = "fa-solid fa-xmark")
    : (this.classList = "fa-solid fa-bars");
});
