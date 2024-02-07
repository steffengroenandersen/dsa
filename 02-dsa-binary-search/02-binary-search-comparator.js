// Binary Search (compare function)
// https://petlatkea.notion.site/Binary-Search-compare-function-601fa270ac40450ea51c925a9a9a7f4e

const values = [1, 2, 3, 5, 6, 7, 10, 12, 15, 17, 20];
const targetValue = 8;

const answer = searchBinaryFunction(targetValue, values, compareFunction);
console.log(answer);

function searchBinaryFunction(targetValue, array, comparator) {
  let start = 0;
  let end = values.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    console.log("Middle: " + middle);

    if (comparator(array[middle], targetValue) === 0) {
      console.log("If equals? " + comparator(array[middle], targetValue));
      return middle;
    } else if (comparator(array[middle], targetValue) === -1) {
      console.log("If too low? " + comparator(array[middle], targetValue));
      start = middle + 1;
    } else if (comparator(array[middle], targetValue) === 1) {
      console.log("If too high? " + comparator(array[middle], targetValue));
      end = middle - 1;
    }
  }

  return "Not found";
}

function compareFunction(searchValue, targetValue) {
  // if equal
  if (searchValue === targetValue) {
    return 0;
  }

  // if too low
  if (searchValue < targetValue) {
    return -1;
  }

  // if too high
  if (searchValue > targetValue) {
    return 1;
  }
}
