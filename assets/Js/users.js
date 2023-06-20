const users_url="http://localhost:8000/users";
const tbody=document.querySelector("tbody");
const  inputSearch=document.querySelector(".inputSearch");

 function getData(array) {
    tbody.innerHTML="";
    array.forEach(element => {
        tbody.innerHTML+=`
        <tr>
        <td>${element.name}</td>
        <td>${element.lastname}</td>
        <td>${element.email}</td>
        <td>${element.password}</td>
        <td><a href="" onclick=deleteBtn(${element.id})><i class="fa-solid fa-trash-can"></i></a>
        </td>
        </tr>`
    });
}

axios(users_url).then((res)=>getData(res.data));

//delete
async function deleteBtn(userId){
    axios.delete(`${users_url}/${userId}`);
    getData();
};

//search
inputSearch.addEventListener("input",function(e){
    axios(users_url).then((res)=>{
        const filtered=res.data.filter((item)=>item.name.toLocaleLowerCase()
        .includes(e.target.value.toLocaleLowerCase()));
        getData(filtered);
    })
})
