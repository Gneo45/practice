//fonction normale :
function sum(a, b) {
    return a + b
};
//convertie en fleché
let sum = (a, b) => a + b; // retourne automatiquement le resultat


//fonction normale :
function isPositive(number) {
    return number >= 0
}
//convertie en fléchée 
let isPositive = number => number >= 0; //avec 1 seule parametre pas besoin des parenthese autour du premier parametre 


//fonction normale :
function randomNumber() {
    return Math.random
};

//convertie en fléchée 
let randomNumber = () => Math.random;

//fonction normale :
document.addEventListener('click', function() {
        console.log('click')
    })
//convertie en fléchée 
document.addEventListener('click', () =>console.log('click'));
