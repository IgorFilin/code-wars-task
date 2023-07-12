function binarySearch(array, value) {
  let low = 0;
  let high = array.length; // Границы поиска по индексам
  let count = 0;

  while (low <= high) {
    count++;
    let mid = Math.floor((low + high) / 2); // среднее значение, индекс элемента
    let tempValue = array[mid]; // сам элемент, по индексу среднего элемента

    if (typeof tempValue === 'number') {
      if (tempValue === value) {
        return [mid, count];
      } else if (tempValue < value) {
        // если среднее значение меньше переданного то ищи во второй половине
        count++;
        low = mid + 1;
      } else if (tempValue > value) {
        count++;
        high = mid - 1;
      }
    }

    if (typeof tempValue === 'string') {
      if (tempValue === value) {
        return [mid, count];
      } else if (tempValue.localeCompare(value) === -1) {
        // если среднее значение меньше переданного то ищи во второй половине
        low = mid + 1;
      } else if (tempValue.localeCompare(value) === 1) {
        high = mid - 1;
      }
    }
  }
  return 'Значение не найдено';
}

const array = [1, 5, 8, 12, 16, 19, 34, 56, 77, 79, 89, 90, 100];
const arrayNames = [
  'agougod',
  'ajugmyn',
  'akmapce',
  'apvtfcq',
  'atehmqt',
  'bcruomj',
  'blevcgb',
  'blkwajr',
  'bnqejmb',
  'bqhfeiq',
  'bupxblb',
  'bvnnibl',
  'ckzssjf',
  'clqfswf',
  'ctyefxs',
  'cxdlsyf',
  'datacxo',
  'desjwrf',
  'ebnpaoj',
  'edlpuqp',
  'epzeseb',
  'esclmpa',
  'espfpsm',
  'ewqlyxj',
  'exkbqvf',
  'fcitlcf',
  'fjsesfi',
  'frbriap',
  'ftgnoin',
  'ftklfxb',
  'fwauvcb',
  'ggrkplq',
  'gjvdyrg',
  'gmmtxgv',
  'gmsucmu',
  'gppmvth',
  'gvwhgjt',
  'gwtoicc',
  'hhvfjkx',
  'hidwwaa',
  'hisjaln',
  'hozsucb',
  'hybojcs',
  'hyjntuy',
  'iblhibk',
  'ihkbrqo',
  'iwzoiqj',
  'iznjxmd',
  'jfaakio',
  'jorcktb',
  'jrmzggb',
  'jslbpby',
  'jxggenz',
  'jyeqkhe',
  'kbksgif',
  'kexeteo',
  'khpxprh',
  'kmpmnyj',
  'labmmjo',
  'lhelgzr',
  'loyydjs',
  'ltgkuhp',
  'lwdjlho',
  'lxkzemw',
  'mdwybgm',
  'mgesdxe',
  'mkailqu',
  'mqhdtyx',
  'mtsqbph',
  'mzrgczh',
  'ncqkemu',
  'ngxuepu',
  'niqjggj',
  'nksplzt',
  'nqtusdt',
  'nuctjqo',
  'nzdpjtb',
  'oryzoke',
  'ouyvydx',
  'oxksuzu',
  'pjtecio',
  'pnfgcrk',
  'ppmffqh',
  'pqiahog',
  'qaxrtxd',
  'qcqjpxj',
  'qelogln',
  'qftsimb',
  'qqlxbeq',
  'qqpljfq',
  'rbjjeyc',
  'ruyjcrj',
  'saonksh',
  'snctywv',
  'sqmalfp',
  'sxvfutk',
  'thjhtgh',
  'tiafcfa',
  'tjdyury',
  'tnbzigq',
  'trmxthm',
  'tsoadpm',
  'tuqcaur',
  'twgvlcv',
  'tzfpoia',
  'ukoqqqt',
  'uqklbsm',
  'vpptbha',
  'vsnfwnl',
  'vsvipke',
  'vtujqbo',
  'vxwxwzz',
  'wcpifyx',
  'wdqjwer',
  'wfxkmaa',
  'wnptxcl',
  'wucjnsi',
  'yaizmov',
  'ybtljry',
  'ydxcqby',
  'yfdhxvl',
  'ylmhfuz',
  'zcaeplc',
  'zhkvflb',
  'zikxzwc',
  'zjjgzka',
  'zsqjmav',
  'zyxutrj',
];
console.log(binarySearch(arrayNames, 'tjdyury'));

/////////////////////////////////////////// assets functions  //////////////////////////////////

function randomWord() {
  let templateWord = 'abcdefghijklmnopqrstuvwxyz';
  let word = '';
  for (let i = 0; i < 7; i++) {
    let index = Math.floor(Math.random() * templateWord.length);
    word += templateWord[index];
  }
  return word;
}

function generateArrayNames(countNames) {
  let resultArray = [];
  for (let i = 0; i < countNames; i++) {
    let word = randomWord();
    resultArray.push(word);
  }
  return resultArray.sort();
}
