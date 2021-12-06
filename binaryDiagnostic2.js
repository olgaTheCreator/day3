const fs = require('fs')
const data = fs.readFileSync('input.txt', 'utf8')
const arr1 = data.split('\n').map(a=>a.split('').map(b=>parseInt(b, 10)));


const arrayOfCommonBits = (x, y) => arr => {
    const gammaBinarySums = [];
    arr.forEach(a => {
        for (let i = 0; i < a.length; i++) {
            gammaBinarySums[i] !== undefined? gammaBinarySums[i]+=a[i] :gammaBinarySums.push(a[i]);
        }
});
    return gammaBinarySums.map(a => a/(arr.length) >= 0.5? a = x : a = y);
}

const recurse = (arr, i = 0, f) => {
    if (arr.length === 1) {
        return arr.flat();
    }

    const nextArr = arr.filter(a => a[i] === f(arr)[i]);

    return recurse(nextArr, i+1, f);

}

const arrayOfOxygen = recurse(arr1, 0, arrayOfCommonBits(1, 0));
const arrayOfCO2 = recurse(arr1, 0, arrayOfCommonBits(0, 1));

const binaryArrayToDecimalNumber = (arr) => arr.map((a, i) => a * (2 ** i)).reduce((a,b) => a+b);

console.log(binaryArrayToDecimalNumber(arrayOfOxygen.reverse()) * binaryArrayToDecimalNumber(arrayOfCO2.reverse()));