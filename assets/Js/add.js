const form=document.querySelector("form");
const inputFile=document.querySelector("#inputFile");
const inputNumber=document.querySelector("#inputNumber");
const inputAddress=document.querySelector("#inputAddress");
const inputGrassy=document.querySelector("#inputGrassy");
const inputSquare=document.querySelector("#inputSquare");
const inputCity=document.querySelector("#inputCity");
const addBtn=document.querySelector("#addBtn");

const id=new URLSearchParams(window.location.search).get("id");
let BASE="http://localhost:8000/apartments";


form.addEventListener("submit",function(e){
    e.preventDefault();
    let card={
        id:Date.now(),
        photo:`./assets/Image/${inputFile.value.split("\\")[2]}`,
        price:inputNumber.value,
        address:inputAddress.value,
        grass:inputGrassy.value,
        square:inputSquare.value,
        city:inputCity.value
    }
    if(!id){
        fetch(`http://localhost:8000/apartments`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(card),
    }).then(()=>{
        window.location.href="./project.html",
        window.location.href="./admin-dashboard.html"
    })
    }else{
        fetch(`http://localhost:8000/apartments/${id}`,{
        method:"PATCH",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(card),
    }).then(()=>{
        window.location.href="./projects.html",
        window.location.href="./admin-dashboard.html"
    }) 
    }
});


// let BASE="http://localhost:8000/apartments";


// form.addEventListener("submit",function(event){
//     event.preventDefault();
//     let cards={
//         id:Date.now(),
//         photo:inputFile.value,
//         price:inputNumber.value,
//         address:inputAddress.value,
//         grass:inputGrassy.value,
//         square:inputSquare.value,
//         city:inputCity.value
//     }
//     fetch(`http://localhost:8000/apartments`,{
//        method:"POST",
//        headers:{
//         "Content-Type":"application/json",
//        },
//        body: JSON.stringify(cards), 
//     })
//     window.location.href="../assets/project.html"
// });


//menu iconu
let menuIcon = document.querySelector("#menu");
let navMobile = document.querySelector(".nav-mobile");

menuIcon.addEventListener("click", function () {
  navMobile.classList.toggle("show");

  this.classList.contains("fa-bars")
    ? (this.classList = "fa-solid fa-xmark")
    : (this.classList = "fa-solid fa-bars");
});
