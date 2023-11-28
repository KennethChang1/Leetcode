/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const max = Math.max(...candies);
    let array = [];
    
    for (let el of candies) {
        if (el + extraCandies >= max) {
            array.push(true)
        } else {
            array.push(false)
        }
    }
    
    return array
};