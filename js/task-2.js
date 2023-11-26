"use strict";

function formatMessage(message, maxLength){
    const myString=message;
    const lengthOfString=myString.length;
    if (lengthOfString<=maxLength){
        return `"${myString}"`;
    } else {
        const reduceString=myString.slice(0,maxLength)+"...";
        return `"${reduceString}"`;
    }
}

console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"
console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"

console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
