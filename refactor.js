// function bath(){
    // let bathBomb = prompt('Are you ready for a bath');
// }


    // let bathBomb = 'What scent  of bathbomb do you like?';
    // let water = 'water';
    // let candles = 'vanilla scented candles';
    // let book = 'Adventure book';

function bathNeeds() {
    let bathBomb = prompt ('Choose your bathbomb scent');
    // let bathStuff = bathBomb + water + candles + book
    // return bathStuff
    

}

function runABath(bathBomb, water, candles, book) {
    if (bathBomb) {
        console.log('Yay, we have bathBombs')
    } else {
        console.log('Oops. Fresh out of bathbombs')
    }
    let bathTime = 'The things you need to have a bath are ' + bathBomb + ', ' + water + ', ' + candles + ', and an ' + 
    book;
    // console.log('bathTime', bathTime)


    return bathTime
}

let bathStuff = bathNeeds

let bathTime = runABath ();
console.log('RunABath', runABath);
// let runABath () {

// }

// runABath('Lemon'); 
// let bathStuff = bathTime ()

// function = runABath();

// function runABath(bathBomb, water, candles, book) {
