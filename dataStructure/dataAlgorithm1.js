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

    let sum = arr[0] + sumOfArray(arr.slice(1));
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

// console.log(findOddNumber([5,2,6,7,8,5]))

//binary-search
function binarySearch(arr, target) {
    arr.sort((a, b) => a - b); // Sort the array
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        }

        if (arr[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return -1; // Return -1 if the target is not found
}

// console.log(binarySearch([1, 2, 3, 4 , 5], 1)); // This will now work correctly
//bubble sort

function bubbleSort(arr){
   let isSwap;
    for(let i = 0; i < arr.length; i++){
        isSwap = false;
        console.log("start");           
        console.log(isSwap)
        for(let j = 0; j < arr.length - 1; j++){
            console.log(arr[j], arr[j+1])
            if(arr[j] > arr[j + 1]){
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                console.log("medium");           
                console.log(isSwap)
                console.log(arr);
                isSwap = true;
                }
        }
        console.log(isSwap);
        console.log(!isSwap);
        if(!isSwap) { 
            console.log("break");           
            console.log(isSwap)
            break;
        }
    }
  return arr;
}

// console.log(bubbleSort([1,2,3,4,8,6]))

//selection sort

function selectionSort(arr){
    for(let i=0; i<arr.length; i++){
        let minIndex = i;
        console.log(minIndex)
        console.log(arr[minIndex])
        for(let j=i + 1; j<arr.length; j++){
            console.log(j);
            
            console.log(arr[j])
             console.log(minIndex)
            if(arr[j] < arr[minIndex]){
                console.log(arr[j], arr[minIndex] );
                minIndex = j;
              }
            }
       if(minIndex !== i){
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
        console.log(arr);
       }

  
            

    }
    return arr;
}

// console.log(selectionSort([1,2,3,4,5,6]))

//insertion sort

function inSertionSort(arr){
    for(let i=1; i<arr.length; i++){
         for(let j= i; j>0; j--){
            if(arr[j] < arr[j-1]){
                let temp = arr[j-1];
                arr[j-1] = arr[j];
                arr[j] = temp;

          }
        }
    }
    return arr;
}



console.log(inSertionSort([5,2,1,7,9]))