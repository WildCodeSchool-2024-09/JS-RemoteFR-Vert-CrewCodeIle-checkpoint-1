const avatar = document.querySelector(".avatar")

avatar.onclick = function() {
    avatar.src ="image/avatar.svg"
}

const firstName = document.querySelector("#firstname")
const buttonText = document.querySelector(".modifyText")
const userColor = document.querySelector(".description")
const ChangeAllColor = document.querySelector(".pink-text")


buttonText.addEventListener('click',function(){
    const userName= prompt('Entrez votre nom')
    firstName.textContent = `${userName}`
    
   
    const backGround = prompt('Choisissez une couleur')
    userColor.style.backgroundColor = `${backGround}`

    const colorOfElement = prompt('Choisissez une couleur')
    ChangeAllColor.style.color = `${colorOfElement}`
}
)

