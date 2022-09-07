//Nhập vào 1 số n và hiển thị số fib ở vị trí n
//Hiển thị dãy và tính tổng
//Công thức F(n) = F(n - 1) + F(n - 2);
//dãy 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610...
// F(3) = F(2) + F(1) = 2 + 1 = 3

function fibonacci(number){
    if(number <= 1) {
        return 1;
    } else {
        return fibonacci(number - 2) + fibonacci(number - 1);
    }
}

let n = 5;
let sum = 0;
for (let i = 0; i <= n; i++) {
    console.log(fibonacci(i));
    sum += fibonacci(i);
}
console.log(sum);
