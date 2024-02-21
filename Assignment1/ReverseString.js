const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('Enter a string: ', (inputString) => {
  const reversedString = inputString.split('').reverse().join('');
  console.log('Reversed string:', reversedString);
  rl.close();
});
