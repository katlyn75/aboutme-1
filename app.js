'use strict'

//prompts user about my kids names. 
const myKids = prompt('Are Charlie\'s kids names Thing 1 and Thing 2?');
console.log('user response to my kids name is ' + myKids);
//converts myKids to lowercase and checks if matches two option. runs if else based on that.
if (myKids.toLowerCase() === 'no' || myKids.toLowerCase() === 'n') {
    alert('Correct! My kids names are Amelia and Ayden.');
} else if(myKids.toLowerCase() === 'yes' || myKids.toLowerCase() === 'y') {
    alert('Sorry, that\'s not right, but that would be funny.  My kids names are Amelia and Ayden.');
} else {
    alert('Oops. Not a valid answer. Let\'s try yes, no, y, or n on the next one.');
}

//prompts user about dogs being pets
const petBest = prompt('Does Charlie think dogs are the best pets?');
console.log('response if dogs are best pets ' + petBest);
//converts answer to lowercase runs if/else
if(petBest.toLowerCase() === 'yes' || petBest.toLowerCase() === 'y') {
    alert('Yes, Charlie loves dogs.');
} else if(petBest.toLowerCase() === 'no' || petBest.toLowerCase() === 'n'){
    alert('Sorry, he does think dogs are the best.');
} else {
    alert('Oops. Not a valid answer. Let\'s try yes, no, y, or n on the next one.');
}

//prompts user about charlie running a half marathon
const runHalf = prompt('Has Charlie run a half marathon?');
console.log('user answer to if charlie has run a half ' + runHalf);
//converts to lowercase and runs if esle
if(runHalf.toLowerCase() === 'yes' || runHalf.toLowerCase() === 'y') {
    alert('Yep, Charlie has run over 13 half marathons.');
} else if(runHalf.toLowerCase() === 'no' || runHalf.toLowerCase() === 'n') {
    alert('Incorrect. Might not look like it but he has.');
} else {
    alert('Oops. Not a valid answer. Let\'s try yes, no, y, or n on the next one.');
}

//prompt user about home town saves to homeTown
const homeTown = prompt('Charlie grew up in Portland?');
console.log('user answer to Charlie growing up in portland ' + homeTown);

//converts answer to lowercase runs if/else
if(homeTown.toLowerCase() === 'no' || homeTown.toLowerCase() === 'n'){
    alert('That\'s right, Charlie grew up in Astoria.');
} else if(homeTown.toLowerCase() === 'yes' || homeTown.toLowerCase() === 'y'){
    alert('Charlie has lived in Portland for nearly 10 years but did not grow up here. Grew up in Astoria.');
} else {
        alert('Oops. Not a valid answer. Let\'s try yes, no, y, or n on the next one.');
}

//prompt user about charlie liking scary movies saves to scaryLike
const scaryLike = prompt ('Does Charlie like scary movies?');
console.log('user answer to if Charlie likes scary movies is ' + scaryLike);
//converts response to lowercase runs if else
if(scaryLike.toLowerCase() === 'yes' || scaryLike.toLowerCase() === 'y'){
    alert('Yes, Charlie likes scary movies!')
}else if(scaryLike.toLowerCase() === 'no' || scaryLike.toLowerCase() === 'n'){
    alert('You\'d be right if question was about his wife Carolyn, but Charlie likes scary movies.')
}else {
    alert('Oops. Not a valid answer. Let\'s try yes, no, y, or n on the next one.');
}

