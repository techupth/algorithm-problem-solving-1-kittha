function twoSum(numbers, target) {
  let pos = [];
  let i = 0;
  let j = 0;
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        pos.push(i);
        pos.push(j);
      }
    }
  }
  return pos;
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([2, 7, 11, 15], 23));
