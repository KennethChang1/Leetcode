/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const numSet = new Set(nums);
    let res = 0;
    
    for (const num of [...numSet]) {
        const prev = num - 1;
        let curr = 1;
        
        if (numSet.has(prev)) continue;
        
        let next = num + 1;
        
        while (numSet.has(next)) {
            curr++;
            next++;
        }
        
        res = Math.max(res, curr)
    }
    
    return res
};