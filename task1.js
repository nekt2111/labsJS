
// Task 1 ------------------------------------------------------------

let a = "hello"

function arr(N){
    if(N <= 0){
        return 'N не может быть отрицательным либо равняться нулю'
    }
    else{
        let a = []
        for(let i = 0; i < N; i++){
            a[i] = i
        }
        return a
    }
}

console.log(arr(0))
console.log(arr(-10))
console.log(arr(10))
console.log(arr(1))

// Task 2 ------------------------------------------------------------

function div(a,b,c){
    if(a % b === 0 && a % c === 0){
        return true
    }
    else {
        return false
    }
}

console.log(div(-12,2,-6))
console.log(div(12,-2,7))
console.log(div(45,-1,7))
console.log(div(45,-3,15))

// Task 3 ------------------------------------------------------------

function capitalize(s){
    if(s.length > 10 || s.length < 1){
        return 'Строка должна быть от 1 до 10 символов!'
    }
    else{
        return s[0].toUpperCase() + s.substring(1)
    }
}

console.log(capitalize('work'))
console.log(capitalize('paris'))
console.log(capitalize('omegafunfun'))
console.log(capitalize(''))
console.log(capitalize('k'))