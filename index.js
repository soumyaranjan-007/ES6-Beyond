// //Normal Function & Arrow Function
//  function subtract(a,b){
//      console.log(a-b);
//  };
//  subtract(20,10);
// let multiply=(a,b)=>console.log(a*b);
// multiply(10,20);
// function division(a,b){
//     return a/b;
// }
// let value = division(30,15);
// console.log(value);
//Object Shortend
// let firstName = "soumya";
// let lastName = "sahoo";
// let age = 28 ;
// let obj1 = {
//     firstName,
//     lastName,
//     age
// };
// console.log(obj1);
//Default Parameter in function
// let printDetails = (name1,age,city="pune")=>{
//     console.log(name1);
//     console.log(age);
//     console.log(city);
// }
// printDetails("prafull",28);
// let carDetails =(brand,model,color,engineCapacity="1000cc",engineType = "petrol")=> {
//     console.log(brand);
//     console.log(model);
//     console.log(color);
//     console.log(engineCapacity);
//     console.log(engineType)
// }
// carDetails("suzuki","ignis","black");
//Spread Operator
// let arr = [2,4,6,8];
// console.log(...arr,10,12,14);
// console.log(10,12,14,16,...arr);
// let newarr = [...arr,18,20,22];
// console.log(newarr);
//Spread Operator in Object
// let user = {
//     firstName : "soumya",
//     lastName : "sahoo"
// };
// let user2 = {
//     ...user,
//     age : 25,
//     city : "cuttack"
// }
// console.log(user2);
// Rest Operator
// function guest(firstName,lastName,age,...rest){
//     console.log(firstName,lastName,age,rest);
// }
// guest("john","dhere",25,"newyork","usa",1,2,3,4,5,6);
// //the value will be stored inside an Array
//
//destructuring and array or object
let obj1 = {
    firstName : "soumya",
    lastName : "sahoo",
    age : 28 ,
    posts : [
        {title : "post1", comment : 10},
        {title : "post2", comment : 11},
        {title : "post3", comment : 12}
    ]
}
let{firstName,lastName,age,posts} = obj1 ;
 console.log(firstName);
 console.log(lastName);
 console.log(age);
 console.log(posts);


