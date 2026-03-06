// 1. false
if (false) {
  console.log("실행 안 됨");
}

// 2. 0
if (0) {
  console.log("실행 안 됨");
}

// 3. -0
if (-0) {
  console.log("실행 안 됨");
}

// 4. 0n (BigInt 0)
if (0n) {
  console.log("실행 안 됨");
}

// 5. '' (빈 문자열)
if ("") {
  console.log("실행 안 됨");
}

// 6. null
if (null) {
  console.log("실행 안 됨");
}

// 7. undefined
if (undefined) {
  console.log("실행 안 됨");
}

// 8. NaN (Not a Number)
if (NaN) {
  console.log("실행 안 됨");
}
