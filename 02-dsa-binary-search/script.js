function binarySearch(value, values) {
  console.log("Starting binarySearch...");

  let start = 0;
  let end = values.length - 1;
  let iteration = 1;

  while (start <= end) {
    console.log();
    console.log("Iteration: " + iteration);
    iteration++;

    let middle = Math.floor((start + end) / 2);

    console.log("Start: " + start);
    console.log("End: " + end);
    console.log("Middle: " + middle);
    console.log("Values[middle] == " + values[middle]);

    // If correct
    if (value === values[middle]) {
      console.log("Index is: " + middle);
      return values[middle];
    }

    // If too low
    if (value < values[middle]) {
      console.log(value + " is lower than " + values[middle]);
      end = middle - 1;
    }

    // If too high
    else {
      console.log(value + " is higher than " + values[middle]);
      start = middle + 1;
    }
  }

  console.log("Value not found in the array.");
}

const values = [1, 2, 3, 4, 5, 8, 10, 12, 15, 20];
const targetValue = 9;
binarySearch(targetValue, values);
