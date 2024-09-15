    // function 1

function calculateDifference(num1, num2){
      return (num1 - num2)
}

const res1 = calculateDifference(5, 1);
console.log(res1);

   // function-2

function isOdd(num){
    let result;
    if((num % 2) !== 0){
        result = true
    }else{
        result = false;
    }
    return result;
}   

const result = isOdd(80);
console.log(result);
// function -3

const points = [5, 2,8,6,4,3,9,50,12,98,70,500];
function findMin(points){
    let minNum = points[0];
    for(i =1; i < points.length; i++){
       if(points[i] < minNum){
        minNum =points[i];
       }
   }
   return minNum;
}

const result2 = findMin(points);
console.log(result2);

// function-4
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

// function-5
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

// function-6
//lowercaseFirst

function lowercaseFirstLetter(text){
     let firstLetter = text.substr(0, 1).toLowerCase();
     let rest =text.substr(1);
     let newText = firstLetter + rest;
     return newText;

}
const resText = lowercaseFirstLetter("HELLO OSTAD") ;
console.log(resText);

//function-7
// countVowels
function countVowels(text) {
    let total = Array.from(text).filter(a=>{
        const vowels =["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
        return vowels.find(x=>{
           return a === x;
        })

    }).length;
    return total;
    
}
 const count = countVowels("Bangladesh");
 console.log(count);
 



// function -8
// findAverage
function findAverage(numbers){
    let sum = 0;
    numbers.forEach( a => {
         sum = a + sum;
    });
    const average= sum / numbers.length;
    return average;
}

let resdata= findAverage([5,5,5,5]);
console.log(resdata);


