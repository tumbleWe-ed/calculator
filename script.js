let addition = (num1,num2) => {
    return num1 + num2;
}

let subtraction = (num1,num2) => {
    return num1 - num2;
}

let multiplication = (num1,num2) => {
    return num1 * num2;
}

let division = (num1,num2) => {
    return num1 / num2;
}

let one = document.querySelector('.btn-1')
let two = document.querySelector('.btn-2')
let three = document.querySelector('.btn-3')
let four = document.querySelector('.btn-4')
let five = document.querySelector('.btn-5')
let six = document.querySelector('.btn-6')
let seven = document.querySelector('.btn-7')
let eight = document.querySelector('.btn-8')
let nine = document.querySelector('.btn-9')
let zero = document.querySelector('.btn-0')

let btnContainer = document.querySelector('.btn-container')
let output = document.querySelector('#output')

let clearBtn = document.querySelector('.btn-clear')
let backspaceBtn = document.querySelector('.btn-backspace')

let num1 = 0;

btnContainer.addEventListener('click', () => {
    output.textContent = num1
})

clearBtn.addEventListener('click', () => {
    num1 = 0;
})

backspaceBtn.addEventListener('click',() => {
    num1 = num1.slice(0,num1.length -1)
})




one.addEventListener('click',() => {
    num1 = `${num1}${1}`
})

two.addEventListener('click',() => {
    num1 = `${num1}${2}`
})

three.addEventListener('click',() => {
    num1 = `${num1}${3}`
})

four.addEventListener('click',() => {
    num1 = `${num1}${4}`
})

five.addEventListener('click',() => {
    num1 = `${num1}${5}`
})

six.addEventListener('click',() => {
    num1 = `${num1}${6}`
})

seven.addEventListener('click',() => {
    num1 = `${num1}${7}`
})

eight.addEventListener('click',() => {
    num1 = `${num1}${8}`
})

nine.addEventListener('click',() => {
    num1 = `${num1}${9}`
})

zero.addEventListener('click',() => {
    num1 = `${num1}${0}`
})


/**
 * input:1
 *      :+
 *      :1
 * 
 * 
 * code:num1 = 1
 *      plus = true
 *      num2 = 1
 * 
 * 
 * 
 */