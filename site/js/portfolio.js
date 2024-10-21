const avatarImage1 = document.querySelector("#avatarImage");
const changeName = document.querySelector("#changeName");
const baseName = document.querySelector("#firstname");
const pinkText = document.querySelectorAll(".pink-text");
const pinkBackground = document.querySelectorAll(".pink-bg");
const navLink = document.querySelectorAll(".nav-link");
const modifyButton = document.querySelector("#changeDevtools");
const devTools = document.querySelectorAll(".devTools");

avatarImage1.addEventListener("click", function () {
  avatarImage1.src = "./image/avatar.svg";
});

//  create a click event
changeName.addEventListener("click", function () {
  const getColor = prompt("What's the color ?");
  console.log(getColor);
  // prompt value
  const getName = prompt("What's your name");
  console.log(getName);
  //   change the name in dom and the color
  baseName.textContent = getName;
  //change the color to white and purple
  baseName.style.color = "white";
  // créer une boucle pour select toute les class
  for (let i = 0; i < pinkText.length; i++) {
    pinkText[i].style.color = getColor;
  }
  for (let j = 0; j < pinkBackground.length; j++) {
    pinkBackground[j].style.backgroundColor = getColor;
  }
  for (let k = 0; k < navLink.length; k++) {
    navLink[k].style.color = getColor;
  }
});
modifyButton.addEventListener("click", function () {
  for (let x = 0; x < devTools.length; x++) {
    devTools[0].textContent = "VScode";
    devTools[1].textContent = "Terminal";
    devTools[2].textContent = "GitHub";
  }
});
