const { performance } = require('perf_hooks');
const writeFile = require('../utils/write-file');
const showMemoryUsage = require('../utils/show-memory-usage');
const list = require('../utils/random-list.json');

(async () => {
  const selectionSort = (inputArr) => {
    let n = inputArr.length;

    for (let i = 0; i < n; i++) {
      // Finding the smallest number in the subarray
      let min = i;
      for (let j = i + 1; j < n; j++) {
        if (inputArr[j] < inputArr[min]) {
          min = j;
        }
      }
      if (min != i) {
        // Swapping the elements
        let tmp = inputArr[i];
        inputArr[i] = inputArr[min];
        inputArr[min] = tmp;
      }
    }
    return inputArr;
  };

  const startTime = performance.now();
  selectionSort(list);
  const totalTime = performance.now() - startTime;

  console.log(`Time spent: ${totalTime} ms`);
  showMemoryUsage();

  writeFile('sorted.json', list);
})();
