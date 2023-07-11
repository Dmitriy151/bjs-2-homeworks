function getArrayParams(...arr) {
  let min =  Infinity;
  let max = -Infinity;
  let sum=0;
  let avg=0;
  for (let i = 0; i < arr.length; i++) {
    sum+=arr[i];
    avg=sum/arr.length;
    avg=parseFloat(avg.toFixed(2));
    if (arr[i]>max) {
      //sum+=arr[i];
      max=arr[i];
      console.log('max='+max);
    }if (arr[i]<min) {
      min=arr[i];
      console.log('max='+min);
    }
    
  }
  return { min: min, max: max, avg: avg };
}
//getArrayParams(-99, 99, 10);
let result=getArrayParams(-99, 99, 10);
console.log(result);

function summElementsWorker(...arr) {
  for (let i = 0; i < arr.length; i++) {
    sum+=arr[i];
  }
}

function differenceMaxMinWorker(...arr) {
  let min =  0;
  let max = 0;
  let difference;
  Math.min(...arr);    
  Math.max(...arr);
  difference=max-min;
  return { difference: difference };
}

let result2=differenceMaxMinWorker(-99, 99, 10);
console.log('result2= '+result2);

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
