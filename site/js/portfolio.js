const avatar = document.querySelector('.avatar');
const firstName = document.getElementById('firstname');
const changeNameButton = document.getElementById('changeNameButton');

// Changement avatar
avatar.addEventListener('click', function() {
    avatar.src = 'image/avatar.png';
});

// Changement de prénom
changeNameButton.addEventListener('click', function() {
    const newName = prompt("Please enter your name:");
    firstName.textContent = newName;
    firstName.style.color = 'white';
});