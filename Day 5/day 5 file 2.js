console.log("Start");

setTimeout(() => {
  console.log("Executed after 2 seconds");
}, 2000); // 2000 milliseconds = 2 seconds

console.log("End");

// setInterval()

let counter = 1;

const intervalId = setInterval(() => {
  console.log(`Count: ${counter}`);
  counter++;

  // Stop after 5 counts
  if (counter > 5) {
    clearInterval(intervalId);
    console.log("Interval stopped!");
  }
}, 1000); // Runs every 1 second


// promises

const task = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Task completed successfully!");
  } else {
    reject("Task failed!");
  }
});

task
  .then((message) => console.log("✔️", message))
  .catch((error) => console.log("❌", error));
