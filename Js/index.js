

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


///Favorites
const FAV_URL = "http://localhost:8000/favorites";

async function addFav(id) {
  let res = await axios(`${BASE}/${id}`);
  let obj = await res.data;
  console.log('faav',obj);
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



