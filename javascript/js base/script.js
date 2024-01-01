// alert('alert from external javascript');
console.log("welcome to javascript");


// this is asingle line comment

// this is a multi line comment
// line1
// line2 
// line2


// variables
var a; //variable declaration
a = 10; //variable initialisation
var b = "Hello" //declaration+initialisation



// datatypes

// String
// Number
// Boolean
// undefined
// null




var str = "Hello world";
console.log("str :", str);
console.log("type of str :", typeof str)


var num = 100;
console.log("num :", num);
console.log("type of num :", typeof num)

var bool = true;
console.log("bool :", bool);
console.log("type of bool ;", typeof bool)



var bool = false;
console.log("bool :", bool);
console.log("type of bool ;", typeof bool)




var n = null;
console.log("n :", n);
console.log("type of n ;", typeof n)



var u = undefined;
console.log("u :", u);
console.log("type of u :", typeof u)





// string methode


console.log("Length : ", str.length);
console.log("replace : ", str.replace("Hello", "hai"));
console.log("uppercase : ", str.toUpperCase());
console.log("lowercase : ", str.toLowerCase());
console.log(str.toUpperCase().length)
console.log(str.toLowerCase().length)


console.log("trim :", str.trim().length);
console.log("trimRight :", str.trimEnd().length);
console.log("trimLeft :", str.trimStart().length);
console.log("substring :", str.substring(0, 7));



console.log("startwith :", str.startsWith("Hello"));
console.log("endswith :", str.endsWith("world"));
console.log("search :", str.search("Hello world"));
console.log("match :", str.match("Hello"));
//console.log("matchAll :", str.matchAll("Hello"));









// array

var arr = [10, 15, 20, "Hello", true, false, undefined, null];
console.log("arr :", arr);

var length = arr.length
console.log("Array length :", length);

var str1 = arr.join("$");
console.log("str1 :", str1);


console.log("index: ", arr.indexOf(15));


arr.push("end");
console.log("Array: ", arr);


arr.unshift("start");
console.log("Array: ", arr);


arr.pop();
console.log("Array: ", arr);


arr.shift();
console.log("Array: ", arr);



arr.splice(6, 2)
console.log("Array: ", arr);

arr.splice(3, 0, 50);
console.log("Array: ", arr);

arr[2] = 11;
console.log("Array: ", arr);

arr[0] = "welcome";
console.log("Array: ", arr);





// object

var obj = {
    firstname: "ronaldo",
    lastname: "cr7",
    age: 35,
    indian: false,
}
console.log("obj :", obj);

console.log("obj :", obj.firstname);
console.log("obj :", obj.indian);


// update

obj.firstname = "salih";
console.log("obj :", obj);

obj.age = 63,
    console.log("obj :", obj);


obj.mark1 = 50;
obj.mark2 = 150;
console.log("obj:", obj);


// json string
var json_str = JSON.stringify(obj);
console.log("json_str: ", json_str);
console.log("json_str datatype :", typeof json_str);
console.log("first name from json_str: ${json_str.firstname}")
console.log("age from json_str: ${json_str.age}");

var json_str1 = {
    json_str: { "firstname": "salih", "lastname": "cr7", "age": 63, "indian": false, "mark1": 50, "mark2": 150 }
};



var num = 200;
console.log("num : ${num}");


// parsing json
var obj1 = JSON.parse(json_str);
console.log("obj1 : ", obj1);
console.log("obj1 datatype  : ", typeof obj1);

console.log("first name :${obj1.firstname}")
console.log("Age : ${obj1.age}");




//var

var a = 10;       //function scoped adds in global object
console.log("a;", a);
console.log("from widow object: ", window.a);



var a = 50;         //redeclaration possible
console.log("a;", a);
console.log("from widow object: ", window.a);



console.log("a1 :", a1);  //hoisted
var a1 = 60;



//let

let b1 = 20;                //block scoped
console.log("b1 :", b1);
console.log("from widow object: ", window.b1);


// let b1 = 30;  //cannot redeclare




//  console.log("b2 :", b2);  //not hoisted
// let b2 = 60;




//const

const c = 60;
console.log("c :", c);


// const c =50;
// console.log("c :", c);  //cannot redeclare




// console.log("c1 :", c1);  //not hoisted
// const c1 = 60;





//block
{

    var a3 = 500;  //can be accesed outsude of this block

    //connot be accessed outside of this block
    let b2 = 1000;
    const c2 = 1500;


    let b3;//can be declared and initialised in multiple steps
    b3 = 5000;
    console.log("b3 :", b3);



    const c3 = 10000;  //must be declared and initialise in one steps
    console.log("c3:", c3);


    b2 = 1;  //let variable can be reassinged with multiple values in a program
    console.log("b2:", b2)

    // c2 = 2; // const variables can be reassinged

}

console.log("a3 :", a3);
// console.log("b2:",b2);
//console.log(" c2:",c2);





{
    // javascript condition

    let a = 10;
    let b = 20;

    // if else statement

    if (a > b) {
        console.log("a is greater");
    } else {
        console.log("b is greater");
    }


    // operators
    // +,-,*,/,%   ARITHEMATIC OPERATORS
    // &&,||,!     logical operators
    // =
    // <,>,<=,>=,==,===  relational operators


    // if else if statement

    if (a > b) {
        console.log("a is greater");
    } else if (a == b) {
        console.log("both are equal");
    } else {
        console.log("b is greater")
    }


    // if else ladder

    if (a > b) {
        console.log("a is greater");
    } else if (a === b) {
        console.log("both  value and type equal");
    } else if (a == b) {
        console.log("both are equal");
    } else {
        console.log("b is greater")
    }

    if (false) {
        console.log("block1");
    } else if (true) {
        console.log("block2");
    } else if (true) {
        console.log("block3");
    } else {
        console.log("block4")
    }




    // switch statement

    let day = 5;

    switch (day) {



        case 1:
            console.log("monday");
            break;



        case 2:
            console.log("tuesday");
            break;



        case 3:
            console.log("wednesday");
            break;



        case 4:
            console.log("thursday");
            break;



        case 5:
            console.log("friday");
            break;



        case 6:
            console.log("saturday");
            break;




        case 7:
            console.log("sunday");
            break;



        default:
            console.log("invalid");
            break;


    }




    {


        //loops


        //for loop

        for (let i = 1; i <= 10; i++) {
            console.log(i);
        }


        // //while loop

        let i = 1;
        while (i <= 12) {
            console.log(i);
            i++;

        }



        // do while
        let j = 1
        do {
            console.log("from do while loop :", j);
            j++
        } while (j <= 10);

    }

    {

        //nested loop


        let str = '';

        for (let i = 0; i < 10; i++) {

            for (j = 0; j < 10; j++) {

                str = str + '*';
            }

            str = str + '\n';

        }

    }



    {
        // break and continue

        for (let i = 0; i <= 10; i++) {
            if (i == 3) {
                continue;
            }
            if (i == 6); {
                break;
            }
            console.log(i);
        }



        let flag1 = true;

        let flag2 = false;

        if (flag1 && flag2) {

            console.log("success");

        } else {

            console.log("failed");
        }




        let num1 = '3';
        let num2 = 3;

        if (num1 == num2) {        //only value
            console.log("both are equal");
        } else {
            console.log("both are unequal")
        }




        let num3 = '3'; //string
        let num4 = 3;   //value

        if (num1 === num2) {                //bothdatatype and value
            console.log("both are equal");
        } else {
            console.log("both are unequal")
        }



    }



    {
        //sum 0f number

        let sum = 0;
        for (i = 0; i < 10; i++) {
            sum = sum + i;

        }

        console.log("sum:", sum);



        // odd / even

        let odd = [];
        let even = [];

        let j = 1

        while (j < 10) {

            if (j % 2 == 0) {
                even.push(j);

            } else {
                odd.push(j);

            }
            j++;
        }

        console.log("odd :", odd);
        console.log("even :", even);

    }

    {
        //functions

        //functiondefintion

        function printhello() {

            console.log("hello");

        }

        printhello();   //functioncall



        function sum(a, b) {

            let sum = a + b;

            console.log(sum);

        }

        sum(20, 40); //argument






        //call by value//


        let a = 10;

        function update(a) {

            a = "new value";

            console.log("a[inside function]:", a)

        }

        update(a);
        console.log("a [outside function]:", a);




        //call by reference//



        let arr = [20, 30, 40];

        function update1(arr) {

            arr[1] = 200;

            console.log("arr [inside function]:", arr);
        }

        update1(arr);

        console.log("arr [outside function]:", arr)





        //closure//             a function along with its environment



        function outerfunction() {

            const outervariable = "hello world";

            function innerfunction() {

                console.log("outervariable:", outervariable);
            }

            return innerfunction;

        }

        let result = outerfunction();

        console.log("result:", result);

        result();




        {

            function outerfunction() {

                const outervariable = "hello world";

                function innerfunction() {

                    function innerfunction1() {

                        console.log("outervariable:", outervariable);

                    }

                    return innerfunction1;

                }

                return innerfunction;

            }

            let result = outerfunction();

            console.log("result:", result);

            let result1 = result();

            console.log("result1:", result1);

            result1();


        }

    }
}


// {
// //     // Dom methode

//     let content = document.getElementById('content');
//     console.log("content:",content);

//      content.textContent = "new content";


//      let text = document.getElementsByClassName('text');
//      console.log("text:",text)

//      text[0].textContent = "new text";
//      text[1].textContent = "new text1";

//      let para = document.getElementsByTagName('p');
//      console.log("para:",para);

//      para[0].textcontent = "this ia a para"

//      para[1].textcontent = "this ia a para1"

//      para[2].textcontent = "this ia a para2"


//      let element = document.querySelector('container ul li');
//      console.log("element:",element);

//      element.textContent = "list item"

// }




//factorial of a number


function factorial(a) {

    let fact = 1;

    for (let i = a; i > 0; i--) {

        fact = fact * i

    }

    return fact;

}

let result = factorial(4)
console.log("factorial(4):", result);

// let fact = document.getElementById('factorial(4)');
// console.log("factorial(4):",factorial(4));





//fibonnaci series


function fibonacci(num) {
    let a = 0;

    console.log(a);

    let b = 1;

    console.log(b);

    let sum = 0;

    while (sum < num) {

        sum = a + b;

        console.log(sum);

        //swapping

        a = b;

        b = sum;

    }

}

fibonacci(12)



// sum=1 
// a=1
// b=1

// sum=2
// a=1
// b=2

// sum=3
// a=2
// b=3

// sum=5
// a=3
// b=5

//{




// // reverse a string
{

    let str = "hello";
    let reversedstring = '';

    for (let i = str.length - 1; i >= 0; i--) {

        reversedstring = reversedstring + str[i];
    }

    console.log("Reversed string :", reversedstring);


    if (str === reversedstring) {
        console.log("this is palindrome")
    } else {
        console.log("string is not palindrome")
    }






    //multiplication table upto 10

    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            console.log(`${i} * ${j} = ${i * j} \n`);
        }
    }
}


// i=1
// j=1

// i=1
// j=2

// i=1
// j=3

// ..
// ..
//i=1
//j=10

//j=11
//loop stop


// 1=2
// j=1

// 1=2
// j=2

// i=2
// j=3



//}


//programe of sum of odd and even

{
    let oddsum = 0;
    let evensum = 0;


    for (let i = 1; i <= 50; i++) {
        if (i % 2 == 0) {
            evensum = evensum + i;
        } else {
            oddsum = oddsum + i;
        }
    }
    console.log("evensum:", evensum)
    console.log("oddsum:", oddsum)
}




{

    //programe to find sum of an array


    let arr = [10, 30, 70, 20, 45];


    let sum = 0;

    for (let i = 0; i < arr.length; i++) {

        sum = sum + arr[i];
    }
    console.log("sum :", sum);
}






{
    //programe to find sum element of array

    let arr = [10, 30, 70, 20, 45];


    let sum = 0;

    for (let i = 0; i < arr.length; i++) {

        sum = sum + arr[i];
    }
    console.log("sum :", sum);




    //average of elemet of an array


    let avg = sum / arr.length;
    console.log("avg:", avg)





    //programe to find maximum element in an array



    let max = arr[0];

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > max) {

            max = arr[i];

        }

    }
    console.log("max:", max);




    //programe to find minimum element in an array


    let min = arr[0];

    for (let i = 0; i > arr.length; i++) {

        if (arr[i] < min) {

            min = arr[i];

        }

    }
    console.log("min:", min);




}

//negative array  to positive

{
    let arr = [10, -10, 20, -30]
    console.log("arr before:", arr);


    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) arr[i] = arr[i] * -1;
    }
    console.log("arr after:", arr)
}



// {
//     function arrtopositive(arr){

//         let arr =[10,-10,20,-30]
//         console.log("arr before:",arr);


//         for(let i =0; i< arr.length; i++){
//            if(arr[i] < 0) arr[i] = arr[i] * -1 ;
//         }
//         console.log("arr after:",arr)
//     }
// }




{
    let i = 0

    function count() {
        console.log(i);
        i++;
        while (i <= 10) {
            count();  //recursive function call
        }

    }
    count();
}


{
    console.log("countdown functin using recursion")

    function countdown(n) {
        if (n <= 0) {
            console.log("done..")
        } else {
            console.log(n);
            countdown(n - 1);
        }
    }
    countdown(7);
}




const array = [1, 2, 3, 4, 2, 5, 3];

const duplicatevalues =
    array.filter((value, index) => array.indexOf(value) !== index);
console.log("duplicatevalues:", duplicatevalues);





// //math function



// {
//     console.log("sqrt :", math.sqrt(25));
// }





{


    // timers




    //    setTimeout(() => {
    //    console.log("set timeout")
    //    },2000);


    //   setInterval(() => {
    //     console.log("set interval")
    //   },2000);


}





//date and time



// {
//     function putzero(value) {
//         return value<10?"0"+value:value;
//     }


//     function show() {
//         let time = document.getElementById('time');
//         console.log("time:", time);
//         let dt = new date();
//         console.log("date:", dt);
//         let hours = dt.gethours();
//         let ampm = hours>12?"pm":"am";
//         time.innerHTML = putzero(hours%12) + ":" + putzero(dt.getminutes()) + ";" + putzero(dt.getseconds()) + ampm;


//         setTimeout(function () {
//             show();
//         }, 5000);


//     }
//     show();
// } 







//spread operator////


{

let obj = {
    name: "salih",
    age: 20,
    department: "development",
}
console.log("obj:",obj);

let obj1 ={...obj};
console.log("obj1:",obj);




let arr = [10,"hello",false];
console.log("arr:",arr);


let arr1 =[...arr];
console.log("arr1:",arr1)



const sum = 50+50;{
    console.log("sum:",sum);
}

const sum1 = {...sum};
console.log("sum1:",sum);






//destructuring//////




// let name = obj.name;
// console.log("name;",name);

// let age = obj.age;
// console.log("age;",age);


// let department = obj.department;
// console.log("department;",department);

let {name,age,department} = obj
console.log("name:",name);
console.log("age;",age);
console.log("department;",department);



// let array1 = arr[0];
// console.log("array1:",array1);
// let array2 = arr[1];
// console.log("array2:",array2);
// let array3 = arr[2];
// console.log("array3:",array3);


let [array1,array2,array3] =arr;

console.log("array1:",array1);
console.log("array2:",array2);
console.log("array3:",array3);

}





{
    //nested destructuring////////

{

    let obj = {
        name: "salih",
        age: 20,

        address:{
            city : "mycity",
            state : "mystate",
        },

        department: "development",
    }
    console.log("obj:",obj);
    
    let obj1 ={...obj};
    console.log("obj1:",obj);
    
    
    
    
    let arr = [10,"hello",false, [20,"hei",true]];
    console.log("arr:",arr);
    
    
    let arr1 =[...arr];
    console.log("arr1:",arr1)
    
    
    
    const sum = 50+50;{
        console.log("sum:",sum);
    }
    
    const sum1 = {...sum};
    console.log("sum1:",sum);
    
    
    
    
    
    
    //destructuring
    
    // let name = obj.name;
    // console.log("name;",name);
    
    // let age = obj.age;
    // console.log("age;",age);
    
    
    // let department = obj.department;
    // console.log("department;",department);
    
    let {name,age,department, address:{city,state}} = obj
    console.log("name:",name);
    console.log("age;",age);
    console.log("department;",department);
    console.log("city;",city);
    console.log("state;",state);
    
    
    // let array1 = arr[0];
    // console.log("array1:",array1);
    // let array2 = arr[1];
    // console.log("array2:",array2);
    // let array3 = arr[2];
    // console.log("array3:",array3);
    
    
    let [array1,array2,array3,[newarray1,newarray2,newarray3]] =arr;
    
    console.log("array1:",array1);
    console.log("array2:",array2);
    console.log("array3:",array3);
    console.log("newarray1:",newarray1);
    console.log("newarray2:",newarray2);
    console.log("newarray3:",newarray3);
    }
}


//array functions
{
    let arr = [1,"hello",true];


    ///foreach

    console.log("\nforEach methode")
    arr.forEach((element,index) => {
    console.log("index:",index)
    console.log("element:",element)
    });



    let data = [
        {
            name : "salo",
            mark : 60,
            place: "ekm",             
        },

      {
            name : "balram",
            mark : 40,
            place: "ekm",             
        },

        {
            name : "salram",
            mark : 60,
            place: "ekm",             
        }
    ]

    // data.foreach((element,index) => {
    //     console.log(`data[$(index)]:${element}`)
    //     console.log(`name[$(index)]:${element.name}`);
       
    // })


    //find
    console.log("\nfind methode");

    let findresult = data.find((element)=> {

        return element.mark == 60;
    });
    console.log("findresult:",findresult);




// filter

    console.log("\nfilter methode");

    let filterresult = data.filter((item,index) => {

        return item.mark == 60;
    });
    console.log("filterresult:",filterresult)


//map function

    console.log("\nmap function");

    let mapresult = data.map((item) => {

        return item.name;  
    });
    console.log("mapresult:",mapresult)



//reduse function

    console.log("\nreduse function");

    let redusevalue = data.reduse((total,element) => {

        return total+element.mark;  
    },0);
    console.log("redusevalue:",redusevalue);
}
