// Tester les operateures.

/*let operateur1= 5 ;
let operateur2 = 10;
console.log(operateur1+operateur2);
console.log(operateur2-operateur1);
console.log(operateur1*operateur2);
console.log(operateur2/operateur1)
//console.log(++ operateur1 ); resultat 6
//console.log(--operateur2); resultat 9
console.log(operateur2 % operateur1)*/

let operateur1= 5 ;
let operateur2 = "5";
console.log(operateur1==operateur2) // il a verifié la valeure
console.log(operateur1 === operateur2) // il a verifié le type
console.log(operateur1 !== operateur2) // inegalité dans le type
console.log(operateur1 != operateur2)// inégalité dans la valeure

let a = 5;
let b = 12;
console.log(a>=b)
console.log(a<=b)

//Les operateures logiques 
 let op1 = 10
 let op2 = "10";
 console.log(op1==op2 && op1 === op2)
 console.log(op1==op2 && op1!==op2)
 console.log(op1!=op2 || op1 == op2)

// les fonctions
//somme = nom de la fonction 
// number : le parametre
function somme (number){
return number * 2
}
console.log(somme(5))
//javascript project2:

function reversed (str) {
    return str.split("").reverse().join("");
}
console.log(reversed("hello"))

function counts (s){
    return s.length
}
console.log(counts("helloooo"))

function Capitalized (phrase) {
return phrase.split (" ").map(function (mot) {
return mot.charAt(0).toUpperCase() + mot.slice(1)
}).join(" ")
}
console.log(Capitalized("hello how are you "))

/*var tab1 = [1,10,25,6,3,15];
function findmax( array) {
var max = Math.max(tab1);
}
function findmin( array) {
var min = Math.min(tab1);
}
console.log(max)
console.log(min);*/
function findmax (tab1){
    let min= tab1[0];
    for (let i = 1; i < tab1.length; i++) {
        if (tab1[i]<min) {
             min = tab1[i]
        }        
    }
    return min
}function findmin (tab1){
    let max= tab1[0];
    for (let i = 1; i < tab1.length; i++) {
        if (tab1[i]>max) {
             max = tab1[i]
        }        
    }
    return max
}
let tab1 = [7,5,20,6,10,15,3]
console.log(findmax(tab1))
console.log(findmin(tab1))
/*function somme(tab2) {
    return tab2.reduce((accum, current) {
        return accum + current;
    }, 0);
}*/
function somme(tab2){
var sum = 0;
for (var i = 0; i < tab2.length; i++) {
    sum += tab2[i];
}
return sum;
}
let tab2 = [12,7,5,4,2,20,1]
console.log(somme(tab2))
