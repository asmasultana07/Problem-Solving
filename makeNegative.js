/**
 * @param {number} number
 * @return {number}
 */
var makeNegative = function(number) {
    return -Math.abs(number);
};

// --- Testing in the Console ---
console.log(makeNegative(8));   // Expected Output: -8
console.log(makeNegative(-5));  // Expected Output: -5
console.log(makeNegative(0));   // Expected Output: 0