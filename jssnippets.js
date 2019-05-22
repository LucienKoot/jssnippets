/*$(function() {

let ten = 10;
console.log(ten * ten);

let mood = "light";
console.log(mood);

mood = "dark";
console.log(mood);

let jansDebt = 150;
jansDebt = jansDebt - 40;
console.log(jansDebt);



let lucienKrijgtvanMike = 400;
lucienKrijgtvanMike = lucienKrijgtvanMike - 100;
console.log(lucienKrijgtvanMike);

var name = "HARRIET";
const greeting = "HALLO ";
console.log(greeting + name);

let groet = "Hallo ", naam = "Joske";
console.log(groet + naam);

//onderstaand werken allemaal, maar even als comment gezet, anders gaan ze elkaar storen, maar ik wil de functies even bewaren.


prompt("Enter PINcode \n to get your acces.");

console.log(Math.max(66, 88));

console.log(Math.min(44, 66) / 2);

let theNumber = Number(prompt("Pick a number"));
console.log("Your number is the square root of " +
theNumber * theNumber);

let the Number = Number(prompt("wilt u briefjes van: 10\n20\n50?"));
console.log("Hier is uw te vele geld:" + theNumber * TheNumber);

let num = Number(prompt("Pick a number"));
if (num < 10) {
console.log("Small");
} else if (num < 100) {
console.log("Medium");
} else {
console.log("Large");
}

let number = 0;
while (number <=6887) {
    console.log(number);
    number = number + 14;
}

let yourName;
do {
    yourName = prompt("WIE ben jij?");
} while (!yourName);
console.log(yourName);



if (false != true) {
    console.log("lekker belangrijk");
    if (3 < 4) {
        console.log('dat is geen verassing');
    }
}


switch (prompt ("hoe is het weer buiten?")) {
    case "regen":
    console.log("paraplu meenemen !!!");
    break;
    case "zonnig": 
    console.log("ZWEMBROEK mee!!");
    case "koud":
    console.log("Muts op !!");
    break;
    default:
    console.log("niet te voorspellen")
    break;
}
*/
/*Opdracht....

Write a loop that makes seven calls to console.log to output the following
triangle:
#
##
###
####
#####
######
#######




let number = 0;
while (number <=6887) {
    console.log(number);
    number = number + 14;


let number = 0 "#";
while (number <=15) { 
    console.log(number)
    number = number + 1

}


const square = function(x) {
    return x * x;
    };
    console.log(square(12));


C


document.getElementById("demo").innerHTML = "Even oefenen met innerHTML ";


var x = 3
var y = 48
var z = x + y
document.getElementById("demo").innerHTML = z;
//






if (leeftijd < 12)
{
toegangsprijs = 5
duiken = false
}
else
{
toegangsprijs = 10
duiken = true
} 
document.write

function test()
{
    document.write("stukje tekst testen in functie")
}
test()
*/
// onderste laten staan i.v.m. laden pagina voordat script wordt uitgevoerd.

});

/*
var demo = document.getElementById("demo");
demo.innerHTML = .........;



let lucienTegoed = 300;
lucienTegoed = lucienTegoed - 200;
var demo = document.getElementById("demo");
demo.innerHTML = lucienTegoed;

prompt ("hoe heet je?");
"lucien"
var username = prompt ("What is your name?")
undefined
username "Eva"

VM460:1 Uncaught SyntaxError: Unexpected string
var username = prompt("What is your name?");

undefined
username
"Lucien"
alert("Good job!");
undefined
alert (33*33);
undefined

var yourNameIs = "Henk de Jong";
undefined
alert (yourNameIs);
undefined
yourNameIs Jannie
yourNameIs Jannie
VM667:1 Uncaught SyntaxError: Unexpected identifier
VM668:1 Uncaught SyntaxError: Unexpected identifier
yourNameIs = "Harry de Oude";
"Harry de Oude"
alert (yourNameIs);
undefined
var yourNameIs = "Henk de Jong";
undefined
var yourScore = 30;
undefined
Alert(Ḧallo, " + yourNameIs + ", your score is: "+ yourScore);
VM851:1 Uncaught SyntaxError: missing ) after argument list
Alert("Ḧallo, " + yourNameIs + ", your score is: "+ yourScore);
VM856:1 Uncaught ReferenceError: Alert is not defined
    at <anonymous>:1:1
(anonymous) @ VM856:1
Alert("Ḧallo, " + yourNameIs + ", your score is: " + yourScore);
VM860:1 Uncaught ReferenceError: Alert is not defined
    at <anonymous>:1:1
(anonymous) @ VM860:1
var yourNameIs = "Henk de Jong";
undefined
var yourScore = 30;
undefined
Alert("Ḧallo, " + yourNameIs + ". your score is: " + yourScore);
VM886:1 Uncaught ReferenceError: Alert is not defined
    at <anonymous>:1:1
(anonymous) @ VM886:1
alert("Ḧallo, winnaar" + yourNameIs + ", your score is: " + yourScore);


blz 47

"var aanNaam = "your name";
undefined
var vanNaam = "Het instituut";
undefined
var basisBrief = "Hierbij nodigen wij u uit voor de bijeenkomst, 26 oktober 2020. Het betreft uw ruimtevakantie naar Mars, vergeet niet uw slaapzak mee te nemen /n Gegroet.";
undefined
document.write ("Beste " + aanNaam + ", <br><br>);
VM924:1 Uncaught SyntaxError: Invalid or unexpected token
var aanNaam = "Reiziger, ";
undefined
var vanNaam = "Het instituut";
undefined
var basisBrief = "Hierbij nodigen wij u uit voor de bijeenkomst, 26 oktober 2020. Het betreft uw ruimtevakantie naar Mars, vergeet niet uw slaapzak mee te nemen.";
undefined
document.write ("Beste " + aanNaam + "<br>");
undefined
document.write(basisBrief = "<br>");
undefined
document.write (basisBrief + ",br>");
undefined
document.write (basisBrief + );
VM1315:1 Uncaught SyntaxError: Unexpected token )
document.write (basisBrief);
undefined
document.write (vanNaam);
undefined
document.write (basisBrief);
undefined
var basisBrief = "Hierbij nodigen wij u uit voor de bijeenkomst, 26 oktober 2020. Het betreft uw ruimtevakantie naar Mars, vergeet niet uw slaapzak mee te nemen.";
undefined
document.write (basisBrief);
undefined
document.write (aanNaam + "reiziger, " + basisBrief + vanNaam);
undefined
var van
undefined
var vanNaam = "Het instituut.";
undefined
document.write (aanNaam + " reiziger, " + "<br>" + basisBrief + "<br>" + vanNaam);
undefined

nu is het goed
var vanNaam = "Het instituut";
undefined
var aanNaam = "Reiziger, ";
undefined
document.write ("Beste " + aanNaam + "<br>" + basisBrief + "<br>" + vanNaam);
undefined
*/
/*groet = "goedenmiddag!"; document.write(groet);*/

for (tel = 1; tel <= 100; tel++)
{
document.write("100 x kopieer")
}

tel = 1
while (tel <= 10)
{ document.write("Ik zal...")
tel++
} 



