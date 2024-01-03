let input;
const numbers = [];
let total = 0;

while (true) {
    input = prompt('Enter a number:');
    
    if (input === null || isNaN(parseFloat(input))) {
        break;
    }
    
    numbers.push(parseFloat(input));
}

for (let number of numbers) {
    total += number;
}

console.log(`The total sum of numbers is ${total}`);