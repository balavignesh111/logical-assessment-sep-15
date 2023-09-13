'use script';

/* 1. Write a function that determines whether a given string is a valid JSON or not. */
function isValidJSON(str){
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
}
console.log(`The answer for first problem\n`)
console.log(isValidJSON('{"name":"John","age":30}'));
console.log(isValidJSON('{"name": "John","age": 30,}'));
console.log(isValidJSON('{"name":"John","age":30}'));
console.log(isValidJSON(`{"name": "John","age": 30,"city":"New York"}`));

/* 2. Write a function that finds the longest increasing subarray within an array of numbers. */

function longestIncreasingSubarray(list){
  let subArr = [],max=1,len=1,checkFirstNum = false;
  let arr = [];

  for(let i=1;i<list.length;i++){
    if(list[0] < list[i]){
      checkFirstNum = true;
    }
  }
  if(!checkFirstNum){
    arr.push(list[0]);
    return arr;
  }

  function updateArr(arr1){
    arr = arr1;
  }

  function logic(){
    for(let i=0;i<list.length-1;i++){
      if(list[i] < list[i+1]){
        subArr.push(list[i])
        len++;
        if(i+1 == list.length-1){
          subArr.push(list[i+1])
        }
        if(len > max){
          max = len;
          updateArr(subArr) 
        }
      }else if(list[i] > list[i+1]){
        subArr.push(list[i]);
        if(len >= max){
          max = len;
          updateArr(subArr) 
        }
        len = 1;
        subArr = [];
      }
    }
  }
  logic();
  return arr;
}

console.log(`The answer for second problem\n`)
console.log(longestIncreasingSubarray([1, 2, 3, 1, 2, 3, 4, 5]));
console.log(longestIncreasingSubarray([5,4,3,2,1]));
console.log(longestIncreasingSubarray([1,2,3,4,3,2,1]));

/* 3. Implement a function that performs a deep comparison between two objects to check if they are equal. */

function deepEqual(obj1, obj2) {
  let keyArr1 = Object.keys(obj1);
  let keyArr2 = Object.keys(obj2);
  let ValueArr1 = Object.values(obj1);
  let ValueArr2 = Object.values(obj2);
  let flag = true;
  if(keyArr1.length === keyArr2.length && ValueArr1.length === ValueArr2.length){
    for(let i=0;i<keyArr1.length;i++){
      if(keyArr1[i] !== keyArr2[i]){
        flag = false;
      }
    }
    for(let i=0;i<ValueArr1.length;i++){
      if(typeof ValueArr1[i] == "number" && typeof ValueArr2[i] == "number"){
        if(ValueArr1[i] !== ValueArr2[i]){
          flag = false;
        }
      }else if((typeof ValueArr1[i] == "object" && typeof ValueArr2[i] == "number") || (typeof ValueArr1[i] == "number" && typeof ValueArr2[i] == "object")){
        flag = false;
      }else if((typeof ValueArr1[i] == "object" && typeof ValueArr2[i] == "object") ){
        let arrObj1 = Object.entries(ValueArr1[i]);
        let arrObj2 = Object.entries(ValueArr2[i]);
        if(arrObj1.length == arrObj2.length){
          for(let i=0;i<arrObj1.length;i++){
            if(arrObj1[i][0] !== arrObj2[i][0] || arrObj1[i][1] !== arrObj2[i][1]){
              flag = false;
            }
          }
        }
      }
    }
  }else{
    flag = false;
  }
  return flag;
}

const objA = { a: 1, b: { c: 2 } };
const objB = { a: 1, b: { c: 2 } };
const objC = { a: 1, b: { c: 3 } };

console.log(`The answer for third problem\n`)
console.log(deepEqual(objA, objB)); 
console.log(deepEqual(objA, objC)); 

/* 4. Implement a function to calculate the factorial of a given non-negative integer using recursion. */

function factorial(n) {
  if(n >= 1){
    return n * factorial(n-1);
  }else if(n == 0){
    return 1;
  }
}


console.log(`The answer for fourth problem\n`)
console.log(factorial(0));
console.log(factorial(5));
console.log(factorial(10));

/* 5. Write a function that finds all pairs of elements in an array that add up to a specific target sum. */

function findPairsWithSum(arr, targetSum) {
  let arrPair = []
  for(let i=0;i<arr.length;i++){
    for(let j=i;j<arr.length;j++){
      if(arr[i] + arr[j] == targetSum){
        arrPair.push([arr[i],arr[j]]);
      }
    }
  }
  return arrPair;
}

console.log(`The answer for fifth problem\n`)
console.log(findPairsWithSum([1, 2, 3, 4, 5], 7));
console.log(findPairsWithSum([1, 2, 3, 4, 5], 10));
console.log(findPairsWithSum([3, 4, 2, 1, 5], 8));

/* 6. Create a function that finds the largest common prefix among an array of strings. */

function longestCommonPrefix(strings) {
  let str = strings[0],finalStr = "";
  for(let i=0;i<str.length;i++){
    let flag = true;
    for(let j=1;j<strings.length;j++){
      if(str[i] !== strings[j][i]){
        flag = false;
      }
    }
    if(!flag){
      finalStr += "";
      break;
    }else{
      finalStr += str[i];
    }
  }
  return finalStr;
}
console.log(`The answer for sixth problem\n`)
// Test cases
console.log(longestCommonPrefix(['flower', 'flow', 'flight'])); // 'fl'
console.log(longestCommonPrefix(['dog', 'car', 'race'])); // ''
console.log(longestCommonPrefix(['apple', 'app', 'apricot'])); // 'ap'



// 7.Create a function to find the nth prime number.
function nthPrime(n) {
  let num = 2,count = 0,primeNo;
  if(n >= 2){
    while(n > count){
      let primeCount = 0;
      for(let i=1;i<=10;i++){
        if(num % i === 0){
          primeCount++;
        }
        if(primeCount > 2){
          break;
        }
      }
      if(num <= 10){
        if(primeCount === 2){
          count++;
          primeNo = num;
        }
      }else if(num > 10){
        if(primeCount === 1){
          count++;
          primeNo = num;
        }
      }
      num++;
    }
  }else if(n == 1){
    return 2;
  }
  return primeNo;
}

console.log(`The answer for seventh problem\n`)
console.log(nthPrime(1)); // 2
console.log(nthPrime(5)); // 11
console.log(nthPrime(10)); // 29

// 8. Implement a function that sorts an array of objects by a specific property in ascending order.

function sortByProperty(arr, prop) {
  for(let i=0;i<arr.length-1;i++){
    for(let j=i+1;j<arr.length;j++){
      if(arr[i][prop] > arr[j][prop]){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

// Test cases
const people = [
{ name: 'John', age: 30 },
{ name: 'Alice', age: 25 },
{ name: 'Bob', age: 35 }
];

console.log(`The answer for eighth problem\n`)
console.log(sortByProperty(people, 'age'));

/* 9. Write a function that performs a deep merge of two objects, combining their properties. */

function deepMerge(obj1, obj2) {
  return {...obj1,...obj2};
}

// Test case

const obj1 = { a: { b: 2 }, c: 3 };
const obj2 = { a: { b: 4, d: 5 }, e: 6 };
console.log(`The answer for ninth problem\n`)
console.log(deepMerge(obj1, obj2));
// Output: { a: { b: 4, d: 5 }, c: 3, e: 6 }

/* 10. Create a function that performs a binary search on a sorted array and returns the index of the
target element. */

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length-1;
  while(start <= end){
    let center = Math.floor((start+end)/2);
    if(arr[center] === target){
      return center;
    }else if(target > arr[center]){
      start = center + 1;
    }else if(target <= arr[center]){
      end = center-1;
    }
  }
  return -1;
}
// Test cases
const sortedArray = [1, 3, 5, 7, 9, 11, 13];
console.log(`The answer for tenth problem\n`)
console.log(binarySearch(sortedArray, 7)); // 3
console.log(binarySearch(sortedArray, 2)); // -1 (not found)