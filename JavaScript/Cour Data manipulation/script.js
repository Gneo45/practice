//----------------------------- Les tableaux--------------------------------------
let array = ["Bordeaux", "Toulouse", "Nantes"];
//pour se ballader dans le tableau

console.log(array[2]); //= Nantes 
console.log(array[2][3]); //= "t"

//autres types de tableau

let array2 = ["Bordeaux", 24, true, [1, 2], { nom: "Denis" }]

//pour se ballader dans le tableau
console.log(array2[3][1]); // = 2
console.log(array2[4]); // = objet {nom:"denis"}
//pour afficher denis dans l'objet:
console.log(array2[4].nom); // = Denis


//---------------------LES OBJET--------------------------------------------
let objet = {
    pseudo: "Denis",
    age: 33,
    technos: ["Javascript", "React", "NodeJs"],
    admin: false
};

//se ballader dans l'objet

console.log(objet.age); // = 33
console.log(objet.technos[0]); // = Javascript
console.log(objet.technos[0][1]); // = "a"

//ajouter un element a l'objet
objet.adresse = "23 rue du code";
//ecraser une valeur 
objet.age = 34;

console.log(objet);

//pour stocker des objet dans un tableaux
let data = [{
        pseudo: "Denis",
        age: 33,
        technos: ["Javascript", "React", "NodeJs"],
        admin: false
    },
    {
        pseudo: "sania",
        age: 24,
        technos: ["Javascript", "React", "NodeJs"],
        admin: false
    },
    {
        pseudo: "nicolas",
        age: 42,
        technos: ["Javascript", "React", "NodeJs"],
        admin: false
    },
];

//pour afficher pseudo de nicolas

console.log(data[2].pseudo); // = nicolas
console.log(data[2].pseudo[0]); // = "n"

//------------------------STRUCTURE DE CONTROLE----------------------------------------
//les structures de controles sont des moyen de controle (if , else etc)---------

//si denis est plus vieux que sania alors ecrire :
if (data[0].age > data[1].age) {
    console.log(data[0].pseudo + "est plus agé que " + data[1].pseudo);
} else {
    //valeur si faux 
}
//si 1 seule ligne on peut ecrire

if (valeur à tester) valeur si vrai

//ternaire 

valeur à tester ? si vrai : si faux
    //test ca ? si vrai fait ca : si faux fait ca

//while tant que x = y fait ca -----------------
//------------------------------------------------------------------------------------------------------

let w = 0

while (w < 10) {
    w++
    console.log("La valeur de w est de : " + w);
}

// Do while --------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
let d = 0;

do { //fait ca 
    d++
    console.log(d)
} while (d < 5); //tant que ça

//Boucle for ------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//pour chaque element du tableau que j'appelle user  je souhaite que tu m'affiche 
for (const user of data) {
    document.body.innerHTML = `<li>${user.pseudo}</li>`;
}

//------------OU-----------------
// FOR (on declare la valeur de I, jusqu'ou I doit boucler, on incremente Isi la condition 2 n'est pas remplie) { action }

for (i = 0; i < data.lenght; i++) {
    console.log(data[i]); // list chaque objet a valeur de I
    console.log(data[i].technos); // list chaque techno de tout les objet
    console.log(data[i].technos[0]); // list la premiere technos de tout les objet
    document.body.innerHTML += "<h2>" + data[i].pseudo + "</h2>"; // += injecte h2 avec prenom dans le html h
};

//-----------------------------SWITCH---------------------------------------------
//------------------------------------------------------------------------------------------------------
//exemple:
document.body.addEventListener('click', (e) => {
    console.log(e.target); //sur quoi a t on cliquer 
    console.log(e.target.id); //Quel est l'id de l'element sur lequel on a cliquer  

    switch (e.target.id) {
        case "javascript":
            document.body.style.background = "yellow";
            break;
            //si le click se fait sur l'element ayant l'ID javascript change le background a yellow
        case "php":
            document.body.style.background = "violet";
            break;
            //si le click se fait sur l'element ayant l'ID php change le background a violet
    }

})


//---------------------METHOD STRINGS-----------------------------------//
//---------------------METHOD STRINGS-----------------------------------//


let string = "Javasript est un langage orienté objet"

console.log(typeof string) // connaitre le type de variable

console.log(eval("1" + 2)); // eval concataine ou calcul  = 12

parseInt(); // change string en nombre eval(parseInt("1")+ 2) = 3

isNaN(); // is not a number distinguer si chiffre ou pas

string.lenght; // connaitre la longueur 

string.lenght - 1; // = derniere lettre de la chaine

string.indexOf("langage"); // donne l'index auquel le mot commence (-1 si pas contenue dans la chaine)

let newString = string.slice(2); // = coupe la string (ici les 2 premiere lettre)
let newString = string.slice(2, 17); // = coupe la string (garde les caractere compris entre 2 et 17)

string.split(i); // = partout ou tu vois un 1 tu coupe et tu isole le contenu.. permet de separer les string
string.split(" "); // = partout ou tu vois un espace tu coupe et tu isole le contenu.. permet de separer les string et de les integrer dans un tableaux
string.toLowerCase(); // passe toutes la chaine de caractere en minuscule 
string.toUpperCase(); // passe toutes la chaine de caractere en majuscule 

string.replace("javascript", "php"); // remplace parametre 1 par parametre 2

//----------------------METHOD NUMBERS ----------------------------------------------
//----------------------METHOD NUMBERS ----------------------------------------------

let number = 42.1234;

number.toFixed(2); // sert a garder un certain nombre (parametre) de chiffre apres la virgule ici 42.12

parseInt("42"); // change string en number ... GARDE SEULEMENT LE PREMIER CHIFFRE DE LA CHAINE DE CARACTER 

parseFloat(" 564.65465 aihepajef aejoa ") //// change string en number ... GARDE les CHIFFRE decimaux DE LA CHAINE DE CARACTER 

//Math()
Math.PI; // donne lenombre pi
Math.round(4.4); // arrondi a au plus proche 
Math.floor(4.9); // arrondie a l'inferieur = 4
Math.ceil(4.1); // arrondie au superieur = 5 
Math.pow(2, 7); // Puisannce = 2**7 = 128
Math.sqrt(16); // racine carre de 16 = 4
Math.random(); // chiffre entre 0 et 1
Math.random(); // chiffre entre 0 et 1
(Math.random() * 50) // chiffre decimal entre 0 et 49 - ---  +1 si entre 0 et 50;
Math.floor(Math.random() * 50); // donne un chiffre rond entre 0 e 49

// ------------------------Méthodes ARRAYS ------------------------
//-----------------------------------------------------------------

let array1 = ["Javascript", "Php", "Python"]
let array2 = ["Ruby", "Solidity"]

let newArray = array1.concat(array2); //  == 1 seul tabelau contenant les 2

///------------ou-------------------
let newArray = [array1, array2] // donne tableau contenant 2 tableau 
    //--------ou Spread operator ---------
let newArray = [...array1, ...array2] // fusionne les deux tableaux en 1 seul

array1.join("-") // casse le tableau et join les element par le parametre ("-")

array1.slice(1); // decoupe le 1er element du tableau (2)= decoupe les deux premier element du tableau etc 
array1.slice(2, 5) // retire les 2 premier index et retire ce qu'il y a apres le 5 // garde de 2 a 5

array1.indexOf("python"); // donne l'index du mot recherché

array1.forEach((languages) => console.log(languages)); //= chaque element du tableau qu'on nomme maintenant languages 

array1.every((language) => language === "Php"); // renvois true ou false // est ce que dans chacun des element il y a Php = false // cherche les meme elements dans tout le tableau 

array1.some((language) => language === "Php"); // renvois true ou false // est ce que dans  des element il y a Php = trur // cherche un elements dans tout le tableau 

let shift = array1.shift(); // enleve le premier index du tableau 
let pop = array1.pop(); // enleve le dernier index du tableau 

const restArray = array1.splice(0, 2, "c++") // de 0 a 2 retir les element et ajoute "c++"

//--------------------------IMPORTANT ------------------------------------------------------------------
//--------------------------IMPORTANT ------------------------------------------------------------------


let arraynNumber = [4, 74, 57, 12, 2];

arraynNumber.reduce((x, y) => x + y) // additione tout le tabelau 

arraynNumber.push("coucou"); // ajoute un element à la fin du tableau 

//----------------------------FILTER, SORT, MAP-------------------------------------- // 

arraynNumber.filter((number) => number > 10); // ne me donne que les elements du tableau qui sont superieur a 10 // on donne le nom du parametre number ou autre chose fonction du moment que les 2 parmetre sont iddentique 

arraynNumber.sort(); // tri les nombres par le premier index // Attention classmeent 1; 28 ; 32; 12 ; 29
arraynNumber.sort((a, b) => b - a); // tri du plus grand au plus petit
arraynNumber.sort((a, b) => a - b); // tri du plus petit au plus grand

arraynNumber.map((number) => console.log(number)); // enumere tout les element du tableau 
documetn.body.innerHTLM = arraynNumber.map((number) => `<li> ${number}</li>`).join(""); // creer une liste de chaque nombre du tableau

//------------------------METHODE OBJECT--------------------------------------
//------------------------METHODE OBJECT--------------------------------------

document.body.innerHTML = data
    .filter((user) => user.admin === false) // permet de filtrer et de garder seulement les membres
    .filter((user) => user.pseudo.includes("Den")) // permet de filtrer les pseudo incluant "Den" 
    .sort((a, b) => b.age - a.age) //permet de trier l'objet par age 
    .map(
        (user) =>
        `
    <div="user-card">
    <h2>${user.pseudo}</h2>
    <p>Age : ${user.age} ans</p>
    <p>Statut : ${user.admin ? "Modérateur": "Membre"}</p> 

    </div>
    `
    )
    .join("");
// donne liste utilisateur objet et l'inject dans le html 

// <p>Statut : ${user.admin ? "Modérateur": "Membre"}</p> // ternaire= ${user.admin = true? alors passe moderateur : sinon membre}
//


//--------------LES DATEs -------------------------------------
//--------------LES DATEs -------------------------------------


// Date classique 

let date = new Date(); //=date du jour 

//Timestamp

let timestamp = Date.parse(date); // = nombre de seconde ecoulé depuis 1970

//IsoString

date.toISOString(); // = 2021-05-17t12:03:56:554Z

function dateParser(chaine) {
    let newDate = new Date(chaine).toLocaleDateString("fr-FR", {
        year: "numeric",
        month: "long",
        day: "numeric"
        hour: "numeric"
    });
    return newDate;
};

console.log(dateParser(date));
console.log(dateParser(timestamp));
console.log(dateParser(iso));


//-------------------------------------LE DESTRUCTURING------------------------------------------
//-------------------------------------LE DESTRUCTURING------------------------------------------

let moreData = {
    destVAr: ["Element 1", "Element 2"]
}

const { destVar } = moreData; // veux dire consr destVar = moreData.destVar;  permet d'acceder a un element du tableau plus rapidement

// au lieu de 
console.log(moreData.destVar[1]);
//on peut maintenant ecrire dirrectement
console.log(destVar[1]);


//destructiring 2

let array5 = [70, 80, 90];
console.log(array5[0]);
console.log(array5[1]);
console.log(array5[2]);
//pas pratique a la place =>
let [x, y, z] = array5; // x prend la valeur index 0 , y prend la valeur index 1 
console.log(x); // = 70

//destructure la date en iso 

console.log(iso);
const dateDestructuring = (chaine) => {
    let newDate = chaine.split('T')[0];
    // permet de couper la chaine  202017T12;20;15869z au "T" / [0 ] permet de recuperer le prmier morceau du split     
    [y, m, d] = newDate.split('-'); //separe les element de la chaine 2021-07-17 dans un tableau = ["2021", "05", "17"]
    return [d, m, y].join("/"); //= 17/05/2021
};

//----------------------------LES DATASETS------------------------------
//----------------------------LES DATASETS------------------------------

const h3js = document.getElementById("javascript");

console.log(h3js); //= balise h3 avec id 
//si l'id est inutilisable on peut dans le HTML ecrire <h3 data-lang="js" id="javascript">

console.log(h3js.dataset); // renvoi l'objet {lang: "js"}
console.log(h3js.dataset.lang); // renvoi js

//------------------------------LES REGEX---------------------------------
//------------------------------LES REGEX---------------------------------

let mail = "from_scratch33@gmail.com";
//mail.search(/frdcr.com) // = renvoi 0 si trouve sinon renvoi -1
mail.replace(/from/, "de"); //= remplace from par de
mail.match(/SCRarch/) //= renvioi null
mail.match(/SCRarch/i) //= renvoi true ( sous form de tableau ), le i suprime le case sensitive
mail.match(/[zug]/) //= est ce que tu trouve une de ces letrre ? = renvoi true avec le G
mail.match(/[123]/) //= est ce que tu trouve une de ces chiffre ? = renvoi true avec le 3
mail.match(/\d/) // recherche tout les chiffres
mail.match(/[a-z]/) // recherche tout les lettres de "a" a "z"

//---controler un mail  // /[\w]/ = toutes lettres et chiffre // ^ demarre le regex // $=termine le regex avant de le fermer avec /
mail.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)

//creer un separateur
let separator = 265264849
separator.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."); // on passe en chaine de caractere et on remplace par un .