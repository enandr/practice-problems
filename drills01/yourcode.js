// var testArray = [1, 5, 3, 2, 6]
function sumArray(array){
  var total=0;
	for (currentIndex = 0; currentIndex<array.length;currentIndex++){
    total = total + array[currentIndex];
  }
  return total;
}
// [1, 100, 2, 4, 5, 6]
function fitWithinVal(array,topRange){
  var newArray = [];
  var curVal = 0;
  var total = 0;
  for (currentIndex = 0;currentIndex<array.length;currentIndex++){
    curVal = array[currentIndex];
    if (total+curVal>topRange){

    }
    else{
      total+=curVal;
      newArray.push(curVal);
    }
  }
  return newArray;
}
// ['Clyde', 'Sue', 'Jerry', 'Jo']
function getAllNamesShorterThan(array,topRange){
  var newArray = [];
  var curName = "";
  for (currentIndex = 0;currentIndex<array.length;currentIndex++){
    curName = array[currentIndex];
    if (curName.length<topRange){
      newArray.push(curName);
    }
    else{

    }
  }
  return newArray;
}

function makeLabel(objPerson){
  var sentance = objPerson.greeting + " " + objPerson.givenName + " " + objPerson.familyName + "\n" + objPerson['home address'].streetNumber + " " + objPerson['home address'].streetName + "\n" + objPerson['home address'].city + ", " + objPerson['home address'].state + " " + objPerson['home address'].zip;
  return sentance;

}
