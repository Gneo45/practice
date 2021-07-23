//selectionner les element sur le Dom

// selectionner par id 
//const grandParent = document.getElementById('grand-parent-id');

//---------------------changer le style de l'element----------
grandParent.style.backgroundColor = "#333"

//utiliser la fonction 

//fonction pour changer la couleur de l'element passer en parametre

//changeColor(grandParent)
function changeColor(element) {
    element.style.backgroundColor = "#333"
}

//--------------meme fonction en fleché ( pas d'hoisting..l'appel de la fonction doit se faire apres la declaration de la fonction )

//const changeColor2 = (element) => {
//    element.style.backgroundColor = "#333"
//};
//changeColor2(grandParent);

//selectionner element par nom de la classe (selectionne tout les element qui on cette classe donc selection doit etre divisé dans un tableau  pour que la fonction forEach fonctionne)
//const parents = Array.from(document.getElementsByClassName("parent"));

//parents.forEach(changeColor)

//query selector ------ selection le premier element qui a cette classe ou id

//const grandParent = document.querySelector("#grand-parent-id");
//changeColor(grandParent);

//----------------------pour selectionner tout les elements ---

//const parents = document.querySelectorAll(".parent");

//parents.forEach(changeColor);

//---------pour selectionner les enfant d'un element et naviguer vers le bas a travers l'arbre 

const grandparent = document.querySelector(".grand-parent");
console.log(grandparent);

const parents = Array.from(grandparent.children)
console.log(parents);

const parentOne = parents[0];
console.log(parentOne);

const children = parentOne.children
console.log(children);


changeColor(children[0])

// remonter dans l'arbre de selection ( .closest recherche en remontant la correspondance .class ou #id)

const childOne = document.querySelector('#child-one')
const grandparent = childOne.closest(".grand-parent")