def twoSum(self, nums: List[int], target: int) -> List[int]:
        DifferenceDict = {}
        for index,num in enumerate(nums):
            complement = target - num
            if (complement in DifferenceDict):
                return [DifferenceDict[complement], index]
            else:
                DifferenceDict[num] = index

print(twoSum([2,7,11,15],9))