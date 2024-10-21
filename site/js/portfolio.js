const avatarImage = document.getElementById("avatar");
avatarImage.addEventListener("click", () => {
	avatarImage.src = "image/avatar.svg";
});

const replaceNameButton = document.createElement("Button");
const sectionButton = document.querySelector(".description");
const textButton = document.createTextNode("modify text and color");
sectionButton.appendChild(replaceNameButton);
replaceNameButton.appendChild(textButton);

replaceNameButton.addEventListener("click", () => {
	const myColor = prompt("Enter a color");
	const firstName = prompt("Enter your name");
	const firstNameSpan = document.getElementById("firstname");
	firstNameSpan.textContent = firstName;
	firstNameSpan.style.color = "white";
	const background = document.querySelector(".pink-bg");
	const textColor = document.querySelectorAll(".pink-text");
	background.style.backgroundColor = myColor;
	textColor.forEach(function (textColor) {
		textColor.style.color = myColor;
	});
	const linkColor = document.querySelectorAll("a");
	background.style.backgroundColor = myColor;
	linkColor.forEach(function (linkColor) {
		linkColor.style.color = myColor;
	});
});
