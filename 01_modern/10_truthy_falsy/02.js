// Falsy 8개를 제외한 모든 값

if (true) {
} // ✅
if (1) {
} // ✅
if (-1) {
} // ✅
if ("hello") {
} // ✅
if ("0") {
} // ✅ 문자열 '0'은 Truthy
if (" ") {
} // ✅ 공백 문자열도 Truthy
if ([]) {
} // ✅ 빈 배열도 Truthy
if ({}) {
} // ✅ 빈 객체도 Truthy
if (function () {}) {
} // ✅
