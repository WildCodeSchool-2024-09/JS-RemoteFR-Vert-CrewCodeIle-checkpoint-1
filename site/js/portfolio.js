const imageProfil = document.querySelector("#image_profil");

imageProfil.addEventListener("click", () => { imageProfil.src="image/avatar.svg"})

const descriptionProfil = document.querySelector("#description")

const nameButton = document.createElement("button")
nameButton.textContent = "Modify text and color"
nameButton.style.width = "50"
nameButton.style.padding = "1% 3%"
nameButton.style.margin= "1rem 0"
nameButton.style.border = "solid 2px white"
nameButton.style.borderRadius = "1rem"
nameButton.style.backgroundColor = "var(--lightWildColor)"
nameButton.style.fontSize = "1.2rem"
nameButton.style.color = "white"
descriptionProfil.appendChild(nameButton)


const SectionFrontEnd = document.querySelector("#front-dev-tools")

const listButton = document.createElement("button")
listButton.textContent = "Modify"
listButton.style.width = "50"
listButton.style.marginTop = "1rem"
listButton.style.padding = "5% 10%"
listButton.style.borderRadius = "0.5rem"
listButton.style.border = "none"
listButton.style.backgroundColor = "var(--lightWildColor)"
listButton.style.color= "white"

SectionFrontEnd.appendChild(listButton)

const sectionBackEnd = document.querySelector(".column > ul")
const formulaire = document.createElement("form")
formulaire.style.display = "flex"
formulaire.style.height = "100%"
formulaire.style.gap = "1rem"
formulaire.style.height = "2rem"
formulaire.style.margin = "0.5rem"
const inputAddLanguage = document.createElement("input")
inputAddLanguage.style.width =  "70%"


const AddButton = document.createElement("button")
AddButton.textContent = "Add"
AddButton.style.width = "25%"
AddButton.style.padding = "5% 10%"
AddButton.style.borderRadius = "0.5rem"
AddButton.style.border = "none"
AddButton.style.backgroundColor = "var(--lightWildColor)"
AddButton.style.color= "white"
AddButton.style.textAlign = "start"

sectionBackEnd.appendChild(formulaire)
formulaire.appendChild(inputAddLanguage)
formulaire.appendChild(AddButton)



const userName = document.querySelector("#firstname")
const ColorOftheWebSite = document.querySelector(".pink-bg")
const footer = document.querySelector("footer")
const colorSubTitle = document.querySelectorAll(".pink-text")
const linkOfWebSite = document.querySelectorAll("a")

nameButton.addEventListener("click", () => {
    userName.textContent = prompt("Enter your name")
    userName.style.color = "white"
    let SelecetedColorOftheWebSite = prompt("Enter an hexadecimal color ex: #000000")
    ColorOftheWebSite.style.backgroundColor = SelecetedColorOftheWebSite
    footer.style.backgroundColor = SelecetedColorOftheWebSite
    listButton.style.backgroundColor = SelecetedColorOftheWebSite
    nameButton.style.backgroundColor = SelecetedColorOftheWebSite
    AddButton.style.backgroundColor = SelecetedColorOftheWebSite

    for (let i = 0; i < colorSubTitle.length; i++) {
        colorSubTitle[i].style.color = SelecetedColorOftheWebSite
    }

    for (let j = 0; j < linkOfWebSite.length; j ++) {
        linkOfWebSite[j].style.color = SelecetedColorOftheWebSite
    }

})  


const listFrontEnd = SectionFrontEnd.querySelectorAll("li")
const listOfLanguage = ["VS Code", "Github", "Terminal"]

listButton.addEventListener("click", () => {
    for (let k = 0; k < listFrontEnd.length; k++) {
        listFrontEnd[k].textContent = listOfLanguage[k]
    }
})





