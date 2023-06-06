// const FAV_URL="http://localhost:8000/favorites";
// const row=document.querySelector(".apartment");
// let id=new URLSearchParams(window.location.search).get("id")

// async function getAllData(){
//     let res=await axios(`${FAV_URL}`);
//     let data=await res.data;
//     row.innerHTML="";
//     data.forEach(element => {
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
//       </div>`
//     });
// }
// getAllData();