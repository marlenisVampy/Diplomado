/**
 * Calculates the fibonacci of a given number
 * @param {int} n 
 * @returns {int} The calculated fibonacci of n
 */
const fibonacci = function(n) {
    // <code>

    if (n <= 1) return n;
        
    return fibonacci(n - 1) + fibonacci(n - 2);    
    
};

module.exports = fibonacci;