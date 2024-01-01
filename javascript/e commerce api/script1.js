
{


    let xhr = new XMLHttpRequest();

   
   xhr.open('get','https://fakestoreapi.com/products');
    xhr.send();
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
      console.log("title:",response[2].title);  //not possible since it is string format


      let parsed_response = JSON.parse(response);
      console.log("parsed_response:",parsed_response);
      

      let datas ='';
      for (let i=0; i<parsed_response.length; i++){
        datas+=`
        
    <div class="container">
    <div class="card">
        <h1 class="titlecards">${parsed_response[i].title}</h1>
        <img  src=${parsed_response[i].image} alt="" class="images">
        <p>${parsed_response[i].discription}</p>
        <p class="category">${parsed_response[i].category}</p>
        <p class="price">${parsed_response[i].price}</p>
    
    </div>`
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
