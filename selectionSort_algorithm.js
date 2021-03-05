//TIME COMPLEXITY
// O(n^2)
// potentially is better than bubble if you want to minimize the swaps

//PSEUDOCODE

// Store the first element as the smallest value you've seen so far.(store the index)
// Compare this item to the next item in the array until you find a smaller number.
// If a smaller number is found, designate that smaller number to be the new "minimum" and
// continue until the end of the array.
//If the "minimun" is not the value (index) you initally began
// with, swap the two values.
// Repeat this with the next element until the array is sorted.

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  return arr;
};

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let lowestElement = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowestElement]) lowestElement = j;
      if (i !== lowestElement) swap(arr, i, lowestElement);
    }
  }
  return arr;
};

console.log(selectionSort([20, 54, 105, 300, 1]));
