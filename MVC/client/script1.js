function success_function(responseData) {
    return {
      statusCode: responseData.statusCode ||200,
      data: responseData.data || null,
      message: responseData.message|| "success"
    };
    

  }
  function error_function(responseData) {
    return {
      statusCode: responseData.statusCode ||404,
      data: responseData.data || null,
      message: responseData.message|| "FAILED"
    };
    

  }

  async function submitForm() {
    try {
        const name = document.getElementById('name').value;
        console.log("name:", name);

        const email = document.getElementById('email').value;
        console.log("email:", email);

        const password = document.getElementById('password').value;
        console.log("password:", password);

        let data = {
            name,
            email,
            password,
        };
        let json_data = JSON.stringify(data);

        let response = await fetch('/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: json_data,
        });

        if (!response.ok) {
            throw new Error('Form submission failed');
        }

        let responseData = await response.json();
        let token = responseData.data;
        console.log("token:", token);

        localStorage.setItem("token", token);
        
        alert('Form submitted successfully');

        const successfunction = success_function({
            statusCode: 200,
            data: token,
            message: "login success",
        });
        return successfunction;

    } catch (error) {
        console.log("Error:", error);
        alert('Form submission failed');
        
        const errorfunction = error_function({
            statusCode: 404,
            message: "something went wrong"
        });
        return errorfunction;
    }
}

  


async function getData() {

    console.log("Hello world");


    let data = await fetch('http://localhost:3001/users');
   console.log("data:",data)


    let parsedData = await data.json();
    console.log("parsedData : ", parsedData);

    let body = document.getElementById("body");
    console.log("body : ", body);

    let rows = "";

    for (let i = 0; i < parsedData.data.length; i++) {
        rows = rows +
            `
        <tr>
        <td>${parsedData.data[i]._id}</td>   
        <td><input type="text" name="name" id="name-${parsedData.data[i]._id}" value="${parsedData.data[i].name}" disabled=true></td>
        <td><input type="text" name="email" id="email-${parsedData.data[i]._id}" value="${parsedData.data[i].email}" disabled=true></td>
        <td><input type="text" name="password" id="password-${parsedData.data[i]._id}" value="${parsedData.data[i].password}" disabled=true></td>
        <td><button onclick="handleEdit('${parsedData.data[i]._id}')">Edit</button></td>
        <td><button onclick="handleSave('${parsedData.data[i]._id}')">Save</button></td>
        <td><button onclick="handleDelete('${parsedData.data[i]._id}')">Delete</button></td>
        </tr>
        `
    }
    body.innerHTML =rows;
}

function handleEdit(id) {
  console.log("id : ", id);

  let name = document.getElementById(`name-${id}`)
  console.log("name : ", name);
  name.disabled = false;

  let email = document.getElementById(`email-${id}`)
  console.log("email : ", email);
  email.disabled = false;

  let password = document.getElementById(`password-${id}`)
  console.log("password : ", password);
  password.disabled = false;


}


async function handleSave(id) {
  console.log("id : ", id);

  let nameTag = document.getElementById(`name-${id}`)
  console.log("nameTag : ", nameTag);
  let name = nameTag.value;
  console.log("name : ",name)


  let emailTag = document.getElementById(`email-${id}`)
  console.log("emailTag : ", emailTag);
  let email = emailTag.value;
  console.log("email : ",email)


  let passTag = document.getElementById(`password-${id}`)
  console.log("passTag : ", passTag);
  let password = passTag.value;
  console.log("pass : ",password);

  let data = {
      id,
      name,
      email,
      password,
  }

  let jsonData = JSON.stringify(data);
  console.log("jsonData : ", jsonData);

  let response = await fetch('http://localhost:3001/users', {
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

  let nameTag = document.getElementById(`name-${id}`)
  console.log("nameTag : ", nameTag);
  let name = nameTag.value;
  console.log("name : ",name)


  let emailTag = document.getElementById(`email-${id}`)
  console.log("emailTag : ", emailTag);
  let email = emailTag.value;
  console.log("email : ",email)


  let passTag = document.getElementById(`password-${id}`)
  console.log("passTag : ", passTag);
  let password = passTag.value;
  console.log("pass : ",password);

  let data = {
      id,
      name,
      email,
      password,
  }

  let jsonData = JSON.stringify(data);
  console.log("jsonData : ", jsonData);

  let response=await fetch('http://localhost:3001/users', {
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

// // function validateName() {

// //     const name = document.getElementById('name').value;
// //     const name_error = document.getElementById(`name-error`);
// //     const name_regex = /^[A-Za-z]{2,30}( [A-Za-z]{2,30})?$/;
// //     let isNameValid = name_regex.test(name);

// //     if (!isNameValid) {
// //         name_error.innerHTML = "Invalid name";
// //         return false;
// //     } else {
// //         name_error.innerHTML = "";
// //         return true;
// //     }
// // }


// // function validateEmail() {

// //     const email = document.getElementById('email').value;
// //     const email_error = document.getElementById('email-error');
// //     const email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
// //     let isEmailValid = email_regex.test(email);

// //     if (!isEmailValid) {
// //         email_error.innerHTML = "Invalid email";
// //         return false;
// //     } else {
// //         email_error.innerHTML = "";
// //         return true;
// //     }
// // }


// // function validatePassword() {

// //     const password = document.getElementById('password').value
// //     const password_error = document.getElementById(`password-error`);
// //     const password_regex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,}$/ ;
// //     let isPasswordValid = password_regex.test(password);

// //     if (!isPasswordValid) {
// //         password_error.innerHTML = "Invalid password";
// //         return false;
// //     } else {
// //         password_error.innerHTML = "";
// //         return true;
// //     }
// // }

// Success and error functions for handling responses
