// Mô hình 3 khối

/**
 * Input: giá USD, số tiền USD quy đổi ra VND
 * 
 * Process:
 *  1. Lấy input (hardcore), var USDrate = 23500, var USD = 2
 *  2. Đặt biến var VND để tính giá tiền VND được quy đổi từ USD
 *  3. Cách tính: USDrate * USD
 *  4. log kết quả ra màn hình
 * 
 * Output: số tiền sau quy đổi VND
 * 
 * 
 */

var USDrate = 23500;
var USD = 2;
var VND;

VND = USDrate * USD;
console.log("Số tiền quy đổi ra VND là:", VND)