//using closures
//let multiply=function(x){
  //           return  function(y){
   //             console.log(x*y);
   //        }
   //     }

//let multiplyBytwo=multiply(2);
//multiplyBytwo(3);

// using binding
let multiply=function(x,y){
     console.log(x*y);
}
let multiplybythree=multiply.bind(this,2);
multiplybythree(3);