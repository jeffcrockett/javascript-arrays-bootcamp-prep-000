function addElementToBeginningOfArray(arr, e){
  for(var i=arr.length; i>0; i--){
    arr[i] = arr[i-1];
  }
  arr[0] = e;
  return arr;
}