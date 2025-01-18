//Question 1: counting character from the string 
//Question 2: lowest and height value from and array and remove unnecessary value
//Question 3: corresponding value from the arrays(compare value of two arrays),method 1,2.
//Question 4: recursion [sum of element of an array]
  
  //........1
  // counting character from the string

const str = "Hello, World!";
function characterCount (str) {
     //remove unnecessary character
     str = str.replace(/[^a-zA-Z]/g, '');
     let charList = {};
     for (let i = 0; i < str.length; i++) {
        

       let char = str[i].toLowerCase();
       //remove unnecessary character
        //  if(char === " " || char === '.' || char === ',' || char === '?' || char === '!') {
        //      console.log(typeof char)
        //       continue;
        //  }

       if (charList[char] > 0) {
           charList[char]++;
           } else {
                            
               charList[char] = 1;
          }
        }
        return charList;
}

// console.log(characterCount(str))

  //........2
  //lowest and height value from and array and remove unnecessary value
 
  const arr =[5, 8, 9, 2, 1, -3, -7, "string", 7, 3, 6, 4, 0];
 
  function lowestAndHighestValue(arr) {
     if(arr.length === 0){
        return "Array is empty. Please add some values.";
     }
    let lowest = arr[0];
    let highest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        //skip non-numeric value
       if(typeof arr[i] === "string"){
           continue ;
       }

       if(lowest > arr[i]){
           lowest = arr[i];
       }

       if( highest < arr[i]){
          highest = arr[i];
       }

       
    }

    return [lowest, highest];

  }

//   console.log(lowestAndHighestValue(arr))
 
//Question 3: corresponding value from the arrays(compare value of two arrays),method 1,2.
  //method 1
  // console.log(5 ** 3)


//Question 4: recursion [sum of element of an array]

function sumOfArray(arr){
  if(arr.length === 0){
    return 0;
  }

 let sum;
//  for(let i = 0; i < arr.length; i++){
//      sum = sum + arr[i];
//  }

sum = arr[0] + sumOfArray(arr.slice(1));
    //2+3 


  
  return sum;
}

// console.log(sumOfArray([2, 3, 5, 5]))


function findOddNumber(arr) {
    let oddNumber = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0) {
        oddNumber.push(arr[i]);
        }
      }
      return oddNumber;
}


console.log(findOddNumber([5,2,6,7,8,5]))