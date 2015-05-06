var number=[1,2,3,4,5,6,7,8,9,11,23,465];  //the array of numbers i will be testing
number.reduce(function(a,b){return a>b ? a:b}); //reduces array to return the largest

console.log(number.reduce); //prints out the reduced number, well, its suppose to anyways
