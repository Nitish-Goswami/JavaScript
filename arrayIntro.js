// Array initailization
// Case 1
var size = 2;
var arr = new Array(size);
console.log(arr);
console.log(arr.length);

// Case 2
arr = [1,2,3,4,5];
console.log(arr);
console.log(arr.length);

// Case 3
arr = new Array(1,2,3,4,5);
console.log(arr);
console.log(arr.length);

arr = new Array("Nitish",25,"Male");
console.log(arr);
console.log(arr.length);

arr.push("Ritesh");
console.log(arr);
console.log(arr.length);

arr.push(12);
console.log(arr);
console.log(arr.length);

arr.pop();
arr.pop();
console.log(arr);
console.log(arr.length);

arr.push("Ritesh");
arr.push("Ritesh");
arr.push("Ritesh");

function showElement(element){
    console.log(element);
}

arr.forEach(showElement);
