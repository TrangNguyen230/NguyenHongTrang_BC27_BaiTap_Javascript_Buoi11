// Mô hình 3 khối

/**
 * Input: 1 số có 2 chữ số
 * 
 * Process:
 *  1. Lấy input (hardcore), var number = 18
 *  2. Đặt biến var sum để tính tổng 2 ký số của số đã cho
 *  3. Đặt biến var tens dùng Math.floor để lấy hàng chục
 *  4. Cách tính: tens + number % 10
 *  5. log kết quả ra màn hình 
 *
 * 
 * Output: tổng 2 ký số của số đã cho
 * 
 */

var number = 18;
var sum;
var tens = Math.floor(number / 10);
sum = tens + number % 10;
console.log("Tổng 2 ký số là:", sum)