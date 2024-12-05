/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let s = x.toString()
    for(let i=0,j=s.length-1;i<Math.floor(s.length/2);i++,j--){
        if(s[i]!==s[j]){
            return false
        }
    }
    return true
};