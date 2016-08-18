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

// console log all odd numbers from 1-1000
// for (var i = 0; i < 1001; i++) {
// 	if (i % 2 != 0){
// 		console.log(i);
// 	}
// }

//print the sum of all the odd numbers from 1 to 5000
// sum = 0;
// for (var i = 0; i < 5001; i++) {
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
// x = [1, 5, 10, -2];
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

//adding up all the numbers up to and including specified N
// function iSum(num){
// 	var sum = 0;
// 	for (var i = 1; i <= num; i++) {
// 		sum = sum + i;
// 	};
// 	console.log(sum);
// }

// iSum(2);

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
// 		console.log("Rolled:" + roll);
// 		if(roll<min){
// 			min = roll;
// 		}
// 		if(roll>max){
// 			max = roll;
// 		}
// 		sum = sum + roll;
// 		avg = sum/rolls;
// 	}
// 	console.log("The minumum roll was:" + min);
// 	console.log("The maximum roll was:" + max);
// 	console.log("The average roll was:" + Math.floor(avg));
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

// sumToOne(8725167);

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
// console.log(RbSearch(array,63));






























