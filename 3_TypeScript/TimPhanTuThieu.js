// Cho mảng số nguyên 0 -> 10 , tìm phần tử không xuất hiện trong mảng;
//Mảng số nguyên 0 -> 10 (thiếu)
var numbers = [0, 2, 3, 5, 7, 8, 9, 10];
//Khởi tạo 1 mảng rỗng để chứa phần tử bị thiếu
var missingElements = [];
for (var i = 0; i <= 10; i++) {
    if (numbers.indexOf(i) == -1) {
        missingElements.push(i);
    }
}
console.log(missingElements);
