function twoSum(numbers, target) {
  let left = 0,
    right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) {
      return [left + 1, right + 1];
    } else if (sum < target) left++;
    else right--;
  }
}

console.log(twoSum([0, 0, 3, 4], 0));
console.log(twoSum([2, 7, 11, 17], 18));
