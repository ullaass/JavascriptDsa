const arr = [1, 2, 3, 4, "Hello", 4];
const findElement = (arr, target)=>{
    for (let x of arr){
        if(x=== target){
            return true
        }
    }

    return false;
}

console.log(findElement(arr, "Hello"));

//find element index if present

const findElementIndex = (arr, target) => {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === target){
            return i;
        }
    }
    return -1;
}

console.log(findElementIndex(arr, "Hello"));
console.log(arr.indexOf("Hello"));