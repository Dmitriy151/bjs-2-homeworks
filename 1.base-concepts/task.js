"use strict";
function solveEquation(a, b, c) {
  let d=Math.pow(b, 2)-4*a*c;
  //console.log('d='+d);
  let arr = [];
  if (d>0) {
    arr[0]=(-b + Math.sqrt(d) )/(2*a); 
    arr[1]=(-b - Math.sqrt(d) )/(2*a);
    //console.log(arr);
    return arr;
  }else if (d===0) {
    arr[0]=-b/(2*a);
    //console.log(arr);
    return arr;
  }else if(d<0){
    arr[0]=undefined;
    //console.log(arr);
    return arr;
  };
  

}

solveEquation();
// let result;
// result=arr;
// console.log(result);

function calculateTotalMortgage(percent, contribution, amount, countMonths) {};