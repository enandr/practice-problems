

function countOccurences(array,check){
  var newArray = [];
  var arrLength = array.length;
  var containerObj = {};
  var curVal="";
  for (currentIndex = 0;currentIndex<arrLength;currentIndex++){
    curVal = array[currentIndex];
    // console.log(containerObj)
    if (!containerObj[curVal]){
      containerObj[curVal] = 1
    }
    else (
      containerObj[curVal]+=1
    )
  }
  var curTotal = 0;
  var checkTotal = 0;
  for(var key in containerObj){
    checkTotal = containerObj[key];
    if (curTotal<checkTotal){
      curTotal = containerObj[key];
    }
  }
  if (containerObj[check]){
    return curTotal;
  }
  else{
    return 0;
  }

}

function wordLengths(array){
  var newArray = [];
  var valLength = 0;
  for(var index = 0;index<array.length;index++){
    valLength = array[index].length;
    newArray.push(valLength);
  }
  return newArray;
}

function getMinMaxMean(array){
  var min = array[0];
  var max = min;
  var mean = 0;
  var val = "";
  for (index = 0;index<array.length;index++){
    val = array[index];
    if (val<min){
      min = val;
    }
    if(val>max){
      max = val;
    }
    mean = mean+val;
  }
  mean = mean/array.length;
  return {
    "min":min,
    "max":max,
    "mean":mean
  }
}

function findMode(array){
  var count = 0
  var countval = "";
  var curVal="";
  var finalcount = 0;
  for (var index = 0; index<array.length; index++){
    curVal = array[index];
    count = countOccurences(array, curVal);
    if (count>finalcount){
      finalcount = count;
      countval = curVal;
    }
  }
  console.log(countval);
  return countval;
}
