let BASE="http://localhost:8000/apartments";
const row=document.querySelector(".apartment");
const inputSearch=document.querySelector("#inputSearch");
const searchInput=document.querySelector("#searchInput");
const sortBtn=document.querySelector("#sortBtn");
const loadMore=document.querySelector("#loadMore");
let searchData=[]
let allData=[]
let maxLength=3


function getAllData(array){
    row.innerHTML="";
    array.forEach(element => {
        row.innerHTML+=`
        <div class="col-12 col-lg-3 mb-4 text-center">
        <div class="card" style="width: 18rem;">
            <img src="${element.photo}" class="card-img-top" alt="...">
            <div class="card-body">
              <h4 class="card-title"><strong>${element.price} AZN</strong></h4>
              <h5 class="card-text">${element.address}</h5>
             <p> ${element.grass} grassy,${element.square} Kv.m</p><h5>${element.city}</h5>
              <a href="#" onclick=addFav(${element.id}) class="btn"><i class="fa-solid fa-star"></i></a>
  
            </div>
          </div>
      </div>`
    });
}
axios(BASE).then((res)=>getAllData(res.data));

loadMore.addEventListener("click",function(){
    maxLength+=3
    if(maxLength >= searchData.length){
        loadMore.style.display=`none`

    }if(searchData.length){
    getAllData(searchData.slice(0,maxLength));
        
    }
   
})

//search
inputSearch.addEventListener("input",function(e){
    axios(BASE).then((res)=>{
        let dataFilter=res.data.filter((item)=>item.address
        .toLocaleLowerCase()
        .includes(e.target.value.toLocaleLowerCase()));
        getAllData(dataFilter);
    });
});
searchInput.addEventListener("input",function(e){
    axios(BASE).then((res)=>{
        let dataFilter=res.data.filter((item)=>item.city
        .toLocaleLowerCase()
        .includes(e.target.value.toLocaleLowerCase()));
        getAllData(dataFilter);
    });
});

//sort
sortBtn.addEventListener("click",function(){
    if(this.innerHTML=="Ascending"){
    axios(BASE).then((res)=>{
    const sortAsc=res.data.sort((a,b)=>a.square-b.square);
    getAllData(sortAsc);
        });
    this.innerHTML="Descending"; 
    }else if(this.innerHTML=="Descending"){
        axios(BASE).then((res)=>{
            const sortAsc=res.data.sort((a,b)=>b.square-a.square);
            getAllData(sortAsc);
        });
        this.innerHTML="Default";    
        }else{
            axios(BASE).then((res)=>{
                getAllData(res.data);
            });
            this.innerHTML="Ascending";
        };
});


///Favorites
const FAV_URL = "http://localhost:8000/favorites";

async function addFav(id) {
  let res = await axios(`${BASE}/${id}`);
  let obj = await res.data;
  console.log('fav',obj);
  axios.post(`${FAV_URL}`, obj);
  window.location = "fav.html";
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

/////scrollreveal
ScrollReveal({ reset: true,
  distance:"60px",
  duration:2500,
  delay:400
});
ScrollReveal().reveal('#our-project', { delay: 500,origin:'left' });
ScrollReveal().reveal('.images', { delay: 500,origin:'left' });
ScrollReveal().reveal('.apartment', { delay: 500,origin:'left'});
ScrollReveal().reveal('.end', { delay: 500});


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

// function createCard(arr){
//     row.innerHTML=``;
//     arr.forEach(element => {
//         row.innerHTML+=`
//         <div class="col-12 col-lg-3 mb-4 text-center">
//         //         <div class="card" style="width: 18rem;">
//         //             <img src="${element.photo}" class="card-img-top" alt="...">
//         //             <div class="card-body">
//         //               <h4 class="card-title">${element.price} AZN</h4>
//         //               <h5 class="card-text">${element.address}</h5>
//         //              <p> ${element.grass} grassy,${element.square} Kv.m</p><h6>${element.city}</h6>
//         //               <a href="#" onclick=addFav(${element.id}) class="btn"><i class="fa-regular fa-heart"></i></a>
//         //               <a href="./details.html?id=${element.id}" class="btn"><i class="fa-solid fa-circle-info"></i></a>
//         //             </div>
//         //           </div>
//         //       </div>
//         `
        
//     });
// }

// async function getAllData(){
//     let res=await axios(BASE);
//     let data=res.data;
//     allData=data;
//     searchData= inputSearch.value ? searchData : allData;
//     console.log(data);

//     createCard(searchData.slice(0,maxLength));
// }
// getAllData();


// loadMore.addEventListener("click",function(){
//     maxLength+=4
//     if(maxLength >= searchData.length){
//         loadMore.style.display=`none`

//     }if(searchData.length){
//     createCard(searchData.slice(0,maxLength));
        
//     }
//     else{
//         getAllData()

//     }
// })

// sortBtn.addEventListener("click",function(){
//     if(sort.innerHTML==`Ascending`){
//         searchData=searchData.sort((a,b)=>a.price-b.price)
//         sort.innerHTML=`Descendig`
//     }else if(sort.innerHTML==`Descendig`){
//         searchData=searchData.sort((a,b)=>b.price-a.price)
//         sort.innerHTML=`Default`
//     }else{
//         getAllData()
//         sort.innerHTML=`Ascending`
//     }
//     createCard(searchData.slice(0,maxLength))
//  })

// inputSearch.addEventListener("input",function(e){
//     searchData=allData;
//     searchData=searchData.filter((element)=>element.address
//     .toLocaleLowerCase()
//     .includes(e.target.value.toLocaleLowerCase()))
// createCard(searchData.slice(0,maxLength))
//  })