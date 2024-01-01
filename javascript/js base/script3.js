


//oop--object oriented program


{
    let obj  = {
      name :"john",
      age :30,
      greeting : function (){
          console.log(`hello ${this.name} your age is ${this.age}`)
      }
    }
    console.log("obj:",obj);
   obj.greeting();




//constructor function


   function person (name,age){
        this.name = name;
        this.age =age;
        this.greeting = function (){
          console.log(`hello ${this.name} your age is ${this.age}`)

      }
      
   }
  }

//new-create new objects

  let person1 = new person ("jane",30);
  console.log("person1:",person1);
  person1.greeting();



  let person2 = new person("lukw",50);
  console.log("person2:",person2);
  person2.greeting();


person1.place = "france";
console.log("person1:",person1);
console.log("person1.place:",person1.place);


person2.address = "myaddress";
console.log("person2:",person2);
console.log("person2.address:",person2.address);


person2.printage =function (){
  console.log(`hello ${this.name} your age is ${this.age}`)
}
console.log("person2:",person2);




//prototype


person.prototype.printage =function (){
  console.log(`age of${this.name} is ${this.age}`)
}
person2.printage();




 
//class constructor

{
  class person {
    name;
    age;
    place;


    constructor(name,age,place){
      this.name =name;
      this.age =age;
      this.place =place;
    }
    greeting(){
      console.log(`hello ${this.name} your age is ${this.age}`)
    }
  }

  let person1 =new person("dake",30,"newyork")
  console.log('person1;',person1)
  person1.greeting();

}






{
  class animal {
    name;
  

    constructor(name){
      this.name =name;
    }
    walk(){
      console.log(` ${this.name} is walking`)
    }
  }

  let myanimal =new animal("tony")
  console.log('myanimal;',myanimal)
  myanimal.walk();



//inheritance

class cat extends animal{
    color;

    constructor(name,color){

      super(name) //super constructor:calls parent constructor

      this.color=color;
    }
}

const mycat = new cat("kurumbi","orange")

console.log("mycat:",mycat)
mycat.walk();

}


// {
//   class car {
//     name;
//     color;
//     regnumber;

//     constructor(name){
//       this.name=name;
//     }

//     setcolor(color){
//       this.color=color;
//     }
//     setregnumber(regnumber){
//       this.regnumber=regnumber
//     }

//     getcolor(){
//       return this.color;
//     }
//     getregnumber(){
//       return this.regnumber
//     }
    
//   }
//   const mycar =new car ("bmw")
//  console.log("mycar:",mycar)
 
//   mycar.setcolor("black")
//   console.log("mycar:",mycar)

//   mycar.setregnumber("kl429967")
//   console.log("mycar:",mycar)

//   console.log("color:",mycar.getcolor());
//   console.log("regnumber:",mycar.getregnumber());

// }


// {
//   class car {
//     name;
//     color;
//     regnumber;

//     constructor(name){

//       this.name=name;

//     }

//     set color(color){         

//       this.color=color;
//     }

//     set regnumber(regnumber){

//       this.regnumber=regnumber
//     }

//     get color(){

//       return this.color;
//     }

//     get regnumber(){

//       return this.regnumber
//     }
    
//   }
  
//   const mycar =new car ("bmw")
//  console.log("mycar:",mycar)
 
//   mycar.color="black";

//   console.log("mycar:",mycar)


//   mycar.regnumber="kl429967";

//   console.log("mycar:",mycar)

//   console.log("color:",mycar.color);

//   console.log("regnumber:",mycar.regnumber);

// }




// {
//   class vehicles {
//     twowheeler;
//     threewheeler;
//     fourwheeler;

//     constructor(name){
//       this.twowheeler=twowheeler;
//       this.threewheeler=threewheeler;
//       this.fourwheeler=fourwheeler
//     }

//     setcolor(color){
//       this.color=color;
//     }
//     setregnumber(regnumber){
//       this.regnumber=regnumber
//     }

//     getcolor(){
//       return this.color;
//     }
//     getregnumber(){
//       return this.regnumber
//     }
    
//   }
//   const mycar =new car ("bmw")
//  console.log("mycar:",mycar)
 
//   mycar.setcolor("black")
//   console.log("mycar:",mycar)

//   mycar.setregnumber("kl429967")
//   console.log("mycar:",mycar)

//   console.log("color:",mycar.getcolor());
//   console.log("regnumber:",mycar.getregnumber());

// }



// {

// class  button{
//   button;
//   constructor(content){
//     this.button=document.createElement('button');
//     this.button.innerHTML = content;
//     document.body.appendChild(this.button);
//   }
//  set width (width){
//   this.button.style.width=width +'px';
//  }
//  set height (height){
//   this.button.style.height=height +'px';
//  }

//  get width(){
//   return this.button.style.width;
//  }

//  get height(){
//   return this.button.style.height;
//  }
//  onclick(fn){
//   this.button.onclick=fn;
//  }


// }
// let mybutton = new button("clickme")
// console.log("mybutton :",mybutton)

// mybutton.width=200;
// mybutton.height=100;

// console.log("width :",mybutton.width)
// console.log("height :",mybutton.height)

// mybutton.onclick(function() {
// alert('buttonclicked')
// console.log("button1 clicked")
// });



// //child button

// class redbutton extends button{
  
//   constructor(content){
//     super(content); //super =calls parent constructor

//   }

//    //methode overriding
   
//   onClick(fn){
//     this.button.onclick = function() {
//       this.button.style.background = "red";
//       fn();
//     }.bind(this);

//   }

// }
// let myredbutton = new redbutton("clickhere")

// myredbutton.width=200;
// myredbutton.height=100;

// console.log("redbutton")
// console.log("width :",myredbutton.width)
// console.log("height :",myredbutton.height)



// myredbutton.onClick(function() {
 
//   console.log("red button clicked")

//   });


// }



{
  class paragraph{
    paragraph;
    
    constructor(content){
      this.paragraph=document.createElement('paragraph');
      this.paragraph.innerHTML = content;
      document.body.appendChild(this.paragraph);
    }
    set margin(margin){
      this.paragraph.style.margin = margin +'px';
    }

    set padding(padding){
      this.paragraph.style.padding = padding +'px';
    }

    set lineheight(lineheight){
      this.paragraph.style.lineheight = lineheight +'px';
    }
    get margin (){
      return this.paragraph.style.margin;
    }
    get padding (){
      return this.paragraph.style.padding;
    }
    // get lineheight (){
    //   return this.paragraph.style.line-height;
    //}
    onclick(fn){
         this.paragraph.onclick=fn;
        }



    }

    let myparagraph = new paragraph("Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat iste libero molestias quas qui?");
    console.log("myparagraph:",myparagraph);

    myparagraph.margin=50;
    myparagraph.padding=10;
    // myparagraph.lineheight=30;

    console.log("margin:",myparagraph.margin);
    console.log("padding:",myparagraph.padding);
    // console.log("lineheight:",myparagraph.lineheight);

    myparagraph.onclick(function() {
    console.log("paragraph")
   });


   class newparagraph extends paragraph{
     
    constructor(content){
           super(content); //super =calls parent constructor
      
         }

      onClick(fn){
         this.paragraph.onclick = function() {
       this.paragraph.style.color = "purple";
       this.paragraph.style.background = "yellow";
       fn();
     }.bind(this);

   }
   }
    
   let mynewparagraph = new newparagraph ("rohith vanam");
   console.log("myparagraph:",myparagraph);

   mynewparagraph.margin=50;
   mynewparagraph.padding=10;
   // myparagraph.lineheight=30;

   console.log("margin:",mynewparagraph.margin);
   console.log("padding:",mynewparagraph.padding);
   // console.log("lineheight:",myparagraph.lineheight);

   mynewparagraph.onclick(function() {
   console.log("paragraph")
  });
  }


  
