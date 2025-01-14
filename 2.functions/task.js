function getArrayParams(...arr) {
  let min =  Infinity;
  let max = -Infinity;
  let sum=0;
  let avg=0;
  if (arr.length===0) {
    return 0;
  }
  for (let i = 0; i < arr.length; i++) {
    sum+=arr[i];
    //console.log('sum1='+sum);
    avg=sum/arr.length;
    avg=parseFloat(avg.toFixed(2));
    if (arr[i]>max) {
      //sum+=arr[i];
      max=arr[i];
      //console.log('max='+max);
    }if (arr[i]<min) {
      min=arr[i];
      //console.log('max='+min);
    }
    
  }
  return { min: min, max: max, avg: avg };
}
//getArrayParams(-99, 99, 10);
let result=getArrayParams(-99, 99, 10);
console.log(result);

function summElementsWorker(...arr) {
  let sum=0;
  if (arr.length===0) {
    return 0;
  }
  for (let i = 0; i < arr.length; i++) {
    sum+=arr[i];
    
  }
  return sum;
}
let result1=summElementsWorker(55, 99, 10);
//console.log('result1='+result1);

function differenceMaxMinWorker(...arr) {
  let min = 0;
  let max = 0;
  if (arr.length===0) {
    return 0;
  }
  for (let i=0; i < arr.length; i++ ){
  min=Math.min(...arr);    
  max=Math.max(...arr);

  if (arr[i]>max) {
    max=arr[i];
   // console.log('max='+max);

  }if (arr[i]<min) {
    min=arr[i];
    //console.log('max='+min);
  }

  }
  difference=max-min;
  //console.log(difference);
  return difference;
}
differenceMaxMinWorker(55, 99, 10);

function differenceEvenOddWorker(...arr) {
  let sumEvenElement=0;
  let sumOddElement=0;
  if (arr.length===0) {
    return 0;
  }  
  for (let i = 0; i< arr.length; i++) {
    if (arr[i]%2===0) {
      sumEvenElement+=arr[i];
      //console.log('EvenElement '+sumEvenElement);
    } if (arr[i]%2!==0) {
      sumOddElement+=arr[i];
      //console.log('OddElement '+sumOddElement);
    }
  }
  return (sumEvenElement-sumOddElement); 
}
differenceEvenOddWorker();

function averageEvenElementsWorker(...arr) {
  if (arr.length===0) {
    return 0;
  }
  let sumEvenElement=0; 
  let countEvenElement=0;
  for (let i = 0; i< arr.length; i++) {
    if (arr[i]%2===0) {
      sumEvenElement+=arr[i]; 
      countEvenElement+=1;
    }
    
  }
  return sumEvenElement/countEvenElement;
}
averageEvenElementsWorker();
console.log(averageEvenElementsWorker());

function makeWork (arrOfArr, func) {
  let maxWorkerResult = func(...arrOfArr[0]);
  for (let i = 0; i < arrOfArr.length; i++) {
    const workerResult = func(...arrOfArr[i]);
    if (workerResult > maxWorkerResult) {
      maxWorkerResult = workerResult;
    }
  }
  return maxWorkerResult;
}
