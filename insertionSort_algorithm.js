//Worst case O(n^2)
//if the data is almost all sorted

const insertionSort = (arr) => {
  //starting from index 1 since index 0 is already sorted
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    //the j loop is moving backwards until it finds a an element less than j
    for (let j = i - 1; j >= 0 && arr[j] > current; j--) {
      arr[j + 1] = arr[j];
    }
  }
  arr[j + 1] = current;
  return arr;
};
