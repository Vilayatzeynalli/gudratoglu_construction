const form=document.querySelector("form");
const inputFile=document.querySelector("#inputFile");
const inputNumber=document.querySelector("#inputNumber");
const inputAddress=document.querySelector("#inputAddress");
const inputGrassy=document.querySelector("#inputGrassy");
const inputSquare=document.querySelector("#inputSquare");
const inputCity=document.querySelector("#inputCity");
const addBtn=document.querySelector("#addBtn");

let BASE="http://localhost:8000/apartments";


form.addEventListener("submit",function(event){
    event.preventDefault();
    let cards={
        id:Date.now(),
        photo:inputFile.value,
        price:inputNumber.value,
        address:inputAddress.value,
        grass:inputGrassy.value,
        square:inputSquare.value,
        city:inputCity.value
    }
    fetch(`http://localhost:8000/apartments`,{
       method:"POST",
       headers:{
        "Content-Type":"application/json",
       },
       body: JSON.stringify(cards), 
    })
    window.location.href="./index.html"
});

