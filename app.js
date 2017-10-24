'use strict'

//prompts user about my kids names. 
const myKids = prompt('Are Charlie\'s kids names Thing 1 and Thing 2?');
console.log('user response to my kids name is ' + myKids);
//converts myKids to lowercase and checks if matches two option. runs if else based on that.
if (myKids.toLowerCase() === 'no' || myKids.toLowerCase() === 'n') {
    alert('Correct! My kids names are Amelia and Ayden.');
} else {
    alert('Sorry, that\'s not right, but that would be funny.  My kids names are Amelia and Ayden.');
}

//prompts user about dogs being pets
const petBest = prompt('Does Charlie think dogs are the best pets?');
console.log('response if dogs are best pets ' + petBest);
//converts answer to lowercase runs if/else
if(petBest.toLowerCase() === 'yes' || petBest.toLowerCase() === 'y') {
    alert('Yes, Charlie loves dogs.')
} else {
    alert('Sorry, he does think dogs are the best.')
}