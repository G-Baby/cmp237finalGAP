var dayConvert = function() { //makes the function
  var names = ["Sunday", "Monday", "Tuesday", "Wednesday", //lists the possible days of week in array
               "Thursday", "Friday", "Saturday"]; 
  var numbers = ["0", "1", "2", "3", "4", "5", "6"]; //lists the possible numbers to correlate to days of week
  return { 
    if function(names) {return names.indexOf(names);} //if you ask for the name of a week, you will get the number (index)
	if function(numbers) { return names[numbers];} //if you input a number then you will get that weekday with correlating number
  };
}();

console.log(dayConvert("Monday")); //doesnt freakin work.
