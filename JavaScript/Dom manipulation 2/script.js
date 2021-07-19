const body = document.body;
body.append("hello World", " bye") // faire aparaitre tout string compris

const div = document.createElement('div') // créer l'element

body.append(div) // ajouter l'element au body
div.innerText = "hello wordl" // prend juste le texte sans mise en forme 
div.textContent = "hello world2" //  injecte l'exacte mise en forme du texte avec les espace etc 

//-------------injecter des balises html ---------
div.innerHTML = "<strong> hello world3 </strong>"

//ou facon plus securisé

const strong = document.createElement('strong');
strong.innerHTML = "hello Wordl 4"
div.append(strong)

const div = document.querySelector("div")
const spanHi = document.querySelector('#hi')
const spanBye = document.querySelector('#bye')
console.log(spanBye);
//remove element from the dom
spanBye.remove(); // efface completement de l'html

// -------------modifier l'attribue d'un element----------------------------//

//recuperer l'attribue
spanHi.getAttribute('id');
//ou
spanHi.id;

//modifier l'attribue
spanHi.setAttribute("id", 'bonjour')
    //ou
spanHi.id = "bonjourno"

//retirer l'attribue 
spanHi.removeAttribute('id')

//----------attribut DATA---------------//

console.log(spanHi.dataset.test);

spanHi.dataset.newName = "hi";

//--------------.classe--------------------//
//ajouter une classe a un element ( pas d'espace pour le nom de classe)
spanHi.classList.add('new-class')
    //retirer une classe a un element
spanHi.classList.remove('new-class')
    //toggle 
spanHi.classList.toggle("hi3")
spanHi.classList.toggle("hi3", true) //ajoute forcement
spanHi.classList.toggle("hi3", false) //retire forcement

//modifier directement le style (convert css proprety en camelCase)
spanHi.style.color = "red"
spanHi.style.backgroundColor = "blue"