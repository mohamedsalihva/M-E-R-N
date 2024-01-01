//  {
//     function sumofsquare(arr) {
//     let sum  = 0;
//     arr.foreach((element,index) => {
//     sum = sum+element*element;
//     });
//     return sum;

//      }
//      let sumofsquareresult=sumofsquare([1,2,3,4])
//      console.log("sumofsquareresult:",sumofsquareresult)
//  }

//findfirstevennum
{
    function findfirstevennum  (arr) {
        let firstevennum=arr.find((element) => {
       return element%2 ==0;
         });
         return firstevennum;
        
     }
     let firstevennumresult =findfirstevennum([1,3,5,20,10,23,24]);
     console.log("firstevennumresult :",firstevennumresult);


//findallevennum

    function findAllEvenNum(arr) {
        let allEvenNum = arr.filter((element) => {
      return element%2 == 0;
        });
        return allEvenNum;
        
    }
    let  allEvenNumresult=findAllEvenNum([1,2,3,5,20,23,24]);
    console.log("allEvenNumresult:",allEvenNumresult)




//doubling

    function double (arr){
      let double =arr.map((element) =>{
       return element*2 ;
      });
      return double;
    }
    let doubleresult=double([3,6,9])
    console.log("doubleresult:",doubleresult)




//  function productpositive (arr) {

//   let value = arr.reduse((prod,element) => {

//   if (element > 0){

//     prod = prod*element;
//   }
//   return prod;

//   },1);
//   return value;

//  }

// let productpositiveresult=productpositive([-1,1,-2,2,-3,3])
// console.log("productpositiveresult:",productpositiveresult)
//   }


{


  function double (arr){
    double =arr.map((num) =>{
      num=num*2;
  });
   
   let doublearray=([1,2,3,4,5])
   console.log("doublearray:",doublearray)
   
   
}

}