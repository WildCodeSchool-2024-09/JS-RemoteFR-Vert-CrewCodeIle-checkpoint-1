/*
Écris une fonction qui, étant donné deux angles d'un triangle, renverra la valeur du troisième.
(Rappel : la somme des valeurs des trois angles dans un triangle est **toujours** 180°)
Ex: 
thirdAngle(90, 30) doit retourner 60
thirdAngle(20, 80) doit retourner 80
*/
const a = 90
const b = 30

function thirdAngle(a, b) {
  const c = 180
return c-(a+b)
}

console.log(thirdAngle(a, b));

module.exports = thirdAngle;
