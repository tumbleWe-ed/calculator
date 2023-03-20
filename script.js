//Operations
let addition = (num1,num2) => {
    return Number(num1) + Number(num2);
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


// Input Numbers
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

let btnNums = Object.values(document.getElementsByClassName('btn-num'))

//let btnContainer = document.querySelector('.btn-container')

//display, clear, and backspace buttons
let display = document.querySelector('#output')
display.textContent = '0'


let clearBtn = document.querySelector('.btn-clear')
let backspaceBtn = document.querySelector('.btn-backspace')







//Operators
let add = document.querySelector('.btn-add')
let sutract = document.querySelector('.btn-subtract')
let multiply = document.querySelector('.btn-multiply')
let divide = document.querySelector('.btn-divide')

let btnsOnOperatorColumn = Object.values(document.getElementsByClassName('operator-column'))

let num1 = 0;
let num2 = 0;

let onOperator;

let onNum1 = true;
let onNum2 = false;

let output = String();
//Equal button
let equal = document.querySelector('.btn-equal')


//Operations

add.addEventListener('click', () => {
    output = `${num1} + ${num2}` 
    display.textContent = '+'
    onNum2 = true
    onNum1 = false
    
    onOperator = 'add'

    console.log(output)
})




//Output for Clear Button, Backspace Button
clearBtn.addEventListener('click', () => {
    num1 = 0;
    num2 = 0;
    onNum1 = true
    output = '0';
    display.textContent = output


    console.log(`Num1: ${num1}`)
    console.log(`Num2: ${num2}`)
})

/**backspaceBtn.addEventListener('click',() => {
    output = output.slice(0,output.length -1)
    display.textContent = output
})**/

//Output for numbers
one.addEventListener('click',() => {
    if(onNum1){
        num1 = `${num1}${1}`
    } else if (onNum2) {
        num2 = `${num2}${1}`
    }
})

two.addEventListener('click',() => {
    if(onNum1){
        num1 = `${num1}${2}`
    } else if (onNum2) {
        num2 = `${num2}${2}`
    }

})

three.addEventListener('click',() => {
    if(onNum1){
        num1 = `${num1}${3}`
    } else if (onNum2) {
        num2 = `${num2}${3}`
    }

})

four.addEventListener('click',() => {
    if(onNum1){
        num1 = `${num1}${4}`
    } else if (onNum2) {
        num2 = `${num2}${4}`
    }
})

five.addEventListener('click',() => {
    if(onNum1){
        num1 = `${num1}${5}`
    } else if (onNum2) {
        num2 = `${num2}${5}`
    }

})

six.addEventListener('click',() => {
    if(onNum1){
        num1 = `${num1}${6}`
    } else if (onNum2) {
        num2 = `${num2}${6}`
    }

})

seven.addEventListener('click',() => {
    if(onNum1){
        num1 = `${num1}${7}`
    } else if (onNum2) {
        num2 = `${num2}${7}`
    }
})

eight.addEventListener('click',() => {
    if(onNum1){
        num1 = `${num1}${8}`
    } else if (onNum2) {
        num2 = `${num2}${8}`
    }

})

nine.addEventListener('click',() => {
    if(onNum1){
        num1 = `${num1}${9}`
    } else if (onNum2) {
        num2 = `${num2}${9}`
    }

})

zero.addEventListener('click',() => {
    if(onNum1){
        num1 = `${num1}${0}`
    } else if (onNum2) {
        num2 = `${num2}${0}`
    }
})


btnNums.forEach(btn => {
    btn.addEventListener('click',() => {
       if(onNum1){
        output = `${num1}`
        display.textContent = output
       } else if(onNum2) {
        output = `${num1} + ${num2}` 
        display.textContent = output
       }
    
    console.log(`Num1: ${num1}`)
    console.log(`Num2: ${num2}`)
    })
    
})

btnsOnOperatorColumn.forEach(btn => {
    btn.addEventListener('click', () => {
        //output = addition(num1,num2)
        if(onOperator === 'add'){
            //display.textContent = '+'
            output = `${addition(num1,num2)} +`
        } 
        equal.addEventListener('click', () => {
            output = output.slice(0,output.length - 2)
            display.textContent = output
        })

        display.textContent = output;

    console.log(`Num1: ${num1}`)
    console.log(`Num2: ${num2}`)
    })
})

console.log(`Num1: ${num1}`)
console.log(`Num2: ${num2}`)
console.log(output)