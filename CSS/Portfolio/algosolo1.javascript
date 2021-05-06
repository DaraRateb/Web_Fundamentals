'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}



function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    const newarr=readLine().split(' ').map(newarrTemp => parseInt(newarrTemp, 10));
    var j=0;

if(n!=0){
for(var i=n-1;i>=0; i--){
    newwarr[j]=arr[i];
    j++;
    
    
}
return newarr;
}
}
main();