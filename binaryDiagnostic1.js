const fs = require('fs')
const data = fs.readFileSync('input.txt', 'utf8')
const arr = data.split('\n').map(a=>a.split('').map(b=>parseInt(b, 10)));

const gammaBinarySums = [];


arr.forEach(a => {
    for (let i = 0; i < a.length; i++) {
        gammaBinarySums[i] !== undefined? gammaBinarySums[i]+=a[i] :gammaBinarySums.push(a[i]);
        }
});
const gammaBinary = gammaBinarySums.map(a => a/(arr.length-1)> 0.5? a = 1: a=0);
const gammaBinaryReversed = gammaBinary.reverse();
const epsilonBinaryReversed = gammaBinaryReversed.map(a => a === 1? a = 0: a = 1);

const binaryArrayToDecimalNumber = (arr) => arr.map((a, i) => a * (2 ** i)).reduce((a,b) => a+b);

console.log(binaryArrayToDecimalNumber(gammaBinaryReversed) * binaryArrayToDecimalNumber(epsilonBinaryReversed));