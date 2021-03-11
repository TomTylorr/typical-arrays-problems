
exports.min = function min (array) {
  let newArr = array[1];

  if(array === undefined) {
    return 0;
  } 

  for (let i = 0, b = 1; i < array.length; i++, b++) {
    

    if (newArr < array[i]) {
      newArr = newArr;
    } else if (newArr > array[i]) {
      newArr = array[i];
    } else {
      newArr = newArr;
    }
      
  }

  return newArr;
}


exports.max = function max (array) {
  let newArr = array[1];

  if(array === undefined) {
    return 0;
  } 
  
  for (let i = 0, b = 1; i < array.length; i++, b++) {
    
  
    if (newArr > array[i]) {
      newArr = newArr;
    } else if (newArr < array[i]) {
      newArr = array[i];
    } else {
      newArr = newArr;
    }
      
  }
  
  return newArr;
  }


exports.avg = function avg (array) {
  let newArr = 0;

  if(array === undefined) {
    return 0;
  } 
  
  for (let i = 0; i < array.length; i++) {
      newArr = newArr + array[i];
  }
  
  return (newArr / (array.length));
}






