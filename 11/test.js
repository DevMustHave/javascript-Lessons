let num1 = prompt("Введите первое число: ")
let op = prompt("Введите знак операции ")
let num2 = prompt("Введите второе число: ")

num1 = parseFloat(num1)
num2 = parseFloat(num2)

let res;

if (op === "+") {
    res = num1 + num2;
} else if (op === "-") {
    res = num1 - num2;
} else if (op === "*") {
    res = num1 * num2;
} else if (op === "/"){
    if (num2 !== 0) {
        res = num1 / num2;
    } else {
        console.log("На 0 делить нельзя")
    }
} else {
    console.log("Неизвестная операция")
}
console.log("Ответ: ", res)