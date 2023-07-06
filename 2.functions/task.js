function getArrayParams(...arr) {
  min =  Infinity;
  max = -Infinity;
  sum=0;
  for (let index = 0; i < arr.length; index++) {
    const element = arr[i];
    sum+=arr[i];
    if (arr[i]>max) {
      //sum+=arr[i];
      max=arr[i];
    }if (arr[i]<min) {
      min=arr[i];
    }
    
  }
  return { min: min, max: max, avg: avg };
}

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
