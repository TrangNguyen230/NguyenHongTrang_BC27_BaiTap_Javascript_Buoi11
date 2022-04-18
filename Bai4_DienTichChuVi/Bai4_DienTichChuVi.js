// Mô hình 3 khối

/**
 * Input: chiều dài hình chữ nhật, chiều rộng hình chữ nhật
 * 
 * Process:
 *  1. Lấy input (hardcore), var length = 12, var width = 24
 *  2. Đặt biến var area để tính diện tích chữ nhật, var perimeter để tính chu vi HCN
 *  3. Cách tính: area = length * width
 *                perimeter = (length + width) * 2
 *  4. log kết quả ra màn hình
 * 
 * Output: diện tích và chu vi HCN
 */

var length = 12;
var width = 24;
var area;
var perimeter;

area = length * width;
perimeter = (length + width) * 2;

console.log("Diện tích HCN là:", area);
console.log("Chu vi HCN là:" , perimeter);