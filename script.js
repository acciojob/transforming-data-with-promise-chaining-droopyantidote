// Selecting elements
const input = document.getElementById('ip');
const button = document.getElementById('btn');
const output = document.getElementById('output');

// Function to create a promise that resolves after a specified time
function delayPromise(value, time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, time);
  });
}

// Function to perform the data transformation
function processData() {
  // Getting input value
  const inputValue = parseInt(input.value);

  // Creating promise to resolve after 2 seconds with the input value
  delayPromise(inputValue, 2000)
    .then((result) => {
      // Displaying initial result
      output.textContent = `Result: ${result}`;
      return delayPromise(result * 2, 1000); // Multiplying by 2 after 1 second
    })
    .then((result) => {
      output.textContent = `Result: ${result}`;
      return delayPromise(result - 3, 1000); // Subtracting 3 after 1 second
    })
    .then((result) => {
      output.textContent = `Result: ${result}`;
      return delayPromise(result / 2, 1000); // Dividing by 2 after 1 second
    })
    .then((result) => {
      output.textContent = `Result: ${result}`;
      return delayPromise(result + 10, 1000); // Adding 10 after 1 second
    })
    .then((result) => {
      output.textContent = `Final Result: ${result}`; // Displaying final result
    })
    .catch((error) => {
      console.error('Error:', error); // Handling errors
    });
}

// Adding click event listener to the button
button.addEventListener('click', processData);
