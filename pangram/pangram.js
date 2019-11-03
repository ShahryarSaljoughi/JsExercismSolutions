//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (sentence) => {
  let allChars = [
    "A","B","C","D","E","F","G","H",
    "I","J","K","L","M","N","O","P",
    "Q","R","S","T","U","V","W","X",
    "Y","Z"
  ];
  let normalizedSentence = sentence.toUpperCase();
  let isPangram = allChars.every(val => {
    return normalizedSentence.includes(val);
  })
  return isPangram;
};
