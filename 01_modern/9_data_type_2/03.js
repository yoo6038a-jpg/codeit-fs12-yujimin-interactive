let arr1 = [1, 2, 3]; // abc123
// let arr2 = [1, 2, 3]; // abc456
// console.log(arr1 === arr2);

// let obj1 = { name: "홍길동" }; // abc123
// let obj2 = { name: "홍길동" }; // abc456
// console.log(obj1 === obj2); // false

// 같은 참조만 true
let arr3 = arr1;
console.log(arr1 === arr3); // true (같은 객체)
