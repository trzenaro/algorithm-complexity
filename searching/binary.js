const { performance } = require('perf_hooks');
const showMemoryUsage = require('../utils/show-memory-usage');
const sortedList = require('../lists/sorted-list.json');

(async () => {
  function binarySearch(arr, element) {
    let start = 0,
      end = arr.length - 1;

    // Iterate while start not meets end
    while (start <= end) {
      // Find the mid index
      let mid = Math.floor((start + end) / 2);

      // If element is present at mid, return True
      if (arr[mid] === element) return true;
      // Else look in left or right half accordingly
      else if (arr[mid] < element) start = mid + 1;
      else end = mid - 1;
    }

    return false;
  }

  const element = parseInt(process.argv[2], 10);

  const startTime = performance.now();
  const elementFound = binarySearch(sortedList, element);
  const totalTime = performance.now() - startTime;

  console.log(`elementFound: ${elementFound}`);
  console.log(`Time spent: ${totalTime} ms`);
  showMemoryUsage();
})();
