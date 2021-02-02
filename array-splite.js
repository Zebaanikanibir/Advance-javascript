const nums = [1, 2, 2, 6, 8, 7, 9, 4];
// const part = nums.slice(2, 5)

const remove = nums.splice(2, 3)


console.log(remove);
console.log(nums);
const together = nums.join(",")
console.log(together);