"use strict";
function solveEquation(a, b, c) {
  let d=Math.pow(b, 2)-4*a*c;
  console.log('d='+d);
  let arr = [];
  if (d>0) {
    arr[0]=(-b + Math.sqrt(d) )/(2*a); 
    arr[1]=(-b - Math.sqrt(d) )/(2*a);
    console.log(arr);
    return arr;
  }else if (d===0) {
    arr[0]=-b/(2*a);
    console.log(arr);
    return arr;
  }else if(d<0){
    console.log(arr);
    return arr;
  };
  

}

solveEquation();

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let s=amount;
  let p=percent/12/100;
  let n=countMonths;
  let payment = (s * (p+(p/(Math.pow((1 + p),n) - 1))));
  let sum1= (payment*n)-contribution;
  let sum=parseFloat(sum1.toFixed(2))
  console.log ('sum= '+sum);
  console.log ('payment= '+payment);
  return sum;
};

calculateTotalMortgage(10, 0, 50000, 12);