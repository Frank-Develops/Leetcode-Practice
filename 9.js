/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let num = x.toString();
    let palindrome = false;
    let count = 0;
    for(let i=num.length-1; i>=0; i--) {
        console.log(num[i]);
        console.log(num[count]);
        if(num[i] != num[count]) {
            return false
        }
        count++
    }
    return true
};