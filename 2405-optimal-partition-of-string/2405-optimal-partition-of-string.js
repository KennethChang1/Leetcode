/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function(s) {
    let curr = "";
    let count = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (curr.indexOf(s[i]) != -1) {
            curr = "";
            count = count + 1;
            console.log(count)
        }
        
        curr += s[i];
        console.log(curr)
    }
    
    // console.log(count)
    return count + 1
};