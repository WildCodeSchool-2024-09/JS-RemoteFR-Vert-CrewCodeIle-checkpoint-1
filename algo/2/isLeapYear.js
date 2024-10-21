/*
Écris une fonction qui peut déterminer si une année est une année bissextile. Elle doit renvoyer `true` si c'est le cas, et `false` sinon.
Rappel : Une année bissextile vérifie **une** de ces règles :
- Elle est divisible par 4, sans être divisible par 100
- Elle est divisible par 400
Ex : 2004, 2016 et 2020 sont des années bissextiles
Rappel : Pour vérifier si un nombre est divisible par un autre, tu peux utiliser l'opérateur "modulo" (%)
*/
let result = false;

function isLeapYear(year) {
  // Your code here 

  const rule11 = year % 4;
  const rule12 = year % 100;
  const rule2 = year % 400;

  if (((rule11 === 0) && (rule12 != 0)) || (rule2 === 0)) {
    return result = true;
  } else {
    return result = false;
  }
}


module.exports = isLeapYear;
