// learning arrays
const breakfast=[];
//array methods
//we can define an array like a variable let or const
//the array index always starts with zero and all items are assigned an index
// primitive data types have a fixed memory
//referance data points are very dynamic in nature 
//primitive data types are stored in a data structure  known as stack 
//reference data types are stored in a data structure known as heap
//reference data types include functions arrays objects maps sets

//check if it is an array 
const student =["musab", "omar", "yahye", ];
Array.isArray(student); //this will result in a boolean if it returns true then it is an array if it returns false it is not an array

//array.length lets make a function that returns an array length 
//length will count how many elements are in the array
function arrayLength(arr) {
    const len = arr.length;
    return console.log('The length of an array is');
}
arrayLength(student);

//access an element in an array 
//to access an element we need to use the index 
console.log(student[0]); // acceses 0 index

//changing an element in the array 
// change musab to abdi
console.log(student[0] = "abdi");
console.log[student];

//nested arrays
let nestedArray= [[1, 2], [ 'henry', 'george', 'micheal'], [true, false], ]; 
console.log(nestedArray)
//accessing elements in the nested array
//accessing george
console.log(nestedArray[1][1]);
//concatenating arrays 
let newStudents=["musab", "kaif", "uthman"];
console.log(student.concat(newStudents));
console.log(student);
//adding to the end of an array
student.push(1000);
console.log(student);
//adding to the front of an array
student.unshift(2000);
console.log(student);
//splice arrays
student.splice(1, 4);
console.log(student);
// join - converting to a csv format
let csv = newStudents.join(':')
//jiun changes the array to a string 
console.log(csv);
console.log(typeof(csv));
//includes does shopping list include rice
let shoppingList=["rice", "eggs", "bread"];
console.log(shoppingList.includes("rice"));
console.log(shoppingList.inculdes("Rice"));
//.includes is case sensitive

//LOOPS 
//first we initialize 
//then we give the condition
//then the increment 
//once the wnd condition is met the loop is met .

const array1= [1, 2, 3, 4, 5, 6];
//use a for loop to display the elements 1 by 1
for(let idx =0 ; idx < array1.length; idx++){
    console.log('value of idx', idx);
}
console.log(array1[idx]);