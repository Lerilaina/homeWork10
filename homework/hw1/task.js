export function sum (a, b){
    return a + b;
}

export function lengthWords (word1, word2){
    let wordSum = word1 + word2;
    console.log(wordSum.split('').length);
    return (wordSum.split('').length);
}

export function sumInput() {
  let sum = 0;
  let input = prompt('Введите трехзначное число:') 
  let inputNumber = input;
  if (isNaN(inputNumber) || inputNumber === null) {
    alert('Введено не число');
    return;
  } else {
    if (inputNumber.length !== 3) {
      alert('Введено не трехзначное число');
      return;
    } else {
      inputNumber.split('').forEach(function(item) {
        sum += parseInt(item);
      })
      console.log(sum);
      return sum;
    }
  }
}