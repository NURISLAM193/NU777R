
let number = 0;

if (number < 0) {
    console.log("Это число отрицательное");
} else {
    console.log("Это число НЕ отрицательное");
}




let btn1 = document.querySelector('#ex1 button')

btn1.addEventListener('click', () => {
    let X = document.querySelector('#ex1 #A').value
    let A = document.querySelector('#ex1 #X').value
    let span = document.querySelector('#ex1 p span')

    if (A == 0) {
        span.innerHTML = "На 0 делить нельзя"
    } else if (A % X === 0) {
        span.innerHTML = "Делится без остатка"
    } else {
        span.innerHTML = "Не делится без остатка"
    } 
})