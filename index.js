    // function 1
    //calculateDifference
function calculateDifference(num1, num2){
      if(num1 > num2){
         return (num1 - num2)
      }else{
          return (num2 - num1)
      }
     
}


const res1 = calculateDifference(5, 1);
const  res2 = calculateDifference(1, 5);
// console.log(res1);
// console.log(res2);



   // function-2
   // isOdd

function isOdd(num){
    let result;
    if((num % 2) !== 0){
        result = true
    }else{
        result = false;
    }
    return result;
}   

const result = isOdd(81);
// console.log(result);


// function -3
// findMin

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
// console.log(result2);


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
// console.log(result1);


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
// console.log(res);

// function-6
//lowercaseFirst

function lowercaseFirstLetter(text){
     let firstLetter = text.substr(0, 1).toLowerCase();
     let rest =text.substr(1);
     let newText = firstLetter + rest;
     return newText;

}
const resText = lowercaseFirstLetter("HELLO OSTAD") ;
// console.log(resText);

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
//  console.log(count);
 



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

// let resdata= findAverage([5,5,5,5]);
// console.log(resdata);


const text =  "pwwkew";




console.log("hello");

let longestS = 0;
let set = new  Set();
let left  = 0;
let right = 0;
while(right <  text.length){
   let letter  = text[right];
    console.log(letter);
    console.log(right);
    
   if(!set.has(letter)){
       set.add(letter);
       console.log(set);
       
       longestS  = Math.max(longestS, set.size);
       console.log(longestS);
       console.log('right');
       console.log(right);
       console.log('right');
       right++;
       
       
    //    pwwkew
   }else{
      
      set.delete(text[left])
      console.log(set);
      
      console.log('left')
       console.log(left)
       console.log('left')
       left++;
   }
   
   
}

// console.log(longestS);
console.log("binary search");


//binary search
const data = [2, 5, 8, 9, 10]
const size=data.length;
let key =8;
let l=0;
let r =data.length-1;
let mid = Math.floor((l+r)/2);
let stop =0;

 while (stop<size) {
    if(key == data[mid]){
        console.log(mid);
        stop=size;
        break;
    }

    if(l !== r){
        if(key<data[mid]){
            r=mid-1;
            mid = Math.floor((l+r)/2);
        }
        if(key>data[mid]){
            l=mid+1;
            mid = Math.floor((l+r)/2);
        }


    }else{
        console.log("not found");
        stop=size; 
        

    }
 }



