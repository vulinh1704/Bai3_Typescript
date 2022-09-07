// Cho mảng số nguyên 0 -> 10 , tìm phần tử không xuất hiện trong mảng;

//Mảng số nguyên 0 -> 10 (thiếu)
let numbers: number[] = [0, 2, 3, 5, 7, 8, 9, 10];
//Khởi tạo 1 mảng rỗng để chứa phần tử bị thiếu
let missingElements: number[] = [];

//Chúng ta sẽ chạy for 1 -> 10 nhằm kiểm tra những phần tử không có trong mảng numbers
//Lệnh indexOf sẽ có nhiệm vụ kiểm tra (không có sẽ trả về -1 nên có if như dưới) và nếu không có ta sẽ thêm i vào mảng missingElements
for (let i = 0; i <= 10; i++) {
    if(numbers.indexOf(i) == -1){
        missingElements.push(i);
    }
}
console.log(missingElements);
