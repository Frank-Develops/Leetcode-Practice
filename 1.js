/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i=0; i<nums.length; i++) {
        let number = nums[i]
        for(let j=0; j<nums.length; j++) {
            if(i != j) {
                if(nums[i] + nums[j] == target) {
                    const output = [i, j]
                    return output;
                }
            }
        }
    }
};