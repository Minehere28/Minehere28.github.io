/*const array = [1,2,3]
let total =0
const result = arr.reduce(
    function (previousValue, currentValue)
    console.log()
)*/
const arr=[1,2,3];
function forEach(arr, callback){
    for(let i =0; i<arr.length; i++)
        callback (arr[i], i, arr)
}

function map(arr, callback){
    const result=[]
    for (let i=0; i<arr.length; i++){
        const value = callback(arr[i], i, arr)
        result.push(value)
    }
        return result
    
}

function find(arr,callback){
    for(let i=0; i<arr.length; i++){
        const result = callback(arr[i], i, arr)
        if (result) return arr[i]
    }
    return  
}

const arr2=[1,2,3]


function includes(arr,searchString ){
    for(let i=0; i<arr.length; i++){
        if(arr[i] === searchString) return true
}
return false
}

function reduce (arr, callback, initialValue){
    let i=0

    if (!initialValue=== undefined){

    initialValue = arr[0]
    i=1
    }
    let result 
    for(let i=0; i<arr.length; i++){
        const currentValue = arr[i]
        const currentIndex = i
        initialValue= callback(initialValue, currentValue, currentIndex, arr)   
    }
    return initialValue
}
console.log (
    reduce ([1,2,3], function(previous, current, index, arr){
    console.log(previous)
    console.log(current)
    console.log('--------')
    return previous +current
    } , 0)

)
const d1= new Date()

const timeoutVariable = setTimeout
const timeoutClear

setTimeout(function(){
    const d2 = new Data()
    console.log(d2 -d1)
    console.log("showing after 3s")

}, 3000
)
//IF FETCH SUCCESS

setInterval(function()
{
    console.log('run after 1s')
}, 1000)

clearTimeout
clearInterval