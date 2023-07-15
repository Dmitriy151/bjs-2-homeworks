function getArrayParams(...arr) {
  let min =  Infinity;
  let max = -Infinity;
  let sum=0;
  let avg=0;
  for (let i = 0; i < arr.length; i++) {
    sum+=arr[i];
    console.log('sum1='+sum);
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
  let sum=0;
  for (let i = 0; i < arr.length; i++) {
    sum+=arr[i];
    
  }
  return sum;
}
let result1=summElementsWorker(55, 99, 10);
console.log('result1='+result1);

function differenceMaxMinWorker(...arr) {
  let min = 0;
  let max = 0;
  for (let i=0; i < arr.length; i++ )
  min=Math.min(...arr);    
  max=Math.max(...arr);

  if (arr[i]>max) {
    max=arr[i];
    console.log('max='+max);

  }if (arr[i]<min) {
    min=arr[i];
    console.log('max='+min);
  }

}if (arr.lenth===0) {
 return 0;
}
  difference=max-min;
  console.log(difference);
  return difference;
}
differenceMaxMinWorker(55, 99, 10);
//let result2=differenceMaxMinWorker();
//console.log('result2= '+result2);
//console.log('differenceMaxMinWorker= '+ differenceMaxMinWorker());

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
