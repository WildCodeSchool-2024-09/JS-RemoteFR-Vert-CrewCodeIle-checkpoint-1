const avatar = document.querySelector(".avatar")

avatar.onclick = function() {
    avatar.src ="image/avatar.svg"
}

const buttonText = document.querySelector(".modifyText");



buttonText.addEventListener('click',function(){
    const firstName = document.querySelector("#firstname");
    const userName= prompt('Entrez votre nom')
    firstName.textContent = `${userName}`
    firstName.style.color='white'
    
    const userColor = document.querySelector(".description");
    const backGround = prompt('Choisissez une couleur')
    userColor.style.backgroundColor = `${backGround}`
    
    const ChangeAllColor = document.querySelectorAll(".pink-text");
    const colorOfElement = prompt('Choisissez une couleur')
    ChangeAllColor.style.color = `${colorOfElement}`
}
)

