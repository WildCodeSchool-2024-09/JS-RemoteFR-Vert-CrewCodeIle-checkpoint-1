const avatars = [
	{
		nameAvatar: "avatar1",
		picture: "./image/avatar-bis.png",
	},
	{
		nameAvatar: "avatar2",
		picture: "./image/avatar.svg",
	},
];

const avatarContainer = document.querySelector(".avatarContainer");

function changeAvatar(avatar) {
	const { nameAvatar, picture } = avatar;

	const avatarImg = document.createElement("img");
	avatarImg.src = "./image/avatar.svg";
	avatarImg.alt = nameAvatar;
	avatarImg.classList.add("avatarContainer");
	avatarContainer.appendChild(avatarImg);
}

////////////////////////
// ex JS 2 et 3 et 4:

function modifyNameAndColor() {
	const userName = prompt("Quel est votre nom ?");

	if (userName) {
		document.getElementById("firstname").textContent = userName;

		// exercice 3 :

		document.querySelector(".pink-bg").style.backgroundColor = "#750ff7";
		document.querySelector("#editButton").style.backgroundColor = "#750ff7";

		// exercice 4 :

		const pinkTextColor = document.querySelectorAll(".pink-text");

		pinkTextColor.forEach(function (element) {
			element.style.color = "#750ff7";
		});

		const colorBg = document.querySelectorAll(".pink-bg");

		colorBg.forEach(function (element) {
			element.style.backgroundColor = "#750ff7";
		});

		// exercice 5 :

		const linkColor = document.querySelectorAll("a");

		linkColor.forEach(function (element) {
			element.style.color = "#750ff7";
		});
	}
}

document
	.getElementById("editButton")
	.addEventListener("click", modifyNameAndColor);

////////////////////////////////
