
var people = function() {  //makes a function
  var names = ["Abby", "Bob", "Cindy", "Doug", "Evan"]; //the variables are names of people in an array
  return function(number) { //the number corresponds to a name
    return names[number]; //whatever number we put in will return the corresponding name
      }
    }();
console.log(people(0)); //our names are local and cannot be accessed outside
    
