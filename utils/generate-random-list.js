const writeFile = require('./write-file');

(async () => {
  const n = parseInt(process.argv[2], 10);
  const list = [];
  for (let i = 0; i < n; i++) {
    list.push(Math.floor(Math.random() * n));
  }
  await writeFile('random-list.json', list);
})();
