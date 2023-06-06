let BASE="http://localhost:8000/apartments";
const row=document.querySelector(".apartment");
const inputSearch=document.querySelector("#inputSearch");
const sortBtn=document.querySelector("#sortBtn");
const loadMore=document.querySelector("#loadMore");
let searchData=[];
let allData=[];
let maxLength=4;

function createCard(arr){
    row.innerHTML="";
    arr.forEach(element => {
        row.innerHTML+=`
        <div class="col-12 col-lg-3 mb-4 text-center">
//         <div class="card" style="width: 18rem;">
//             <img src="${element.photo}" class="card-img-top" alt="...">
//             <div class="card-body">
//               <h5 class="card-title">${element.price} AZN</h5>
//               <p class="card-text">${element.address}</p>
//               <p>${element.grass} grassy</p><p>${element.square} Kv.m</p><span>${element.city}</span><br>
//               <a href="#" class="btn"><i class="fa-regular fa-heart"></i></a>
//             </div>
//           </div>
//       </div>
        `
    });
}
async function getAllData(){
    const res=await axios(BASE);
    let data=res.data;
    allData=data;
    searchData=inputSearch.value ? searchData : allData;
    createCard(searchData.slice(0,maxLength));
}
getAllData();



loadMore.addEventListener("click",function(){
    maxLength+=4
    if(maxLength >= searchData.length){
        loadMore.style.display=`none`

    }if(searchData.length){
    createCard(searchData.slice(0,maxLength));
        
    }
    else{
        getAllData()

    }
})

sortBtn.addEventListener("click",function(){
    if(sortBtn.innerHTML==`ascending`){
        searchData=searchData.sort((a,b)=>a.price-b.price)
        sortBtn.innerHTML=`descendig`
    }else if(sortBtn.innerHTML==`descendig`){
        searchData=searchData.sort((a,b)=>b.price-a.price)
        sortBtn.innerHTML=`default`
    }else{
        getAllData()
        sortBtn.innerHTML=`ascending`
    }
    createCard(searchData.slice(0,maxLength))
 })


inputSearch.addEventListener("input",function(e){
    searchData=allData;
    searchData=searchData.filter((element)=>element.address.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))
createCard(searchData.slice(0,maxLength))
 })




// window.onscroll = function () { scrollFunction() }
// goTop.addEventListener("click",function(){
//     document.body.scrollTop=0
//     document.documentElement.scrollTop=0
// })






//menu iconu
let menuIcon = document.querySelector("#menu");
let navMobile = document.querySelector(".nav-mobile");

menuIcon.addEventListener("click", function () {
  navMobile.classList.toggle("show");

  this.classList.contains("fa-bars")
    ? (this.classList = "fa-solid fa-xmark")
    : (this.classList = "fa-solid fa-bars");
});



