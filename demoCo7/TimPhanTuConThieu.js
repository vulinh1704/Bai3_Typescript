//Mảng gồm các phần tử 0 - 10
//In ra các số không xuất hiện trong mảng
var numbers = [0, 2, 3, 5, 7, 8, 9, 10];
var missingElement = [];
for (var i = 0; i <= 10; i++) {
    if (numbers.indexOf(i) == -1) {
        missingElement.push(i);
    }
}
console.log(missingElement);
