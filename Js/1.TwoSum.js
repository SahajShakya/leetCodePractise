// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let result = [];
    let sum=0;
    for(let i=0; i< nums.length; i++) {
     for(let j=i+1; j<nums.length; j++) {
         sum = nums[i]+nums[j];
         if(sum==target) {
             result.push(i,j);
             console.log(sum, result);
            return result;
         }
     }
    }
};

var twoSum2 = function(nums, target) {
    let diffNum = {};
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (complement in diffNum) {
            return [diffNum[complement], i];
        }
        diffNum[nums[i]] = i;
    }
    return [];

};

let result = twoSum([2,7,11,15],9);
console.log(result);
let result2 = twoSum2([2,7,11,15],9);
console.log(result2);


