export default function maxCharFn(str) {
  let charMap = {}
  let amount = 0
  let maxChar = ""
  const strCleaned = str.replace(/\s/g,'').toLowerCase()
  
  for (let char of strCleaned) {
    charMap[char] = charMap[char] ? charMap[char] + 1 : 1;
  }
  
  for (let char in charMap) {
    if (charMap[char] > amount) {
       amount = charMap[char];
       maxChar = char;
    }
  }
  
  return [maxChar, amount];
}