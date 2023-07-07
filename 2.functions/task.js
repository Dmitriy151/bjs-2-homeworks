function getArrayParams(...arr) {
  let min =  Infinity;
  let max = -Infinity;
  let sum=0;
  let avg=0;
  for (let i = 0; i < arr.length; i++) {
    sum+=arr[i];
    avg=sum/arr.length;
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
result=getArrayParams(-99, 99, 10);
console.log(result);
function summElementsWorker(...arr) {

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
