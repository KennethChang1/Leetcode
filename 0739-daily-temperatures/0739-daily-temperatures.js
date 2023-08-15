/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temp) {
    let stack = [];
    let arr = new Array(temp.length).fill(0);
    
    for (let i = 0; i < temp.length; i++) {
        while(temp[i] > temp[stack[stack.length - 1]]) {
            let a = stack.pop();
            arr[a] = i - a;
        }
        
        stack.push(i)
    }
    return arr
};