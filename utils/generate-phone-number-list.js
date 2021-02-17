const writeFile = require('./write-file');

(async () => {
  const getRandomNumberBetween = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const getRandomDDD = () =>
    getRandomNumberBetween(11, 99).toString().padStart(2, '0');

  const getRandomNumber = () =>
    parseInt(
      `${getRandomDDD()}${getRandomNumberBetween(0, 999999999)
        .toString()
        .padStart(9, '0')}`,
      10
    );

  const n = parseInt(process.argv[2], 10);
  const list = [];
  for (let i = 0; i < n; i++) {
    list.push(getRandomNumber());
  }
  await writeFile('phone-number-list.json', list);
})();

17987654621;
