/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    
    let map = new Map();
    
    for (let element of s) {
        const count = map.get(element) || 0;

        map.set(element, count + 1);
    }
    
    for (let element of t) {
        if (map.has(element)) {
            const count = map.get(element);
            map.set(element, count - 1);
        }
    }
    
    for (let i of map.values()) {
        if (i > 0) {
            return false
        }
    }
    
    return true
};