//--------------------PROMISE---------------------
//creer une nouvelle promessse 

const p = new Promise((resolve, reject) => {
    let a = 1 + 1;
    if (a == 2) {
        resolve('success')

    } else {
        reject('failer')
    }
})

//Then va fonctionner quand la promesse passe en reolve // .catch quand la promesse passe en reject
p.then((message) => {
    console.log('this is in the then' + message);
}).catch((message) => {
    console.log('this is in the catch' + message);
})


//remplacer un callback par un promesse 
//Synataxe CALLBACK
const userLeft = false;
const userWatchingCatMeme = false;

function watchTutorialCallback(callback, errorCallback) {
    if (userLeft) {
        errorCallback({
            name: 'user left',
            message: ':('
        })
    } else if (userWatchingCatMeme) {
        errorCallback({
            name: 'User Watching Cat Meme',
            message: 'Cat are the best'
        })
    } else {
        callback('good job')
    }
}

watchTutorialCallback((message) => {
        console.log('succes + message')
    }, (error) => {
        console.log(error.name + '' + error.message);
    })
    //Synataxe promesse
function watchTutorialPromise() {
    return new Promise((resolve, reject) => {
        if (userLeft) {
            reject({
                name: 'user left',
                message: ':('
            })
        } else if (userWatchingCatMeme) {
            reject({
                name: 'User Watching Cat Meme',
                message: 'Cat are the best'
            })
        } else {
            resolve('good job')
        }
    })
}
watchTutorialPromise().then((message) => {
    console.log('succes + message')
}).catch((error) => {
    console.log(error.name + '' + error.message);
})


//Promesse exemple 

const recordVideoOne = new Promise((resolve, reject) => {
    resolve('video 1 recorded')
})

const recordVideoTwo = new Promise((reolve, reject) => {
    reolve('video 2 recorded')
})

const recordVeideoThree = new Promise((resolve, reject) => {
    resolve('video 3 recorded')
})

//Promise.all
//vas faire tourner les 3 promesse et retourner un tableau avec les 3 message de succee dans un tableau , elle tourne en meme temps 
Promise.all([
        redcordVideoOne,
        redcordVideoTwo,
        redcordVideoThree,
    ]).then((message) => {
        console.log(messages);
    })
    //promise.race  // dès qu'une promesse est terminer retourne le resultat de celle qui est terminer.
Promise.race([
    redcordVideoOne,
    redcordVideoTwo,
    redcordVideoThree,
]).then((message) => {
    console.log(messages);
})