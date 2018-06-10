var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function destructivelyAddElementToBeginningOfArray(arr, e){
  for(var i=arr.length; i>0; i--){
    arr[i] = arr[i-1];
  }
  arr[0] = e;
  return arr;
}

function addElementToBeginningOfArray(arr, e){
  var newArray = []
  for(var i=arr.length; i>0; i--){
    newArray[i] = arr[i-1];
  }
  newArray[0] = e;
  return newArray;
}