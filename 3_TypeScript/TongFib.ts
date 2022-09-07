//Nhập vào 1 số n và hiển thị n số fibonacci và tính tổng dãy đó (dãy Fib: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

//Hàm này sẽ sử dụng đệ quy để xem số thứ n trong dãy fibonacci là bao nhiêu
//Mọi người có thể coi hàm này như 1 vòng for lặp đi lặp lại để đạt được công thức F(n) = F(n-1) + F(n-2) (ví dụ n = 2 : F(2) = F(1) + F(0) = 1 + 1 = 3)
function fibonacci(number) {
    if (number <= 1) {
        return 1;
    } else {
        return fibonacci(number - 1) + fibonacci(number - 2);
    }
}

//Ví dụ nhập n = 5 để in ra dãy fibonacci ta sẽ chạy for từ 1 đến 5
let n = 5;
//Biến này sẽ tính tổng dãy
let sum = 0;
console.log("Dãy Fibo : ")
for (let i = 0; i <= n ; i++) {
    console.log(fibonacci(i));
    sum += fibonacci(i);
}
console.log("Tổng dãy Fibonacci (từ 1 đến " + n + ") là : " + sum);