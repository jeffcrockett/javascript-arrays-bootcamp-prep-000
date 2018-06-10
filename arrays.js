function addElementToBeginningOfArray(arr, e){
  for(var i=1; i<=arr.length; i++){
    arr[i] = arr[i-1];
  }
  arr[0] = e;
  return arr;
}