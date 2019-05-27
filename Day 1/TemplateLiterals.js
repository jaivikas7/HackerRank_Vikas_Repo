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

/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 * 
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */
function sides(strings, ...expressions) {
    let arr = [];
    let A = expressions[0];
    let P = expressions[1];

    let s = (P + Math.sqrt((P * P) - 16 * A)) / 4;
    let t = (P - Math.sqrt((P * P) - 16 * A)) / 4;

    arr.push(s);
    arr.push(t);
    arr.sort();

    return arr;
}



function main() {
    let s = +(readLine());
    let t = +(readLine());
    
    [s, t] = [s, t].sort();
    
    const [x, y] = sides`The area is: ${s * t}.\nThe perimeter is: ${2 * (s + t)}.`;
    
    console.log((s === x) ? s : -1);
    console.log((t === y) ? t : -1);
}