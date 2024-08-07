/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let uniqueArray = Array.from(new Set(nums))
    let count = 0;
    let highest = 0;
    for(let i = 0; i<uniqueArray.length; i++) {
        let innerCount = 0;
        for(let j=0; j<nums.length; j++) {
            if(nums[j] == uniqueArray[i]) {
                innerCount++
            }
        }
        if(innerCount >= count) {
            count = innerCount;
            highest = uniqueArray[i];
        }
    }
    return highest;
};