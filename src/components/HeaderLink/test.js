const getWordOccurrence = (sentence) => {
  const parsedSentence = [];
  const splitSentence = sentence.toLowerCase().split(' ');
  splitSentence.forEach((word) => {
    const wordIndex = parsedSentence.findIndex(({ value }) => value === word);
    // console.log(word, wordIndex);
    if (wordIndex < 0) {
      parsedSentence.push({
        value: word,
        count: 1,
      });
    } else {
      parsedSentence[wordIndex].count = parsedSentence[wordIndex].count + 1;
    }
  });
  parsedSentence.forEach(({ value, count }) =>
    console.log(`${value}: ${count}`)
  );
};

const input = 'This is a test cases and this will be written in javascript';

//getWordOccurrence(input);

const isPalindrome = (word) => {
  const splitWord = word.split('');
  const reverserWord = splitWord.reverse().join('');

  console.log(word, word === reverserWord);
};

// isPalindrome('AABBAA');
// isPalindrome('CCBBABBCC');
// isPalindrome('BAA');

// const isPalindromeRecursive = (word) => {
//   const splitWord = word.split('');
//   const isOdd = splitWord.length % 2 === 0;
//   const halfChar = isOdd
//     ? Math.ceil((splitWord.length - 1) / 2)
//     : (splitWord.length - 1) / 2;
//   //console.log(halfChar);
//   let position = halfChar - 1;
//
//   while (position >= 0) {
//     // check if pair is matching
//     const tail = splitWord.length - 1 - position;
//     console.log(position, tail);
//     position = position - 1;
//   }
// };

const isPalindromeRecursive = (word) => {
  if (word.length <= 1) return true;
  if (word[0] !== word[word.length - 1]) return false;

  const newWord = word.slice(1, word.length - 1);
  return isPalindromeRecursive(newWord);
};

console.log(isPalindromeRecursive('ABA'));
console.log(isPalindromeRecursive('AABAA'));
console.log(isPalindromeRecursive('CCBBABBCC'));
console.log(isPalindromeRecursive('CCBBABBC'));
