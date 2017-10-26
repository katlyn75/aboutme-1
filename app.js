'use strict';

let totalScore = 0;
const user = prompt('Hi! What\'s your name?');

questionOne ();
questionTwo ();
questionThree ();
questionFour ();
questionFive ();
questionSix ();
questionSeven ();


function questionOne ()
{//prompts user about my kids names. 
    const myKids = prompt('Are Charlie\'s kids names Thing 1 and Thing 2?');
    console.log('user response to my kids name is ' + myKids);
    //converts myKids to lowercase and checks if matches two option. runs if else based on that.
    if (myKids.toLowerCase() === 'no' || myKids.toLowerCase() === 'n') {
        alert('Correct! My kids names are Amelia and Ayden.');
        totalScore ++;
    } else if(myKids.toLowerCase() === 'yes' || myKids.toLowerCase() === 'y') {
        alert('Sorry, that\'s not right, but that would be funny.  My kids names are Amelia and Ayden.');
    } else {
        alert('Oops. Not a valid answer. Let\'s try yes, no, y, or n on the next one.');
    }
}

function questionTwo (){
    //prompts user about dogs being pets
    const petBest = prompt('Does Charlie think dogs are the best pets?');
    console.log('response if dogs are best pets ' + petBest);
    //converts answer to lowercase runs if/else
    if(petBest.toLowerCase() === 'yes' || petBest.toLowerCase() === 'y') {
        alert('Yes, Charlie loves dogs.');
        totalScore ++;
    } else if(petBest.toLowerCase() === 'no' || petBest.toLowerCase() === 'n'){
        alert('Sorry, he does think dogs are the best.');
    } else {
        alert('Oops. Not a valid answer. Let\'s try yes, no, y, or n on the next one.');}
}

function questionThree (){
    //prompts user about charlie running a half marathon
    const runHalf = prompt('Has Charlie run a half marathon?');
    console.log('user answer to if charlie has run a half ' + runHalf);
    //converts to lowercase and runs if esle
    if(runHalf.toLowerCase() === 'yes' || runHalf.toLowerCase() === 'y'){
        alert('Yep, Charlie has run over 13 half marathons.');
        totalScore ++;
    }    else if(runHalf.toLowerCase() === 'no' || runHalf.toLowerCase() === 'n') {
        alert('Incorrect. Might not look like it but he has.');
    } else {
        alert('Oops. Not a valid answer. Let\'s try yes, no, y, or n on the next one.');
    }
}

function questionFour (){
    //prompt user about home town saves to homeTown
    const homeTown = prompt('Charlie grew up in Portland?');
    console.log('user answer to Charlie growing up in portland ' + homeTown);

    //converts answer to lowercase runs if/else
    if(homeTown.toLowerCase() === 'no' || homeTown.toLowerCase() === 'n'){
        alert('That\'s right, Charlie grew up in Astoria.');
        totalScore ++;
    } else if(homeTown.toLowerCase() === 'yes' || homeTown.toLowerCase() === 'y'){
        alert('Charlie has lived in Portland for nearly 10 years but did not grow up here. Grew up in Astoria.');
    } else {
        alert('Oops. Not a valid answer. Let\'s try yes, no, y, or n on the next one.');
    }
}

function questionFive (){
    //prompt user about charlie liking scary movies saves to scaryLike
    const scaryLike = prompt ('Does Charlie like scary movies?');
    console.log('user answer to if Charlie likes scary movies is ' + scaryLike);
    //converts response to lowercase runs if else
    if(scaryLike.toLowerCase() === 'yes' || scaryLike.toLowerCase() === 'y'){
        alert('Yes, Charlie likes scary movies!');
        totalScore ++;
    }else if(scaryLike.toLowerCase() === 'no' || scaryLike.toLowerCase() === 'n'){
        alert('You\'d be right if question was about his wife Carolyn, but Charlie likes scary movies.');
    }else {
        alert('Oops. Not a valid answer. Let\'s try yes, no, y, or n on the next one.');
    }
}

function questionSix (){
    let ageGuess = prompt('You have 4 guesses.  How old is my daughter Amelia?');
    for(let i = 0; i < 4; i++){
        if(parseInt(ageGuess) === 4) {
            alert('That\'s right! Good guess');
            totalScore ++;
            break;
        }else if (ageGuess > 4) {
            ageGuess = prompt('Oops too high. Try again.');
        }else {
            ageGuess = prompt('Oops too low. Try again.');
        }
    }
}

function questionSeven (){
    let favSport = prompt('Can you guess what is one of my favorite sports?');
    const mySport = ['basketball', 'golf', 'football'];

    while(mySport.includes(favSport) === false){
        favSport = prompt('Oops. That\'s not one of my favorite sports. Lets try again.');
    }
    alert('That\'s right! I love ' + favSport);
    totalScore ++;
}

alert('Nice job ' + user + ' you got ' + totalScore + ' right!');