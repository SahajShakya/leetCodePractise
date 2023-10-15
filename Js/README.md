1. (Two Sum) Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
https://leetcode.com/problems/two-sum/solutions/4170423/js-two-sum/

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]
Constraints:
2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
 
Intuition
My initial thought was just to add two numbers which is First and Second term from the array to get the the target value. Then, i realize the target can be obtained from adding any two numbers within the array.

Approach
Based on my Initial thought, it was a simple problem to solve which is iterate throgh array then check the combination, compare the target and return the result.
So based on my Initail Thought i added two number which was First and Second number of the array i.e nums[i]+ num[i+1] then iterate the array by incrementing for loop of i until the target is obtained.
But after writing the code, i realize the result can be also obtained by multiple combination of two numbers within the array. So, i had to iterate the first number with other element within the array and so-on. Thats why i addeed an additional loop to iterate to get the combination of two nums until the target is obtained. The problem of this is certain operations are repeated which i realized after sumbitting the code.

Better way would be finding the difference between the target and the current number. For eg Target is 9 and first element be 2 which result difference to be 9-2=7. Faster way would be to check if 7 is in the array of nums. If not same process is repeated until no pairs are found.

Complexity
Time complexity:
Basic way:
The code uses two nested loops. The outer loop runs 'n' times (where n is the length of the 'nums' array), and the inner loop runs at most 'n' times. Therefore, the time complexity of the code is O(n^2), where 'n' is the length of the input array.

Better Way:
The time complexity of the code is O(n), where 'n' is the length of the nums array. This is because the code iterates through the array once, performing constant time operations (hash table lookups and assignments) for each element.

Space complexity:
Basic Way:
The space complexity of the code is O(1). This is because the space used by the algorithm is constant regardless of the size of the input array. The variables 'result', 'sum', 'i', and 'j' are the only variables used, and they do not scale with the size of the input array. Additionally, the input array 'nums' is not modified in place, and no additional data structures are used that grow with the input size.

Better Way:
The space complexity of the code is also O(n). In the worst case, where there are no pairs that sum up to the target,(diffNum) would store all 'n' elements of the 'nums' array. Therefore, the space scales linearly with the size of the input array.

Code
Basic Way
/**

@param {number[]} nums
@param {number} target
@return {number[]}
/**
var twoSum = function(nums, target) {
	let result = [];
	let sum=0;
	for(let i=0; i< nums.length; i++) {
		for(let j=i+1; j<nums.length; j++) {
			sum = nums[i]+nums[j];
				if(sum==target) {
				result.push(i,j);
				return result;
			}
		}
	}
};
Better way
/*
@param {number[]} nums
@param {number} target
@return {number[]}
*/
var twoSum = function(nums, target) {
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