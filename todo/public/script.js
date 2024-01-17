 let todoinput =document.getElementById("todo-input");
  let addbtn = document.getElementById("add-btn")
 let todolist = document.getElementById("todo-list");

function addtodolist(){
    let todoinputData =todoinput.value;
    //console.log(todoinputData)
    let li = document.createElement("li");
    //console.log(li)
    li.innerHTML= todoinputData;
    todolist.appendChild(li)
    //console.log(todoinputData)
    todoinput.value ="";
    todoinput.focus();

}


 addbtn.addEventListener("click", addtodolist);
