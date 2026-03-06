let person1 = { name: "홍길동", age: 25 };
//let person2 = person1; // 나쁜습관
let person2 = { ...person1 }; // 좋은습관(나중에 배울 것)

person2.age = 30;

console.log("person1 => ", person1);
console.log("person2 => ", person2);
