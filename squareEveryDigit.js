function squareDigits(num){
  let myString = "";
  let val = 0;
  for (let i=0; i < String(num).length; i++){
    val = Number(String(num)[i])**2;
    myString = myString + val;
  }
  return Number(myString)
}
