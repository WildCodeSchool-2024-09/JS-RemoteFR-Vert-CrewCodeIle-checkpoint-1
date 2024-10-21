const avatarImage = document.getElementById("avatar");
avatarImage.addEventListener("click", function () {
	avatarImage.src = "image/avatar.svg";
});

const replaceNameButton = document.createElement("Button");
const sectionButton = document.querySelector(".description");
const textButton = document.createTextNode("modify text and color");
sectionButton.appendChild(replaceNameButton);
replaceNameButton.appendChild(textButton);

replaceNameButton.addEventListener("click", function () {
	// prompt("Enter a color");
	const firstName = prompt("Enter your name");
	const firstNameSpan = document.getElementById("firstname");
	firstNameSpan.textContent = firstName;
	firstNameSpan.style.color = "white";
});
