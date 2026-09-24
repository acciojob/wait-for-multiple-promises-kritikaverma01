//your JS code here. If required.
const output = document.getElementById("output");

// Show loading row initially
output.innerHTML = `

  <tr>
    <td colspan="2">Loading...</td>
  </tr>
`;

// Create a promise with random delay between 1 and 3 seconds
function createPromise() {
return new Promise((resolve) => {
const delay = Math.floor(Math.random() * 3) + 1;

```
setTimeout(() => {
  resolve(delay);
}, delay * 1000);
```

});
}

// Create 3 promises
const promise1 = createPromise();
const promise2 = createPromise();
const promise3 = createPromise();

// Wait for all promises
Promise.all([promise1, promise2, promise3])
.then((results) => {

```
// Remove Loading row
output.innerHTML = "";

// Calculate total as maximum time
const total = Math.max(...results);

// Promise 1
output.innerHTML += `
  <tr>
    <td>Promise 1</td>
    <td>${results[0].toFixed(3)}</td>
  </tr>
`;

// Promise 2
output.innerHTML += `
  <tr>
    <td>Promise 2</td>
    <td>${results[1].toFixed(3)}</td>
  </tr>
`;

// Promise 3
output.innerHTML += `
  <tr>
    <td>Promise 3</td>
    <td>${results[2].toFixed(3)}</td>
  </tr>
`;

// Total
output.innerHTML += `
  <tr>
    <td><strong>Total</strong></td>
    <td><strong>${total.toFixed(3)}</strong></td>
  </tr>
`;
```

});
