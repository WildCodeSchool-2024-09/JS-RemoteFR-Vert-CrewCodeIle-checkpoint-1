// step 1
const avatarImage = document.querySelector('.avatar img'); 


const newPicture = "image/romain.png"; 


avatarImage.addEventListener('click', function() {
    this.src = newPicture; 
    this.alt = "Photo du wilder"; 
});

// step 2

const changeNameButton = document.querySelector('#changeNameBtn');
const oldName = document.querySelector('#firstname');


changeNameButton.addEventListener('click', function() {
    const newName = prompt("Quel est votre nom ?");
    // newName.style.textColor = '#0000FF';
    oldName.textContent = newName; 
});

// step 3 

const changeColorButton = document.querySelector('#changeNameBtn'); 
const newColorArticle = document.querySelector('article'); 

changeColorButton.addEventListener('click', function() {
    newColorArticle.style.backgroundColor = '#750ff7';
    newColorArticle.style.color = '#FFFFFF';
});

