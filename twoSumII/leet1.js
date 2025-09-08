// var twoSum = function(numbers, target) {
//     let left = 0, right = numbers.length - 1;
//
//     while (left < right) {
//         if (numbers[left] + numbers[right] === target){
//             return [numbers.indexOf(left) + 1, numbers.indexOf(right) + 1]
//         }
//         console.log(numbers[left], numbers[right])
//         left++;
//         right--;
//     }
// }

//     for (let i = 0; i < numbers.length; i++) {
//         for (let j = 0; j < numbers.length; j++) {
//             console.log("i: ", numbers[i], "j: ", numbers[j])
//             if (numbers[i] + numbers[j] === target) {
//                 return [i + 1, j+ 1]
//             }
//         }
//     }
// };

// var twoSum = function(numbers, target) {
//     for (let i = 0; i < numbers.length; i++) {
//         for (let j = 0; j < numbers.length; j++) {
//             console.log("i: ", numbers[i], "j: ", numbers[j])
//             if (numbers[i] + numbers[j] === target) {
//                 return [i + 1, numbers.lastIndexOf(numbers[j]) + 1]
//             }
//         }
//     }
// };

// solution
var twoSum = function (numbers, target) {
  let left = 0,
    right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) return [left + 1, right + 1];
    else if (sum < target) left++;
    else right--;
  }
};

// console.log(twoSum([0,0,3,4], 0))
console.log(twoSum([2, 7, 11, 15], 9));
