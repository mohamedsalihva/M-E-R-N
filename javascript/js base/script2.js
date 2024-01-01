console.log("window;",window);
console.log("hello world");

//console.log("this:",this);



//(this) refers current object

let obj  = {
  name : "harry",
  printhis :function(){
      console.log("this is from obj:",this);
  }
}
console.log("name:",obj.name)
console.log(obj.printhis);
obj.printhis();




let person = {
    firstname:"ronaldo",
    lastname:"cr7",
    age:30

}
function greet(message,message1) {
    console.log("message:",message);
    console.log("message1:",message1);


    console.log("firstname:",this.firstname);

}

//call function
    greet.call(person,"hai","hello");
    greet.apply(person,["hello","hai"]);


//function is ot called insted returns a new function with this binded
    greet.bind(person,"hello","hai");
    console.log(greet.bind(person,"hello","hai"));

    let bindedfunction =  greet.bind(person,"hello","hai");
    bindedfunction();








    

    {

        let product = {
            productname : "shoe",
            productprise : 3000,
            productrating :5
        }


        function products(prize,brand){
            console.log("prize:",prize);
            console.log("brand:",brand);

            console.log("productname:",this.productname)
        }


        products.call(product,"3000","nike");


        products.apply(product,["3000","nike"]);



       products.bind(product,"brand");
       console.log(products.bind(product,"brand"));

       let bindedfunction = products.bind(product,"3000","nike");
        bindedfunction();
    }





    
    