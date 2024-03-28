// function slugify(title) {
//   // Change code below this line

//   const titleLowerCase = title.toLowerCase();

//   const slug = titleLowerCase.split(" ").join("-");

//   return slug;
//   // Change code above this line
// }

// console.log(slugify("Arrays for begginers"));

// const fruits = ["apple", "plum", "pear", "orange", "banana"];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(0, fruits.length - 1);
// const lastThreeEls = fruits.slice(fruits.length - 4, fruits.length);

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line

//   let sumArray = firstArray.concat(secondArray);

//   if (sumArray.length > maxLength) {
//     return sumArray.slice(0, maxLength);
//   }

//   return sumArray;

//   // Change code above this line
// }

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));

// function calculateTotal(number) {
//   // Change code below this line
//   let total = 0;

//   for (let i = 0; i <= number; i += 1) {
//     console.log(total);
//     total += i;
//   }

//   return total;
//   // Change code above this line
// }

// console.log(calculateTotal(3));

// function findLongestWord(string) {
//   // Change code below this line
//   const stringArr = string.split(" ");

//   let longestWord = stringArr[0];

//   for (let i = 0; i < stringArr.length; i += 1) {
//     if (stringArr[i].length > longestWord.length) {
//       longestWord = stringArr[i];
//     }
//   }

//   return longestWord;
//   // Change code above this line
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }
//   // Change code above this line
//   return numbers;
// }

// console.log(createArrayOfNumbers(1, 10));

function getEvenNumbers(start, end) {
  // Change code below this line
  const evenArr = [];

  for (let i = start; i <= end; i += 1) {
    if (i % 2 === 0) {
      console.log(i);

      evenArr.push(i);
    }
  }

  return evenArr;
  // Change code above this line
}

console.log(getEvenNumbers(3, 11));
