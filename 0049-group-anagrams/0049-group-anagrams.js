/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = new Map();
    
    for (item of strs) {
        const reordered = reorder(item)
        
        const arr = map.get(reordered) || []
      
        map.set(reordered, [...arr, item])
    }
    
    return [...map.values()]
};

const reorder = (str) => {
    return str.split("").sort().join();
}