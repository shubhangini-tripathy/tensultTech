const words = [
    'audio', 'eye', 'aurei', 'amie', 'eat', 'if', 'am', 'age', 'fee', 'ice',
    'queue', 'akee', 'at', 'do', 'agree', 'AGE', 'EAG'
  ];
  
  const groupWords = (words) => {
    const vowels = new Set([ 'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U' ]);
    const vowelsWordMap = {};
    words.map(word => {
      const chars = word.split('');
      const key = chars.filter(c => vowels.has(c)).sort().join('');
      if (!(key in vowelsWordMap)) {
        vowelsWordMap[key] = [];
      }
      vowelsWordMap[key].push(word);
    });
  
    const result = [];
    Object.values(vowelsWordMap).map(arr => {
      if (arr.length === 1) {
        result.push(arr[0]);
      } else {
        result.push(arr);
      }
    });
    return result;
  };
  
  console.log(groupWords(words));
  