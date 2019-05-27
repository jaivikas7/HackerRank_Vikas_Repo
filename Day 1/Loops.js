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
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {

    let i = 0;
    for (i = 0; i < s.length; i++) {
        if (s.charAt(i) == 'a')
            console.log(s.charAt(i));
        else if (s.charAt(i) == 'e')
            console.log(s.charAt(i));
        else if (s.charAt(i) == 'i')
            console.log(s.charAt(i));
        else if (s.charAt(i) == 'o')
            console.log(s.charAt(i));
        else if (s.charAt(i) == 'u')
            console.log(s.charAt(i));
    }

    for (i = 0; i < s.length; i++) {
        if (s.charAt(i) != 'a' && s.charAt(i) != 'e' && s.charAt(i) != 'i' && s.charAt(i) != 'o' && s.charAt(i) != 'u')
            console.log(s.charAt(i));
    }
}

