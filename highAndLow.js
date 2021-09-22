function highAndLow(numbers){
  const myArr = numbers.split(" ");
  var Size, large, small;
  large = parseInt(myArr[0]);
  small = large;
  Size = myArr.length;
  for (let i = 0; i < Size; i++){
    if (parseInt(myArr[i]) > large){
      large = myArr[i];
    }
    if (parseInt(myArr[i]) < small){
      small = myArr[i];
    }
  }
  let str = large + " " + small;
  return str;
  // ...
}
