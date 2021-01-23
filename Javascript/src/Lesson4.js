"use strict";

function alert(arr){
	console.log(arr);
	console.log("--------------------------------------");
}

//MIN
console.log("MIN\n");

function sortNumbers(a, b){
	return a - b;
}

let numbers = [5, 88, -22, -83, 125, -99, -33, 250, 310, -500, -1, 123, 188, 0, 99, 115, 87, -2, 99];
alert(numbers);

numbers.sort(sortNumbers);
alert(numbers);

numbers.reverse();
alert(numbers);

let posNumbers = numbers.filter(function(num){return num >= 0});
alert(posNumbers);

let negNumbers = numbers.filter(function(num){return num < 0});
alert(negNumbers);

//MAX
console.log("MAX\n");

let students = [];

students.push({yearOfStuding : 2020, facultyName : "Java"});
students.push({yearOfStuding : 1999, facultyName : "Pascal"});
students.push({yearOfStuding : 2017, facultyName : "Javascript"});
students.push({yearOfStuding : 2017, facultyName : "Python"});
students.push({yearOfStuding : 2019, facultyName : "Ruby"});
students.push({yearOfStuding : 2020, facultyName : "PHP"});
students.push({yearOfStuding : 2020, facultyName : "C++"});
students.push({yearOfStuding : 2017, facultyName : "Scala"});
students.push({yearOfStuding : 2018, facultyName : "Go"});
students.push({yearOfStuding : 2019, facultyName : "Swift"});

let studentsFaculties =[];

students.forEach(student => studentsFaculties.push(Object.values(student)[1]));

alert(studentsFaculties);

let sumOfYears = students.reduce(function(sum, current){return sum + current.yearOfStuding}, 0);

alert("Sum of years: " + sumOfYears);

