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
// ex JS 2 et 3 :

function modifyNameAndColor() {
	const userName = prompt("Quel est votre nom ?");

	if (userName) {
		document.getElementById("firstname").textContent = userName;
		document.querySelector(".pink-bg").style.backgroundColor = "#750ff7";
	}
}

document
	.getElementById("editButton")
	.addEventListener("click", modifyNameAndColor);

////////////////////////////////
