const BASE="http://localhost:8000/apartments";
const tbody=document.querySelector("tbody");
const  inputSearch=document.querySelector(".inputSearch");

 function getData(array) {
    console.log("arr", array);
    tbody.innerHTML="";
    array.forEach(element => {
        tbody.innerHTML+=`
        <tr>
        <td><img src="${element.photo}" alt=""></td>
        <td>${element.price}</td>
        <td>${element.address}</td>
        <td>${element.grass} Grassy</td>
        <td>${element.square} Kv.m</td>
        <td>${element.city}</td>
        <td><a href="" onclick=deleteBtn(${element.id})><i class="fa-solid fa-trash-can"></i></a>
        <a href="./add.html?id=${element.id}"><i class="fa-solid fa-pen-to-square"></i></a>
    </td>
    </tr>`
    });
}

axios(BASE).then((res)=>getData(res.data));

//delete
async function deleteBtn(userId){
    axios.delete(`${BASE}/${userId}`);
    getData();
};

//search
inputSearch.addEventListener("input",function(e){
    axios(BASE).then((res)=>{
        const filtered=res.data.filter((item)=>item.address.toLocaleLowerCase()
        .includes(e.target.value.toLocaleLowerCase()));
        getData(filtered);
    })
})
