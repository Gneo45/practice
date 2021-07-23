//LES OBJETS

const obj = {
    //index :value
    pseudo: "Gneo",
    ville: "montargis",
    admin: false,

    //ajouter une methode à l'objet


    direBonjour: function() {
        console.log("Bonjour je suis " + this.pseudo);
    },
    //ou
    direBonjour2() {
        console.log("Bonjour je suis " + this.pseudo); // this fait reference  à l'objet . il sert a designer l'objet a l'interieur du meme objet
    }



}

//console.log(obj.direBonjour()); // utiliser la methode a l'interieur de l'objet 

//ajoute un element a l'objet
obj.age = 24;
//ou
obj["admin"] = true // permet d'utiliser une variable dynamique 

//mofidier un element de l'objet

obj.pseudo = "GN"

//suprime un element de l'objet
delete obj.ville

//verifier qu'une propriete existe

//console.log("pseudo" in obj); // renvoi true
//console.log("ville" in obj); //renvoi false


//parcourir l'objet avec une boucle for
for (const key in obj) {
    //console.log(key); // log les cles de l'objet ( Pseudo, Age)
    //console.log(obj[key]); // log les valeurs de chaque key 
    //console.log(key + " : " + obj[key]); // log cles + valeur 
}

//--Obtenir les clés d'un objet --//
const keys = Object.keys(obj);
console.log(keys);

//--obtenir les valeurs--//
const values = Object.values(obj);
console.log(values);

//Obtenir valeurs + clés dans un tableau 
const nestedArray = Object.entries(obj)
console.log(nestedArray);

const obj2 = {
    taille: "1m80",
    poids: "75kg",
    pseudo: "Gneo" // ce pseudo ecrase celui d'obj car dernier enoncé 
}

//fusionner objets
const fusion = Object.assign({}, obj, obj2)
console.log(fusion); // dans fusion on obtient un objet qui combine obj et obj2

//Empecher les modifications sur des parametres
const newObj = Object.freeze(obj);
newObj.pseudo = "test";
console.log(newObj); // pseudo n'a pas changer car freezer

//ou
const newObj2 = Object.seal(obj);
newObj2.pseudo = "test";
newObj2.adresse = "42 avenue du code"
console.log(newObj); // change le pseudo mais empeche la creation de nouveau elements

//---------CONSTRUCTEUR D'OBJET---------------------//
//permet de creer plusieurs objs ayant les mêmes bases

//Fonction constructeur

function User(pseudo, ville) { //premiere lettre en majuscule

    this.pseudo = pseudo;
    this.ville = ville;

    //ajouter une methode au constructeur
    this.getCity = function() {
        console.log(this.pseudo + " habite à " + this.ville);
    }
}

const user1 = new User('Gneo', 'Montargis'); //creer une nouvelle instance de l'objet en utilisant le constructeur
const user2 = new User('Denis', 'Nantes');
console.log(user2.getCity());


//Factory functions
function User3(pseudo, ville) {
    return {
        pseudo,
        ville,
    }
}

const user4 = User3('GN', 'nice')
console.log(user4);

//---------LES CLASS----------//

//on creer une nouvelle class

class Utilisateur {
    constructor(pseudo, ville) {
            this.pseudo = pseudo;
            this.ville = ville;
        }
        //ajouter des Methodes ici
    sayMyName = function() {
        console.log("Bonjour je suis " + this.pseudo);
    }
}

const user5 = new Utilisateur('samia', 'Lyon');

Utilisateur.prototype.sayCity = function() { //ajoute une fonction au prototype de l'objet 
    console.log("j'habite à " + this.ville);
}

console.log(user5.sayCity());

// rajouter plusieur method dans le prototype d'un coup

Object.assign(Utilisateur.prototype, {
    method1() {
        //ma Methode}
    },
    methode2() {
        //Ma Methode 2
    }
})

//----------------L'heritage---------------------//

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    saySomething(text) {
        console.log(this.name + " dit : " + text);
    }
}

class Dog extends Animal { // class qui herite des caracteristique du constructeur 
    run() {
        console.log("Le chien court !")
    }
}

class Cat extends Animal { // class qui herite des caracteristique du constructeur 
    hunt() {
        console.log("j'ai tuer un oiseau");
    }
}

const rintintin = new Dog("rintintin", 9)
console.log(rintintin);