1. (Two Sum) Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
https://leetcode.com/problems/two-sum/solutions/4171104/two-num-python/

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
The code uses a dictionary to store the indices of found objects. It goes back through the array, calculates the complement required for the value combination, and checks if it is in the dictionary. If found, it returns the indexes. Otherwise, it adds the current number and its index to the dictionary for future reference.

Complexity
Time complexity:
The time complexity of the code is O(n), where 'n' is the length of the nums array. This is because the code iterates through the array once, performing constant time operations for each element.

Space complexity:
he space complexity of the code is also O(n). In the worst case, where there are no pairs that sum up to the target,(DifferenceDict) would store all 'n' elements of the 'nums' array. Therefore, the space scales linearly with the size of the input array.

Code
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        DifferenceDict = {}
        for index,num in enumerate(nums):
            complement = target - num
            if (complement in DifferenceDict):
                return [DifferenceDict[complement], index]
            else:
                DifferenceDict[num] = index