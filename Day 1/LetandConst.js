'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

const PI = 3.141592653589793;

function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    
    // Print the area of the circle:
    let r = parseFloat(readLine());
    let area = PI * r * r;
    console.log(area);

    // Print the perimeter of the circle:
    let peri = 2 * PI * r;
    console.log(peri);
    try {    