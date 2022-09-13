
let readlineSync = require('readline-sync');
let str = readlineSync.question("Nhập tin nhắn : ")
let count = 0;
for (let i = 0; i < str.length; i++) {
    count++;
    for (let j = 0; j < str.length; j++) {
        if(str[i] == str[j]){
            count--
        }
    }
}
console.log(count)
if(count % 2 == 0){
    console.log("CHAT With her")
} else {
    console.log("Chat With He");
}