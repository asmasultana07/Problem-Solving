// 01.Solve Me First
var solveMeFirst = function(a, b) {
 	return a + b;
 };


 // 02.Multiply
 var multiply = function(a, b) {
  	return a * b;
 };


 // 03.Even or Odd
var evenOrOdd = function(number) {
 	return number % 2 === 0 ? "Even" : "Odd"
 };
  
 
 // 04.Return Negative
 var makeNegative = function(number) {
 	return -Math.abs(number);
 };


 // 05.Opposite Number
var opposite = function(number) {
 	return -number;
 };


 // 06. Simple Array Sum
 var simpleArraySum = function(ar) {
 	return ar.reduce((sum, current) => sum + current, 0);
 };

 // 07. sleepIn
var sleepIn = function(weekday, vacation) {
 	return !weekday || vacation;
 };

 // 08. monkeyTrouble
var monkeyTrouble = function(aSmile, bSmile) {
 	return aSmile === bSmile;
 };

 // 09.sumDouble
 var sumDouble = function(a, b) {
 	var sum = a+b;
	return a==b ? sum*2 : sum;
 };

 //10. diff21
 var diff21 = function(n) {
 	var diff = Math.abs(n-21);
	return n > 21 ? diff*2 : diff;
 };


 // 11. parrotTrouble
var parrotTrouble = function(talking, hour) {
 	return talking && (hour < 7 || hour > 20);
 };

 // 12. makes10
 var makes10 = function(a, b) {
 	return a === 10 || b ===10 || a+b === 10;
 };

 // 13. nearHundred
 var nearHundred = function(n) {
 	return Math.abs(100 - n) <= 10 || Math.abs(200 - n) <= 10;
 };


 // 14. posNeg
 var posNeg = function(a, b, negative) {
 	if(negative){
		return a < 0 && b<0;
	}
	return (a<0 && b<0) || (a>0 && b>0);
 };

 // 15. notString
 var notString = function(str) {
 	if(str.startsWith("not")){
		return str;
	}
	return "not " +str;
 };


 // 16. Compare the Triplets

 var compareTriplets = function(a, b) {
	var scoreA = 0, scoreB = 0;

	for(var i=0; i<a.length; i++){
		if(a[i] > b[i]){
			scoreA++;
		}
		else if(a[i] < b[i]){
			scoreB++;
		}
	}
 	return [scoreA, scoreB];
 };

 // 17.A Very Big Sum
var aVeryBigSum = function(ar) {
 	 var sum =0;
	 for(var i=0; i<ar.length; i++){
		sum +=ar[i];
	 }
	 return sum;
 };

 // 18. Staircase
 var staircase = function(n) {
 	 let result = [];

	for(let i=1; i<=n; i++){
		let spaces = " ".repeat(n-i);
		let hashes = "#".repeat(i);

		result.push(spaces + hashes);
	}
	return result.join("\n");
 };

 // 19. Grading Students
 var gradingStudents = function(grades) {
 	 for(let i=0; i<grades.length; i++){
		if(grades[i] >= 38){
			let nextMultipleOf5 = Math.ceil(grades[i]/5)*5;
			
			if(nextMultipleOf5 - grades[i] < 3){
				grades[i] = nextMultipleOf5;
			}
		}
	}
	return grades;
 };


 // 20. Time Conversion - x
 var timeConversion = function(s) {
 	let hour = Number(s.slice(0,2));
	let period = s.slice(-2);
	let time = s.slice(2, -2);

	if(period === "AM" && hour === 12){
		hour = 0;
	}
	else if(period === "PM" && hour !== 12){
		hour += 12;
	}

 	return hour.toString().padStart(2, '0') + time;
 };


 // 21. String Repeat
var repeatStr = function(n, s) {
 	return s.repeat(n);
 };


 // 22. Reversed Strings
 var solution = function(str) {
 	return str.split("").reverse().join("");
 };


 // 23. Sum of Positive
 var positiveSum = function(arr) {
 	return arr.filter(num => num > 0)
				.reduce((sum, num) => sum + num, 0);
 };


 // 24. Grasshopper - Summation
 var summation = function(num) {
 	return (num * (num + 1)) /2;
 };


 // 25. Convert a Boolean to a String
var booleanToString = function(b) {
 	return b.toString();
 };