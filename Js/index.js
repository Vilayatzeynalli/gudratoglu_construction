let BASE="http://localhost:8000/apartments";
const row=document.querySelector(".apartment");
const inputSearch=document.querySelector("#inputSearch");
const sortBtn=document.querySelector("#sortBtn");
const loadMore=document.querySelector("#loadMore");
let searchData=[];
let allData=[];
let maxLength=3;

function getAllData(array){
    row.innerHTML="";
    array.forEach(element => {
        row.innerHTML+=`
        <div class="col-12 col-lg-3 mb-4 text-center">
        <div class="card" style="width: 18rem;">
            <img src="${element.photo}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${element.price} AZN</h5>
              <p class="card-text">${element.address}</p>
              <p>${element.grass} grassy</p><p>${element.square} Kv.m</p><span>${element.city}</span><br>
              <a href="#" class="btn"><i class="fa-regular fa-heart"></i></a>
            </div>
          </div>
      </div>`
    });
}
axios(BASE).then((res)=>getAllData(res.data));

//search
inputSearch.addEventListener("input",function(e){
    axios(BASE).then((res)=>{
        let dataFilter=res.data.filter((item)=>item.address
        .toLocaleLowerCase()
        .includes(e.target.value.toLocaleLowerCase()));
        getAllData(dataFilter);
    });
});

//sort
sortBtn.addEventListener("click",function(){
    if(this.innerHTML=="Ascending"){
    axios(BASE).then((res)=>{
    const sortAsc=res.data.sort((a,b)=>a.price-b.price);
    getAllData(sortAsc);
        });
    this.innerHTML="Descending"; 
    }else if(this.innerHTML=="Descending"){
        axios(BASE).then((res)=>{
            const sortAsc=res.data.sort((a,b)=>b.price-a.price);
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


// loadMore.addEventListener("click",function(){
//     maxLength+=3
//     if(maxLength >= searchData.length){
//         loadMore.style.display=`none`

//     }if(searchData.length){
//     getAllData(searchData.slice(0,maxLength));
        
//     }
//     else{
        

//     }
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



