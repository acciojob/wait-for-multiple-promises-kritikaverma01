//your JS code here. If required.
const output = document.getElementById("output");

// Show Loading initially
output.innerHTML = `

  <tr>
    <td colspan="2">Loading...</td>
  </tr>
`;

// Function to create a promise
function createPromise() {
return new Promise((resolve) => {
// Random time between 1 and 3 seconds
const delay = Math.floor(Math.random() * 3) + 1;

```
setTimeout(() => {
  resolve(delay);
}, delay * 1000);
```

});
}

// Start timer for total time
const startTime = performance.now();

// Create 3 promises
const promise1 = createPromise();
const promise2 = createPromise();
const promise3 = createPromise();

// Wait for all promises
Promise.all([promise1, promise2, promise3])
.then((results) => {
// Calculate total time
const totalTime = (performance.now() - startTime) / 1000;

```
// Remove Loading row
output.innerHTML = "";

// Add Promise 1
output.innerHTML += `
  <tr>
    <td>Promise 1</td>
    <td>${results[0].toFixed(3)}</td>
  </tr>
`;

// Add Promise 2
output.innerHTML += `
  <tr>
    <td>Promise 2</td>
    <td>${results[1].toFixed(3)}</td>
  </tr>
`;

// Add Promise 3
output.innerHTML += `
  <tr>
    <td>Promise 3</td>
    <td>${results[2].toFixed(3)}</td>
  </tr>
`;

// Add Total
output.innerHTML += `
  <tr>
    <td><strong>Total</strong></td>
    <td><strong>${totalTime.toFixed(3)}</strong></td>
  </tr>
`;
```

});
