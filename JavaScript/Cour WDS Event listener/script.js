//-----------------------EVENT LISTENER --------------------------------------
//selectionner une div sur le dom
const div = document.querySelector('.div');
//ajouter un eventlistener a div au click 
div.addEventListener("click", (e) => {
    console.log(e);
    //e.target = l'element cliqué
})

//-------------------------bubbling et capturing------------------/
//avant de retourner l'element js parcours du document vers l'element (capturing) et repart de l'element vers le document (bubling) 

//pard defaut regler en bubling pour passer en capture:

div.addEventListener("click", (e) => {
    console.log(e);

}, { capture: true })

//pour arreter la propagation 
div.addEventListener("click", (e) => {
    e.stopPropagation
})

//pour qu'un evenement ne fonctionne qu'une foisdiv.

addEventListener("click", (e) => {
    console.log(e);

}, { once: true })

//pour retirer un evenement 
//la fonction prise en parametre de l'event listener et du remove doit etre la meme.

div.addEventListener("click", printThing)
    //retirer l'addevent
setTimeout(() => {
    div.removeEventListener("click", printThing)
}, 2000)

//fonction iddentique pour les deux
function printthing() {
    console.log("thing")
}

//-----Delegation des evenement ---//

//si on ajoute un element au dom apres avoir creer un eventListener , le nouvel element ne sera pas pris en compte 
//on peut alors creer une fuction  event general sur le dom

document.addEventListener("click", (e) => {
        if (e.target.matches("div")) {
            console.log('hi')
        }
    })
    //ou le transformer en function globale

function addGlobalEventlistener(type, selector, callback) {
    document.addEventListener(type, e => {
        if (e.target.matches(selector)) callback(e)
    })
}

//et ensuite pour l'utiliser dans ce cas specifique

addGlobalEventlistener("click", 'div', e => {
    console.log('hi')
})