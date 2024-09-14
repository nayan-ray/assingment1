    // function 1

function calculateDifference(num1, num2){
      return (num1 - num2)
}

// const result = calculateDifference(5, 1);
// console.log(result);

   // function-2

function isOdd(num){
    let result;
    if((num % 2) === 0){
        result = true
    }else{
        result = false;
    }
    return result;
}   

const result = isOdd(80);
console.log(result);

//filterEvenNumbers

const numbers = [5,6,2,85,24,28,29]

function filterEvenNumbers(numbers){
    let newArray = numbers.filter((a)=>{
        return ((a % 2)=== 0)
    })
    return newArray;
}

const result1 = filterEvenNumbers(numbers);
console.log(result1);

// sortArrayDescending

const number = [5,6,2,85,24,28,29]

function sortArrayDescending(nums){
     let newArray = nums.sort((a, b)=>{
          return (b - a);
     })

     return newArray;

}

const res = sortArrayDescending(number);
console.log(res);

//lowercaseFirst

function lowercaseFirstLetter(text){
     let firstLetter = text.substr(0, 1).toLowerCase();
     let rest =text.substr(1);
     let newText = firstLetter + rest;
     return newText;

}
const resText = lowercaseFirstLetter("HELLO OSTAD") ;
console.log(resText);
