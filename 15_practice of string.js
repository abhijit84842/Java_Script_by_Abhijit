// includes method...(it return TRUE or False)

const sentence="The quick brown fox jumps over the lazy dog."
const word ='fox'
console.log(sentence.includes(word))        // output=> true

console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence `)