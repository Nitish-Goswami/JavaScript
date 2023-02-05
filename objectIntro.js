// Object Declaration
var student = {
    name : "Nitish",
    age : 25
}

// Access object and its value
console.log(student.age)
console.log(student)


student.name = "Ritesh";
console.log(student.name);
console.log(student)

console.log(student.rollNo)
student.rollNo = 7019;
console.log(student)

// Square bracket notation
student["name"] = "John";
console.log(student)

// Delete object property
delete(student.name)
console.log(student)

var employee1 = {
    id : 101,
    name : "Shyam"
}
let employee2 = employee1;

console.log(employee1==employee2)
console.log(employee1===employee2)

var employee3 = {
    id : 101,
    name : "Shyam"
}

console.log(employee1==employee3)
console.log(employee1===employee3)

for(var item in student){
    console.log(item,student[item]);
}
console.log(student)

// find all keys
console.log(Object.keys(student))
console.log(Object.values(student))

// Nested Object
var student = {
    name : "abc",
    rollno : 121,
    marks : 90,
    address : {
        city : "Faridabad",
        pincode : 121004
    }
}

console.log(student)
student.address.city = "Palwal";
console.log(student.address.city);

// Array and object
var arr = new Array(1,2,3,4,5);
var obj = {
    "0" : "1",
    "1" : "2"
}
console.log(arr);
console.log(obj)
