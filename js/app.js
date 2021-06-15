// Exercice 1
//  Inverser les valeurs de deux variables

// var x = 0
// var y = 1
// var z
// console.log(x, y)

// z = x;
// x = y;
// y = z;
// console.log(x, y)

//  Exercice 2
// A partir des variables suivantes :
// Nom = toto;
// Age = 30;
// Homme = true;
// Exercice 3 : Puissance de 2
// Réaliser un programme permettant à l’utilisateur de saisir la puissance de 2 qu’il
// souhaite afficher
// Exercice 3:
// Créez une fonction qui prend deux nombres comme arguments et retourne leur somme.
// Exemple:
// addition(1, 2) ➞ 3
// addition(-2, -4) ➞ -6

// const nom = toto;
// var age = 30;
// var homme = true;

// function puissance() {
//     var x = document.getElementById("variable1").value;

//     var resultats = Math.pow(x, 2);
//     return resultats;
   
// }


// function somme() {
//     var x = document.getElementById("variable1").value;
//     var y = document.getElementById("variable2").value;
//     var resultats = parseFloat(x)+parseFloat(y)

//     console.log(resultats);
//     return resultats;
// }


// Exercice 3
// Écrivez une fonction qui prend un nombre entier de minutes et le convertit en secondes.
// Exemple:
// minuteToSecond(4) ➞ 240
// minuteToSecond(3) ➞ 180

// function minToSec() {
//     var x = document.getElementById("variable1").value;

//     var resultats = x * 60
//     return resultats;
   
// }

// Exercice 4
// Créez une fonction qui prend un nombre en argument, incrémente le nombre +1 et renvoie le
// résultat.
// Exemple:
// increment(1) ➞ 2
// increment(4) ➞ 5

// function addition() {
//     var x = document.getElementById("variable1").value;

//     var resultats = parseFloat(x)+ 1
//     return resultats;
   
// }

// Exercice 5
// Écrivez une fonction qui prend la base et la hauteur d’un triangle et retourne sa surface. Notez
// que la surface d’un triangle est: (base * hauteur) / 2
// Exemple:
// getSurface(8, 2) ➞ 8
// getSurface(7, 3) ➞ 10.5


// function surface() {
//     var x = document.getElementById("variable1").value;
//     var y = document.getElementById("variable2").value;

//     var resultats = (x * y)/2
//     return resultats;
// }

// Exercice 6
// Écrivez un programme JavaScript pour inverser une chaîne de caractères.
// Exemple:
// strReverse(‘WayToLearnX’) ➞ XnraeLoTyaW
// strReverse(‘Hello’) ➞ olleH

// function strReverse(str) {
//     var splitString = str.split("");
//     var reverseArray = splitString.reverse();
//     var joinArray = reverseArray.join("");
//     return joinArray;
//   }

// Exercice 7
// Écrivez un programme JavaScript pour trouver le plus grand des trois entiers donnés.
// Exemple:
// getMax(5, 9, 1) ➞ 9
// getMax(2, 3, 10) ➞ 10

// function  getMax(a,b,c){
//     return Math.max(a, b ,c)
//     console.log(Math.max)
// }

// Exercice 8
// Créez une fonction qui prend un tableau et renvoie le premier élément. Notez que le premier
// élément d’un tableau commence toujours par l’index 0.
// Exemple:
// getFirst([1, 2, 3]) ➞ 1
// getFirst([50, 60, 70]) ➞ 50

// function  getFirst(arr){
//     return arr[0]
//     console.log[arr]
// }

// Exercice 9
// Écrivez un programme JavaScript pour récupérer l’URL d’un site Web

// function  getHtmlAdresse(){
// console.log(window.location.href)
// }

// Exercice 10
// Écrivez un programme JavaScript pour renvoyer le reste de deux nombres. Il existe un seul
// opérateur en JavaScript, capable de fournir le reste d’une division. Deux nombres sont transmis
// comme paramètres. Le premier paramètre divisé par le deuxième paramètre.
// Exemple:
// resteDiv(1, 3) ➞ 1
// resteDiv(2, 4) ➞ 2
// resteDiv(3, 3) ➞ 0


// function getRest(a, b){
//     return (a % b)
// }

// Exercice 11
// Avec deux nombres, retournez TRUE si la somme des deux nombres est inférieure à 100. Sinon,
// retournez FALSE.
// Exemple:
// check(5, 20) ➞ true
// 5 + 20 = 25check(60, 55) ➞ false
// 60 + 55 = 115

// function getBoolean(a, b){
//     var somme = parseFloat(a)+parseFloat(b)
//     var resultat
//     if(somme<100){
//         resultat=true
//     } else if(somme>=100){
//         resultat=false
//     }
//     console.log(resultat)
// }

// Exercice 12
// Écrivez une fonction qui convertit les heures en secondes. Notez qu’il y a 60 secondes en une
// minute et 60 minutes en une heure.
// Exemple:
// heureSeconde(1) ➞ 3600
// heureSeconde(5) ➞ 18000

// function minToHour() {
//     var x = document.getElementById("variable1").value;

//     var resultats = (x * 60)*60
//     return resultats;
   
// }

// Exercice 13
// Créez une fonction qui prend un nombre et renvoie TRUE s’il est inférieur ou égal à zéro, sinon
// retournez FALSE.
// Exemple:
// checkNbr(1) ➞ false
// checkNbr(-1) ➞ true
// checkNbr(0) ➞ true

// function checkNbr(a){
//     var resultat
//     if(a<=0){
//         resultat=true
//     } else if(a>0){
//         resultat=false
//     }
//     console.log(resultat)
// }

// Exercice 14
// Créez une fonction qui renvoie TRUE lorsque nbr1 est égal à nbr2; sinon retournez FALSE.
// Exemple:
// isEqual(3, 6) ➞ false
// isEqual(1, ‘1’) ➞ false
// isEqual(1, 1) ➞ true

// function checkNbr(a, b){
//     var resultat
//     if(a==b){
//         resultat=true
//     } else if(a!=b){
//         resultat=false
//     }
//     console.log(resultat)
// }

// Exercice 15
// Créez une fonction qui renvoie TRUE si un entier est divisible par 5, sinon retournez FALSE.
// Exemple:
// isDivisible(5) ➞ true
// isDivisible(10) ➞ true
// isDivisible(6) ➞ false

// function divid(a){
//     var resultat
//     if(a % 5 == 0){
//         resultat=true
//     } else {
//         resultat=false
//     }
//     console.log(resultat)
// }

// Exercice 16
// Écrivez une fonction qui prend deux entiers (heures, minutes) et les convertit en secondes.
// Exemple:
// hmTos(1, 10) ➞ 4200
// hmTos(0, 59) ➞ 3540
// hmTos(0, 0) ➞ 0

// function somme() {
//     var x = document.getElementById("variable1").value;
//     var y = document.getElementById("variable2").value;
//     var resultats = (parseFloat(x)*60)+(parseFloat(y)*60)

//     console.log(resultats);
//     return resultats;
// }

// Exercice 17
// Écrivez une fonction pour inverser un tableau. Attention: N’utilisez pas la méthode intégrée
// reverse();
// Exemple:
// reverseTab([1, 2, 3]) ➞ [3, 2, 1]
// reverseTab([1, 1, 2, 2, 3]) ➞ [3, 2, 2, 1, 1]

// let arr = [];
// function reverseArr(arr) {
//   newArr = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     newArr.push(arr[i]);
//   }
//   return newArr;
// }

// Exercice 18
// Créez une fonction qui prend un tableau et renvoie le dernier élément du tableau.
// Exemple:
// getLastElem([1, 2, 3, 4]) ➞ 4
// getLastElem([‘Alex’, ‘Bob’, ‘Emily’]) ➞ ‘Emily’

// function lastArr(newArr){
// console.log(newArr[newArr.length -1])}

// Exercice 19
// Créez une fonction qui vérifier l’égalité de deux paramètres a et b. La valeur et le type de
// paramètres doivent être testés afin d’avoir une égalité. La fonction doit renvoyer TRUE si les
// paramètres sont égaux et FALSE s’ils sont différents.
// Exemple:
// checkEq(5, 5) ➞ true
// // number = number: leur type et leur valeur sont égaux
// checkEq(5, 0) ➞ false
// // number = number: leur type sont égaux et leur valeur sont différent
// checkEq(5, false) ➞ false
// // number <> boolean: leur type est différent
// checkEq(5, ‘5’) ➞ false
// // number <> string: leur type est différent


// function test (a,b){
//     if(a === b){
//        return true
//     } else{
//         return false
//     }
// }

// Exercice 20 
// Créez une fonction qui renvoie TRUE si une chaîne est vide et sinon renvoie FALSE.
// Exemple:isEmpty("1") ➞ false
// isEmpty("WayToLearnX") ➞ false
// isEmpty(" ") ➞ false
// isEmpty("") ➞ true

// function test(a){
//     if( a === ""){
//         return true
//     }else {
//         return false
//     }
// }