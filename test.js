const arr = ['h', 'e', 'l', 'l', 'o']

const turnArrIntoString = (arr) => {
  return arr.reduce((acc, currentVal) => {
    debugger;
    return acc + currentVal
  }, '')
}

const str = turnArrIntoString(arr)
console.log('str', str)
