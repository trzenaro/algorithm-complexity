const { performance } = require('perf_hooks');
const showMemoryUsage = require('../utils/show-memory-usage');
const list = require('../utils/sorted.json');

(async () => {
  function sequentialSearch(arr, element) {
    for (const item of arr) {
      if (element === item) {
        return true;
      }
    }
    return false;
  }

  const element = parseInt(process.argv[2], 10);

  const startTime = performance.now();
  const elementFound = sequentialSearch(list, element);
  const totalTime = performance.now() - startTime;

  console.log(`elementFound: ${elementFound}`);
  console.log(`Time spent: ${totalTime} ms`);
  showMemoryUsage();
})();
