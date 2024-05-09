//combinating two arrays with spread operator

const fruits = ["apple","banana","orange"];
const vegetables = ["carrot","broccoli","spinach"];
const groceries = [...fruits,...vegetables];
console.log(groceries);

//cloning objects with spread operator

const person = {
    name : "John",
    age : 30 ,
    address : "123 Main St"
}
const copyPerson = {
    ...person
} 
console.log(copyPerson);

//Merging Object with Spread Operator

const student = {
    name : "Alice",
    age : 20
}
const course = {
    courseName : "Math",
    teacher : " Mr. Smith"
}
const studentWithCourse = {
    ...student,
    ...course
}
console.log(studentWithCourse);

// Combining Nested arrays with spread Operator 

const array1 = [
    [1,2],
    [3,4],
    [5,6]
]
const array2 = [
    [7,8],
    [9,10],
    [11,12]
]
const combinedArray = [
    ...array1,
    ...array2
]
console.log(combinedArray);