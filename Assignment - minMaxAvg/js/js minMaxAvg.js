console.clear()

var arr = [1,2] 
var newArr = arr.length


//console.log("Min is " + min);
var min = arr[0]
for(let i = 0; i > newArr; i++){
  if(arr[i] < min) {
    min = arr[i];
  }
}

//console.log("Max is " + max); 
var max = arr[0]
for(let i = 0; i < newArr; i++){
  if(arr[i] > max) {
    max = arr[i];
  }
}

//console.log("Avaerage is " + avg)
var total = 0
for (let i = 0; i < newArr; i++) {
  total += arr[i];
}
var avg = total / newArr


//console.log(min, max ,avg)
function getNum (min , max , avg) {
  this.min = min
  this.max = max
  this.avg = avg
}
console.log("The minimum number is " + min);
console.log("The maximum number is " + max);
console.log("The avaerage number is " + avg);