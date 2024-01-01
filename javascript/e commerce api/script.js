{
//    let xhr =XMLHttpRequest();
    fetch('https://fakestoreapi.com/products').then((data)=>{
        console.log("data:",data)
        return data.json();
    }).then((completedata)=>{
        console.log(completedata)
        //  console.log(completedata[2].title);
        //  document.getElementById('root').innerHTML=completedata[2].title;

        let data1 ="";
        completedata.map((value)=>{
          data1+= `
          <div id="newcards">
          <div class="card">
              <h1 class="titlecards">${value.title}</h1>
              <img  src=${value.image} alt="" class="images">
              <p>${value.discription}</p>
              <p class="category">${value.category}</p>
              <p class="price">${value.price}</p>
      
          </div>
          </div>`
       
        })
        document.getElementById("cards").innerHTML=data1;

    });
    
      
}