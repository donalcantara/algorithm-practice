
// // console log all numbers from 1-255
// for (var i = 0; i < 256; i++) {
// 	console.log(i);
// }

// recursive 255 function
// function twofittyfive(n){
// 	if(n<1){
// 		return n;
// 	}
// 	console.log(n);
// 	return twofittyfive(n-1);
// }

// twofittyfive(10000);

//console log all numbers 1-100, console log multiples of 3 with 'fizz', multiples of 5 with 'buzz', multiples of both with 'fizzbuzz'
// for (var i = 1; i <= 100; i++) {
// 	if (i % 3 == 0 && i % 5 == 0){
// 		console.log('fizzbuzz')
// 	}
// 	else if (i % 3 == 0) {
// 		console.log('fizz')
// 	}
// 	else if (i % 5 == 0) {
// 		console.log('buzz')
// 	}
// 	else (console.log(i))
// }

// console log all odd numbers from 1-1000
// for (var i = 0; i < 1001; i++) {
// 	if (i % 2 != 0){
// 		console.log(i);
// 	}
// }

//print the sum of all the odd numbers from 1 to 500
// sum = 0;
// for (var i = 0; i < 501; i++) {
// 	if (i % 2 != 0){
// 	sum = sum + i;
// 	}
// }
// console.log(sum);

//console log every element in the array
// x = [1,3,5,7,9,13];
// for (i = 0; i < x.length; i++){
// 	console.log(x[i]);
// }

// find the max
// x = [-3, 3, 5, 7];
// var max = x[0];

// for (i=0; i<=x.length; i++){
//     if (x[i]>max) {
//         max = x[i];
//     }
// }
// console.log(max);

// function findmax(array) {
// 	var max = array[0];
// 	for (i = 1; i <= array.length; i++){
// 	    if (array[i] > max) {
// 	        max = array[i];
// 	    }
// 	}
// 	console.log(max);
// }

// findmax(x);

//find the average of an array
// x = [1,3,5,7,20];
// sum = 0;
// for (i = 0; i < x.length; i++){
// 	sum = sum + x[i];
// }
// console.log(sum/x.length);

//replaces with variable X at an index Y
// x = 10;
// y = 2;
// array = [1, 3, 5, 7];

// function insert (x, y) {
// 	array[y] = x;
// 	console.log(array);
// }

// insert(100,1);

// add to an array all the odd numbers from 1-255
// y = [];
// for (var i = 0; i < 256; i++) {
// 	if (i % 2 != 0){
// 		y.push(i);
// 	}
// }
// console.log(y);


// add to an array all elements of x greater than y
// y = 1;
// x = [1, 3, 5, 7, 14, 15, 19];
// o = [];

// for (var i = 0; i < x.length; i++) {
// 	if (x[i] > y){
// 		o.push(i);
// 	}
// }
// console.log(o.length);

//square each element of an array
// x = [1,3,5];
// for (i = 0; i < x.length; i++){
// 	x[i] = x[i] * x[i];
// }
// console.log(x);


// replaces all negative elements in an array with ZERO
// x = [1, -5, 10, -2];
// for (var i = 0; i < x.length; i++) {
// 	if (x[i] < 0){
// 		x[i] = 0;
// 	}
// }
// console.log(x);

//find the max, min and avg of an array
// x = [1, 0, 10, -2];
// max = x[0];
// min = x[0];
// sum = 0;

// for (i = 0; i < x.length; i++){
// 	sum = sum + x[i];
//     if (x[i]>max) {
//         max = x[i];
//     } else if (x[i] < min){
//     	min = x[i];
//     }
// }
// avg = sum/x.length;

// console.log(max);
// console.log(min);
// console.log(avg);

//shift each element in the array by one
// x = [1,3,5];
// console.log(x);

// for (i = 0; i < x.length; i++){
// 	if (x[i+1] != null){
// 		x[i] = x[i+1];
// 	}
// }
// x[x.length-1] = 0;
// console.log(x);

// replaces all negative elements with "dojo"
// x = [1, -5, 10, -2];
// for (var i = 0; i < x.length; i++) {
// 	if (x[i] < 0){
// 		x[i] = "dojo";
// 	}
// }
// console.log(x);

//populate array with 10 random numbers between 0-100
// x = [];

// for(i = 0; i < 10; i++){
// 	x.push(Math.floor(Math.random()*100));
// }
// console.log(x);

// Reverse Word order

// string = 'this is a test';

// function reverseOrder(b){
// 		if (b.length === 0){
// 			return False;
// 		}
// 		var y = b.split(" ");
// 		console.log(y);
// 		var x = [];
// 		for(var a = y.length-1; a >= 0; a--){
// 			x.push(y[a])
// 		}
// 		console.log(x);
// }

// reverseOrder(string);

//first and last numbers of array switched
// x = [2, 3, 5, 7, 6];
// console.log(x);
// temp = x[0];

// x[0] = x[x.length-1];
// x[x.length-1] = temp;

// console.log(x);

//reverse elements in array in the same order
// x = [-3,5,1,3,2,10];
// console.log(x);

// for(i = 0; i < Math.ceil(x.length/2); i++) {
// 	var temp = x[i];
// 	x[i] = x[x.length - 1 - i];
// 	x[x.length - 1 - i] = temp;
// }
// console.log(x);

//inserts at index y the x variable
// x = 10;
// y = 2;
// arr = [1, 3, 5, 7];
// console.log(arr);

// arr.push(0);

// for (var i = arr.length-1; i > y; i--) {
// 	arr[i] = arr[i-1];
// }

// arr[y] = x;
// console.log(arr);

//remove negative numbers in the array
// x = [0, -1, 2, -3, 4, -5, 6, 9, -10, 11, -20, 33];
// console.log(x);

// for (i = x.length-1; i >= 0; i--){
// 	if ( x[i] < 0) {
// 		temp = x[x.length-1];
// 		x[x.length-1] = x[i];
// 		x[i] = temp;
// 		x.pop(x[x.length-1]);
// 	}
// }
// console.log(x);

//linear search function that searches for a given number in an array
// function linearSearch(x, b) {
// 	var count = 0;
// 	for (var i = 0; i < b.length; i++) {
// 		if (b[i] == x) {
// 			count ++;
// 		};
// 	}
// 	console.log(count);
// }

// var arr = [24, 8, 23, 3, 5, 2, 0, 10, 8, 8 ,8];

// linearSearch(8, arr);   // => 1
// linearSearch(2, arr); // => false

// adding up all the numbers up to and including specified N
// function iSum(num){
// 	var sum = 0;
// 	for (var i = 1; i <= num; i++) {
// 		sum = sum + i;
// 	};
// 	console.log(sum);
// }

// iSum(20);

//multiply all the numbers up to and including specified
// function iMul(num){
// 	var product = 1;
// 	for (var i = 1; i <= num; i++) {
// 		product = product * i;
// 	};
// 	console.log(product);
// }

// iMul(5);

//recursive version
// function rSum(n) {
//   if (n == 1) {
//     return 1;
//   }
//   return n + rSum(n-1);
// }

// console.log(rSum(4));

//an interative fibonacci algorithm function
// function iterativeFibonacci(n){
// 	var fibs = [0, 1];

// 	for (var i = 0; i < n; i++){
// 		fibs.push(fibs[0] + fibs[1]);
// 		fibs.shift();
// 	}
// 	return fibs[0];
// }

// console.log(iterativeFibonacci(3));

//a recursive fibonacci algorithm function
// function recursiveFibonacci(n){

// 	if (n == 1 || n == 2) {
// 		return 1;
// 	}
// 	return recursiveFibonacci(n-1) + recursiveFibonacci(n-2);
// }

// console.log(recursiveFibonacci(20));

//make a function that rolls two die until the dice match
// function diceroll() {

// 	var rolls = 0;
// 	var min = 12;
// 	var max = 2;
// 	var avg;
// 	var sum = 0;
// 	var roll1 = 0;
// 	var roll2 = 1;

// 	while (roll1 != roll2){
// 		rolls++;
// 		var roll1 = Math.floor(Math.random()*6) + 1;
// 		var roll2 = Math.floor(Math.random()*6) + 1;
// 		var roll = roll1 + roll2;
// 		console.log("This Roll: " + roll);
// 		if(roll<min){
// 			min = roll;
// 		}
// 		if(roll>max){
// 			max = roll;
// 		}
// 		sum = sum + roll;
// 		avg = sum/rolls;
// 		console.log('Die one rolled a ' + roll1);
// 		console.log('Die two rolled a ' + roll2);
// 	}
// 	console.log('Results:')
// 	console.log("The minumum roll was: " + min);
// 	console.log("The maximum roll was: " + max);
// 	console.log("The number of rolls was: " + rolls);
// 	console.log("The average roll was: " + Math.floor(avg));
// }

// diceroll();

// create a function that adds the digits of a given number until the sum is only one digit

// function sumToOne(num){
// 	var sum = 0;
// 	while(num>0){
// 		sum+=num%10;
// 		num = Math.floor(num/10);
// 	}
// 	while(sum>=10){
// 		sum = (sum%10) + Math.floor(sum/10);
// 		}
// 	console.log(sum);
// }

// sumToOne(1007);

//function that does the fibonacci sequence iteratively
// function iterFib(n){
// 	var fibo = [0,1];
// 	for(var i=1; i< n; i++){
// 		fibo.push(fibo[i] + fibo[i-1]);
// 	}
// 	console.log(fibo)
// 	console.log(fibo[n]);
// }

// iterFib(5);

//push front function - adding a number to the front of an array
// function pushFront (array, num){
// 	for(var i = array.length; i>0; i--){
// 		array[i] = array[i-1];
// 	}
// 	array[0] = num;
// 	console.log(array);
// }

// array = [7,986];
// num = 10;
// pushFront(array, num);

//popFront function = popping off the first item of an array
// function popFront(arr){
// 	if(arr.length < 2){
// 		console.log(arr);
// 	}
// 	for(var i = 0; i < arr.length-1; i++) {
// 		var temp = arr[i];
// 		arr[i] = arr[i+1];
// 		arr[i+1] = temp;
// 	}
// 	console.log(arr.pop());
// 	console.log(arr);
// }

// array = [10,28,73,83];
// popFront(array);

//checking if a given number is a prime number
// function isPrime(n){
// 	var i = 2;
// 	if(n==1){
// 		return true;
// 	}
// 	while(i<n){
// 		if(n%i==0 || n%2==0){
// 			return false;
// 		}
// 	i++;
// 	}
// 	return true;
// }

// console.log(isPrime(53));

//recursive binary search
// function RbSearch(arr, val, min, mid, max){
// 	if(min===undefined){
// 		min = 0;
// 		max = arr.length-1;
// 		mid = Math.floor(arr.length/2);
// 	}
// 	if(min>max){
// 		return false;
// 	}
// 	if(arr[mid]==val){
// 		return mid;
// 	}
// 	if(arr[mid]>val){
// 		max = mid-1;
// 		mid = max;
// 		return RbSearch(arr, val, min, mid, max);
// 	}
// 	if(arr[mid]<val){
// 		min = mid+1;
// 		mid = min;
// 		return RbSearch(arr, val, min, mid, max);
// 	}
// }

// array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
// console.log(RbSearch(array,29));


// Basic: Make a function that can be used anywhere in your file and that when invoked will console.log('I am running!'); Give it the name runningLogger.

// function runningLogger(){
// 	console.log('I am running!');
// }

// Basic: Make a function that is callable, has one parameter and multiplies the value of the parameter by 10 before returning the result. Give it the name multiplyByTen. Invoke it, passing it the argument 5.

// function multiplyByTen(a){
// 	answer = a * 10;
// 	console.log(answer);
// }

// multiplyByTen(5);

// Basic: Write two functions (stringReturnOne and stringReturnTwo) that each return a different hard-coded string

// function stringReturnOne() {
// 	console.log('hard-coded strang');
// }

// function stringReturnTwo() {
// 	console.log('hard-coded string');
// }

// Medium: Write a function named caller that has one parameter. If the argument provided to caller is a function (typeof may be useful), invoke the argument. Nothing is returned.
// var a = stringReturnTwo;

// function caller(b){
// 	if (typeof b === 'function'){
// 		stringReturnOne();
// 	}
// }

// caller(a);

// Medium: Write a function named myDoubleConsoleLog that has two parameters, if the arguments passed to the function are functions, console.log the value that each, when invoked, returns.

// function z(){
// 	console.log('hell');
// }

// function y(){
// 	console.log('yeah!');
// }

// function myDoubleConsoleLog(a, b) {
// 	if(typeof a === 'function' && typeof b === 'function'){
// 		console.log(a())
// 		console.log(b())
// 	}
// }

// myDoubleConsoleLog(z, y);

// Hard: Write a function named caller2 that has one parameter. It console.log's the string 'starting', waits 2 seconds, and then invokes the argument if the argument is a function. (setTimeout may be useful for this one.) The function should then console.log ‘ending?’ and return “interesting”. Invoke this function by passing it myDoubleConsoleLog.

// function returnSix(){
// 	return 6;
// }

// function returnHello(){
// 	return "Hello";
// }

// function caller2(someParam){
// 	console.log('Starting...')
// 	setTimeout(function(){
// 		if(typeof someParam === 'function'){
// 			console.log('About to invoke a function')
// 			someParam(returnSix, returnHello);
// 		}
// 	}, 2000);
// 	console.log('Ending?')
// 	return 'interesting'
// }

// console.log(caller2(myDoubleConsoleLog));

// Create a JavaScript object called person with the following properties/methods

// Properties
// name - set this as your own name
// distance_traveled - set this initially as zero

// var person = {
// 	name: 'Don',
// 	distance_traveled: 0
// }

// Methods
// say_name - should alert the object’s name property
// say_something - have it accept a parameter. This function should then say for example “{{your name}} says ‘I am cool’” if you pass ‘I am cool’ as an argument to this method.
// walk - have it alert for example “{{your name}} is walking” and increase distance_traveled by 3
// run - have it alert for example “{{your name}} is running” and increase distance_traveled by 10
// crawl - have it alert for example “{{your name}} is crawling” and increase distance_traveled by 1

// person = {
// 	name: 'Don',
// 	distance_traveled: 0,
// 	say_name: function(){
// 		console.log(this.name)
// 	},
// 	say_something: function(){
// 		return this.name + " says, I'm cool";
// 	},
// 	walk: function(){
// 		console.log(this.name + ' is walking')
// 		person.distance_traveled += 3;
// 		console.log('Distance traveled: ' + person.distance_traveled)
// 	},
// 	run: function(){
// 		console.log(this.name + ' is running')
// 		person.distance_traveled += 10;
// 		console.log('Distance traveled: ' + person.distance_traveled)
// 	},
// 	crawl: function() {
// 		console.log(person.name + ' is crawling')
// 		person.distance_traveled += 1;
// 		console.log('Distance traveled: ' + person.distance_traveled)
// 	}
// };

// person.run();person.walk();person.crawl();person.run();person.crawl();


// function personConstructor(name) {
// 		return {
// 		name: name,
// 		distance_traveled: 0,
// 		say_name: function(){
// 			console.log(this.name)
// 		},
// 		say_something: function(something){
// 			return this.name + " says, " + something;
// 		},
// 		walk: function(){
// 			console.log(this.name + ' is walking')
// 			person.distance_traveled += 3;
// 			console.log('Distance traveled: ' + personConstructor.distance_traveled)
// 		},
// 		run: function(){
// 			console.log(this.name + ' is running')
// 			person.distance_traveled += 10;
// 			console.log('Distance traveled: ' + personConstructor.distance_traveled)
// 		},
// 		crawl: function() {
// 			console.log(person.name + ' is crawling')
// 			person.distance_traveled += 1;
// 			console.log('Distance traveled: ' + personConstructor.distance_traveled)
// 		}
// 	}
// }

// var person = personConstructor('hotness');
// console.log(person.name);
// console.log(person.crawl);

// function VehicleConstructor(name, numberOfWheels, numberOfPassengers) {
// 	var vehicle = {};

// 	vehicle.name = name
// 	vehicle.wheels = numberOfWheels
// 	vehicle.passengers = numberOfPassengers
	
// 	vehicle.makeNoise = function() {
// 		console.log('vroom');
// 	}

// 	return vehicle;
// }

// var Bike = new VehicleConstructor('Ray', 2, 1);
// Bike.makeNoise = function(){
// 	console.log('ring ring');
// }

// Bike.makeNoise();

// var Sedan = new VehicleConstructor('Blue', 4, 5);
// Sedan.makeNoise = function(){
// 	console.log('honk honk');
// }

// Sedan.makeNoise();

// var Bus = new VehicleConstructor('Yellow', 8, 10);
// Bus.pickup = function(passejero){
// 	Bus.passengers += passejero;
// 	console.log(Bus.passengers)
// }

// Bus.pickup(3);Bus.pickup(5);Bus.pickup(6);Bus.pickup(2);Bus.pickup(9);Bus.pickup(1);



// Private Methods and Variables
// function Ninja(name, age, preJob) {
// 	var self = this;
// 	var privateVar = 'this is a private variable'; //var initiated in a constructor are private
// 	var privateMethod = function(){ //same goes for var functions
// 		console.log('this is a private method for ' + self.name);
// 		console.log(this);
// 	}
// 	this.name = name;
// 	this.age = age;
// 	this.preJob = preJob;
// 	this.intro = function(){
// 		console.log('Hi!  I am ' + this.name + '. I used to be a ' + this.preJob + ' and I am ' + this.age + ' years old.');
// 		privateMethod();
// 		console.log(privateVar);
// 	}
// }

// var Pariece = new Ninja('Pariece', 24, "Teacher");
// Pariece.intro();

// function VehicleConstructor(name, numberOfWheels, numberOfPassengers, speed) {
	
// 	var distanceTraveled = 0;
// 	var updateDistranceTraveled = function(){
// 		distanceTraveled += speed
// 	}

// 	this.name = name
// 	this.wheels = numberOfWheels
// 	this.passengers = numberOfPassengers
// 	this.speed = speed
	
// 	this.makeNoise = function() {
// 		console.log('vroom');
// 	}
// 	this.move = function(){
// 		updateDistranceTraveled();
// 		this.makeNoise();
// 	}
// 	this.checkMiles = function(){
// 		console.log(distanceTraveled);
// 	}
// 	this.holler = function(){
// 		console.log(this.name);
// 		console.log(this.wheels);
// 	}
// }


// var Bike = new VehicleConstructor('Ray', 2, 1, 10);

// Bike.move();
// Bike.checkMiles();
// Bike.move();
// Bike.checkMiles();
// Bike.holler();


//adding prototypes

// function VehicleConstructor(name, numberOfWheels, numberOfPassengers, speed) {
	
// 	this.distanceTraveled = 0;
// 	this.updateDistranceTraveled = function(){
// 		this.distanceTraveled += speed
// 	}

// 	this.name = name
// 	this.wheels = numberOfWheels
// 	this.passengers = numberOfPassengers
// 	this.speed = speed
// }
	
// VehicleConstructor.prototype.makeNoise = function() {
// 	console.log('vroom');
// }
// VehicleConstructor.prototype.move = function(){
// 	this.updateDistranceTraveled();
// 	this.makeNoise();
// 	return this;
// }
// VehicleConstructor.prototype.checkMiles = function(){
// 	console.log(this.distanceTraveled);
// }
// VehicleConstructor.prototype.holler = function(){
// 	console.log(this.name);
// 	console.log(this.wheels);
// 	return this;
// }


// var Bike = new VehicleConstructor('Ray', 2, 1, 10);

// Bike.move();Bike.move();Bike.move();Bike.move();Bike.move();Bike.move();
// Bike.checkMiles();
// Bike.move();
// Bike.checkMiles();
// Bike.holler();
// Bike.checkMiles();

// console.log(Bike);
