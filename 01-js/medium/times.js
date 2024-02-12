/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    if (n <= 0) {
        throw new Error("Invalid input: n must be a positive integer.");
      }
    
      const startTime = Date.now(); // Use Date.now() instead of performance.now()
    
      // Use a more efficient sum calculation:
      const sum = (n * (n + 1)) / 2;
    
      const endTime = Date.now();
    
      return (endTime - startTime) / 1000;
}
for (const n of [100, 100000, 1000000000]) {
    const timeInSeconds = calculateTime(n);
    console.log(`Time to calculate sum from 1 to ${n}: ${timeInSeconds.toFixed(5)} seconds`);
  }