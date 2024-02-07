// Binary Search (recursive)
//https://petlatkea.notion.site/Binary-Search-recursive-ef8d8c591cbe4802b881d9f5e3c586fd

const values = [1, 2, 4, 5, 6, 9, 10, 15, 20, 25, 30];
const targetValue = 4;

function binarySearch(targetValue, array, start, end) {
  // Base case
  if (start > end) {
    return "Not found";
  }

  let middle = Math.floor((start + end) / 2);
  console.log("Middle: " + middle);
  console.log("array[middle] = " + array[middle]);

  // if found
  if (array[middle] === targetValue) {
    console.log("Found it!");
    return middle;
  }

  // if too low
  if (array[middle] < targetValue) {
    console.log("Too low!");

    return binarySearch(targetValue, array, middle + 1, end);
  }

  // if too high
  if (array[middle] > targetValue) {
    console.log("Too high!");

    return binarySearch(targetValue, array, start, middle - 1);
  }
}

const answer = binarySearch(targetValue, values, 0, values.length - 1);

console.log(answer);
