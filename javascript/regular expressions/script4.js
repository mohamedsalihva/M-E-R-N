console.log(" javascript regular expressions");

const str1 = "the cat is white";
const str2 = "rat eats fish";
const str3 ="is it ok fishe";
const str4 =`
hello
good meat 
is always good
hai`;


const regexp1 = /a/;
const result1 = regexp1.test (str1);  //check if str1 contains letter 'a'
console.log("result1:",result1);  
//true


const regexp2 = /A/i;   //i =case insensitive searsch
const result2 = regexp2.test (str1);   //check if str1 contains letter 'a' and performs case-insensitive search
console.log("result2:",result2); 
 //true


 const regexp3 = /ab/;
 const result3 = regexp3.test (str1);  //check if str1 contains 'ab'
 console.log("result3:",result3);  
 //false


 //[] represent range

 const regexp4 = /[crb]a/;
 const result4 = regexp4.test (str1);  //check if str1 contains 'c' 'r' or 'b' before 'a'
 console.log("result4:",result4);  
 //false

 const regexp5 = /[a-z]a/i;
 const result5 = regexp5.test (str1);  //check if str1 contains letter  between  a to z  bewfore a
 console.log("result5:",result5);   ///true


 const regexp6 = /[a-z0-9]a/i;
 const result6 = regexp6.test (str1);  //check if str1 contains letter  between  a to z  or in between digit 0-9 before a
 console.log("result6:",result6);   ///true

 
//^ represent start of a string
const regexp7 = /^rat/i;
const result7 = regexp7.test (str2);  //check if str2 start with  rat 
console.log("result7:",result7);   ///true


//$ represent end of the string
const regexp8 = /fish$/i;
const result8 = regexp8.test (str2);  //check if str2 end with  fish 
console.log("result8:",result8);   ///true



const regexp9 = /^good/im;// m flag represet multiline matching
const result9 = regexp9.test (str4);  //check if str4 start with good 
console.log("result9:",result9);   //true


const regexp10 = /good$/im;// m flag represet multiline matching
const result10 = regexp10.test (str4);  //check if str4 end with good 
console.log("result10:",result10);   //true


const regexp11 = /fishes?/im;//word  before '?' is optional matching
const result11 = regexp11.test(str3);  // it matches both fishe fishes 's' is optional
console.log("result11:",result11); //false


const regexp12 = /fish(es)?/im;//'()' represent group
const result12 = regexp12.test(str3);  // it matches both fishe fishes 'es' is optional
console.log("result12:",result12); //true


const regexp13 = /fishes*$/i;//  the letter before * can occure mutiple times in a string
const result13 = regexp13.test(str3);  // it matches both fishe fishes fishesss
console.log("result13:",result13); //true


const regexp14 = /fishes+$/i;//  the letter before '+' can occure mutiple times in a string  but occure in atleast one time
const result14 = regexp14.test(str3);  // it matches both fishes fishessss
console.log("result14:",result14); //false


const regexp15 = /fish.$/i;//  any charactor can occur after fish '.' represent any type of character
const result15 = regexp15.test(str3);  // it matches both fishe fisha fishb fish1  but does not match fish  a charcter in a place of '.' is requries
console.log("result15:",result15); //true


const regexp16 = /fishe.*$/i;//  any charactor can occur after fish '.' represent any type of character
const result16 = regexp16.test(str3);  // it matches both fishe fishes fishess   since due to '*' multiple charcter is matched

console.log("result16:",result16); //true


const str5 = "hello";







//  \ - indicate escape character used for matching any character which has special meaning
const regexp27 =/\d/i;   // if there isw any digit it will true else it will be false
const result27 = regexp27.test(str5);
console.log("result27:",result27) //false



const regexp28 =/\D/i;   //if there isw any non digit it will true else it will be false
const result28 = regexp28.test(str5);
console.log("result28:",result28) //true


//  suppose we want to match '.' in a string, since '.'has a special meaning in  regular expression it will not work as expected anmd will match everything
const regexp29 =/./i; //if there is '.' or anything it will match
const result29 = regexp29.test(str5);
console.log("result29:",result29) //true


//  so we can write it was
const regexp30 =/\./i; //if there is an any '.'in the string in match else it will be false
const result30 = regexp30.test(str5);
console.log("result30:",result30) //false

//so \ backslash) is used to escape special character




//date validation

// 1
const regexpForDate =/^\d{1,2}-\d{1,2}-\d{4}$/i; // string should start with 1 0r 2 digits then after '-'symbol,then again 1 or 2 digits,after '-' ending digit should be 4


// 2

// |  indicates or case 0|1 means either 0 or 1 can occur
const regexpForDate1 =/^([012]?\d|3[01])-([0]\d|[1][012])-(\d{4})$/i;  // in the first group if character is 0 or 1 or 2 then the second character can be any digits (0-9) or if the character 3  rthen the second character should be 0 or 1
// in the second group of if the first character is 0 then second character can be any digits (0-9)or if first character is 1 then the second character  should be 0 or 1 or 2
//in the last group four digits is allowed



//input validation
//A-Z ,a-z
//0-9
//_
//start with character



 const regexInp = /^[a-z][a-z0-9_]*$/i;

function checkresult(value){
    const result = regexpForDate.test(value);
    if (result){
        return '';

    }else{
        return 'invalid string';
    }
}
const value = "13-12-2023"
 
let validation_result = checkresult(value);
console.log("validation_result:", validation_result);

function onChange(arg){
  let validation_result = checkresult(arg.value);
  let label1 = document.getElementById('error');
  if (validation_result){
    label1.innerHTML = validation_result;
  }else{
    label1.innerHTML = validation_result;
  }
}



//(?=) - possitive lookhead , A(?=B) =>matches :A only if A is followed by B


//(?!) - negative lookhead , A(?!B) =>matches :A only if A is not followed by B

//(?<=) - positive lookbehind , (?<=B)A =>matches :A only if A is precided by B

//(?<!) - negative lookbehind , (?<!B)A =>matches :A only if A is not precided by B


let datastring = '19-12-2023';

let regex =/-\d+-/;   //it will match also '-12-' in result and gives as result array
const result = datastring.match(regex);

console.log("result:",result);


//inorder to match exactly '12'in datastring we can use lookaheads
let regex1 =/(?<=-)\d+(?=-)/; //this will exactly match '12'in string
const resulte1= datastring.match(regex1);
console.log("resulte1:",resulte1);

//example for negative lookahead and negative lookbehind
let phone = "(90)123456789";

//to match numbers outside of (90)
const phoneregex =/(?<!\()\d+(?!\))/;
const phoneregexresult = phone.match(phoneregex);
console.log("phoneregexresult:",phoneregexresult);

{



  function finduser (userId){
    let userinfo = [
      {
      id :1,
      name :"john",
      age :30,
    },
    {
      id :2,
      name :"jane",
      age :20,
    }
    ];
    let user=userinfo.find((element)=>element.id ==userId);
    return user;
  }
  let user =finduser(2);
  console.log("user:",user);





  
  function finduser1 (userId){
    let userinfo = [
      {
      id :1,
      name :"john",
      age :30,
    },
    {
      id :2,
      name :"jane",
      age :20,
    }
    ];
    setTimeout(() => {
      let user = userinfo.find(()=>userinfo.Id === userId);
      return user;
    },500);
  }
  let user1 =finduser1(1);
  console.log("user1:",user1);





  function finduser2 (userId){
    return new Promise((resolve,reject)=>{

      //invoking an asychronous operation
      setTimeout(()=>{
        let userinfo = [
          {
          id :1,
          name :"john",
          age :30,
        },
        {
          id :2,
          name :"jane",
          age :20,
        }
        ];
        let user = userinfo.find((element)=>element.id === userId);
        if (user){
          resolve(user);
        }else{
          reject('user not found')
        }
      },1000);
    });
  }

//   finduser2(3)
// //when resolved
//   .then ((user)=>{

//     console.log("\n\n");
//     console.log("user:",user);
//     console.log(user.name);

//   })
// // when rejected
//   .catch((error)=>{

//     console.log("\n\n");
//     console.log("error:",error);

//   })

//     .finally (()=>{

//   console.log("completed")

//  });


//async-await

     async function userdata() {
    
    try { //to find  .catch errror  (try catch)
      
    let userdata = await finduser2(3);

    console.log("userdata:",userdata)

    } catch (error) {
      console.log("errorr:",error.message?error.message:error);

    }finally{

      console.log("completed...")

    }
}
    userdata();








}