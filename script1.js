function concatenateString(text, maxLength) {
  let result = '';
  for (let i = 0; i < text.length && i < maxLength; i++) {
    result += text[i].toUpperCase();
  }
  return result + '...';
}

const result = concatenateString('Longer than expected', 5);
console.log(result);

