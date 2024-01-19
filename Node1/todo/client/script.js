//   let taskinput = document.getElementById("todo-task");
//   let Addbtn = document.getElementById("todo-button");
//   let todotasklist = document.getElementById("todo-list") ;

// function addTodolists() {
//    alert(test);
//      // taskinputdata = taskinput.value;
//      // let li = document.createElement("li");
//      // li.innerText = taskinputdata;
//      // todolist.appendChild(li)
// }


// Addbtn.addEventListener('click',addTodolists);


async function getData() {
    console.log("Hello world");

    let data = await fetch('http://localhost:3001/getData');
    console.log("data : ", data);

    let parsedData = await data.json();
    console.log("parsedData : ", parsedData);

    let content = document.getElementById("content");
    console.log("content : ", content);

    let rows = "";

    for (let i = 0; i < parsedData.length; i++) {
        rows = rows + //`
            // <tr>
            // <td>${parsedData[i]._id}</td>
            // <td>${parsedData[i].pass}</id>
            // <td>${parsedData[i].email}</id>
            // <td>${parsedData[i].pass}</id>
            // </tr>
            // `
            `
        <tr>
        <td>${parsedData[i]._id}</td>
        <td><input type="task" name="task" id="task-${parsedData[i]._id}"  value="${parsedData[i].task}" disabled=true ></input></td>
        <td><button onclick="handleEdit('${parsedData[i]._id}')">Edit</button></td>
        <td><button onclick="handleSave('${parsedData[i]._id}')">Save</button></td>
        <td><button onclick="handleDelete('${parsedData[i]._id}')">Delete</button></td>
        
        </tr>
        `
    }
    content.innerHTML = rows;
}

getData();

function handleEdit(id) {
    console.log("id : ", id);

    let task = document.getElementById(`task-${id}`)
    console.log("task : ", task);
    task.disabled = false;

}

async function handleSave(id) {
    console.log("id : ", id);

    let taskTag = document.getElementById(`task-${id}`)
    console.log("taskTag : ", taskTag);
    let task = taskTag.value;
    console.log("task : ",task)


    let data = {
        id,
        task,
    
    }

    let jsonData = JSON.stringify(data);
    console.log("jsonData : ", jsonData);

    let response=await fetch('http://localhost:3001/editData', {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: jsonData,

    });

    console.log("response : ",response);
    let parsed_response = await response.text();

    if (parsed_response == "success"){
        alert("Updation success")
    }else{
        alert("Updation failed")
    }
    getData();
}

async function handleDelete(id) {
    console.log("id : ", id);

    let taskTag = document.getElementById(`task-${id}`)
    console.log("taskTag : ", taskTag);
    let task = taskTag.value;
    console.log("task : ",task)

    let data = {
        id,
        task,

    }

    let jsonData = JSON.stringify(data);
    console.log("jsonData : ", jsonData);

    let response=await fetch('http://localhost:3001/deleteData', {
        method: "DELETE",
        headers: {
            "Content-type": "application/json"
        },
        body: jsonData,

    });

    console.log("response : ",response);
    let parsed_response = await response.text();

    if (parsed_response == "deleted"){
        alert("Deletion Success")
    }else{
        alert("Deletion failed")
    }
    getData();
}