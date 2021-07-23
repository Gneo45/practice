// ------------------------------------------l'ancienne method XMLHttpRequest ----------------------------------


function reqListener() {
    console.log(this.responseText);
}

let req = new XMLHttpRequest();
req.onload = reqListener; // au chargement joue reqListener
req.open('get', 'data.txt', true); // req vas chercher dans le fichier data.txt
req.send(); //envoie ce que tu as trouver dans la console

//--------------------------------------------------nouvelle method FETCH----------------------------------------------
//

//fetch = va chercher (" l'adresse ou chercher", "optionel passer d'autre info"). then = promesse ((qui travail sur la reponse )) => { travail sur le resultat de ta recherche}

fetch("monlien", "objet d'options").then((response) => {
    //response
}).catch((error) => console.log(error)); //si tu ne trouve pas saute le then et catch l'erreur puis log la 


//--------ou -----------

fetch('data.txt').then((res) => console.log(res)); // log object contenant le header de la reponse voir code reponse http
//pour lire le fichier requis
fetch('data.txt')
    .then((res) => res.text())
    .then((data) => console.log(data)); // log le contenu de la reponse voir code reponse http

fetch("data.json")
    .then((res) => res.json())
    .then((data) => console.log(data));

//----------passer un objet dans un fetch ---

const myHeaders = new Headers();

const init = {
    method: "GET",
    Headers: myHeaders,
    mode: "cors",
    cache: "default",
};

fetch("data.json", init).then((res) => console.log(res));


//---------ASYNCHRONE----------------

setTimeout(() => {
    console.log("test");
}, 2000); //attends 2 seconde avant de log

//promise
fetch('monlien').then((res) => res)
    //then ne sera executer que quand le fetch sera complet

//Async/await

async function fetchData() { //declarartion fonction asynchrone
    await fetch("monlien")
        //attend que le await soit executer avant de faire la suite 
    executeFonction();
}

//atention pour fonction fleché

const fetchData2 = async() => {
    await fetch('monlien ')
    executeFonction();
}

//-----------------le JSON --------------//

//Format qui permet de faire transité des données

//----Méthode .json() => méthode qui s'auto-résout en renvoyant le Body de la requête.

fetch('data.json').then((res) => res.json()).
then((data) => {
    // .stingify converti en JSON
    let settings = JSON.stringify(data);
    //.Parse => transforme JSON en objet JS
    JSON.parse(settings);
});



//--------------------WEB API (api du navigateur ------------------------//

//---------CLIENT STORAGE --------//

//--LOCAL Storage--// -- stocker jusqu'a suppression des fichier temporaires

localStorage.data = "je stock la data"; //creer une boite qui stock la data dans local storage
console.log(localStorage.data); // recupere la data stocker 
document.body.textContent = localStorage.data //l'injecter dans la page 

localStorage.removeItem('data'); //suprimer l'element du local storage

localStorage.user = 'denis'; // maj le contenu de l'element dans le local storage 

//on ne peut passer qu'une chaine de caractere 

const obj = {
    name: 'denis',
    age: 27
};

//on converti l'objet en JSON 
localStorage.user = JSON.stringify(obj);

// pour le lire on parse le json pour obtenir l'objet

console.log(JSON.parse(localStorage.user));


//--SESSION Storage--// -- stocker durant la durée de la session 

sessionStorage.dataSettings = '55px'; //creer une boite qui stock la data dans Session storage
console.log(sessionStorage.dataSettings); // recupere la data stocker

sessionStorage.clear() // supprimer les info stocker dans session storage 


//--LES COOKIES--//

// ajouter un cookie 
document.cookie = "username=Gneo"; // de base dure le temps de la session

//BONNE PRATIQUE

document.cookie = "pseudo=GN; path=/; max-age=455000 ; secure; samesite";