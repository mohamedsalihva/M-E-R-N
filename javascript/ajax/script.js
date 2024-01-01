
{


     let xhr = new XMLHttpRequest();





    let btn = document.getElementById(`btn`);
    btn.addEventListener('click',() => {
      xhr.send();
    })
    


    
    xhr.open('get','https://jsonplaceholder.typicode.com/users');
    // xhr.send();
    console.log("xhr:",xhr);

    xhr.onreadystatechange = function(){
     console.log("readystate:",xhr.readyState);

     let content = document.getElementById('content');
     console.log("content:",content);

     if (xhr.readyState == 4){

       if(xhr.status == 200){

       console.log("success");

       let response = xhr.response;
       console.log("response:",response);
       console.log("response type:",typeof response);
       console.log("name:",response[1].name);  //not possible since it is string format


       let parsed_response = JSON.parse(response);
       console.log("parsed_response:",parsed_response);
       

       let datas ='';
       for (let i=0; i<parsed_response.length; i++){
         datas = datas + `<tr>
         <td>${parsed_response[i].id}</td>
         <td>${parsed_response[i].name}</td>
         <td>${parsed_response[i].username}</td>
         <td>${parsed_response[i].email}</td>
         </tr>`
       }
       content.innerHTML = datas;
       
     }else{
        console.log("failed");
     }

    }else{
     console.log("state not completed");
    }
    }
 }

