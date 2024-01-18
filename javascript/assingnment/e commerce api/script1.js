
{


    let xhr = new XMLHttpRequest();

   
   xhr.open('get','https://fakestoreapi.com/products');
    xhr.send();
   console.log("xhr:",xhr);

   xhr.onreadystatechange = function(){
    console.log("readystate:",xhr.readyState);

      let content = document.getElementById('cards');
      console.log("cards:",cards);

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
        
    <div id="cards">
    <div class="card">
        <h1 class="titlecards">${parsed_response[i].title}</h1>
        <img  src=${parsed_response[i].image} alt="" class="images">
        <h6> ${parsed_response[i].discription}</h6>
        <h6 class="category">${parsed_response[i].category}</h6>
        <h6 class="price">${parsed_response[i].price}</h6>
    </div>
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
