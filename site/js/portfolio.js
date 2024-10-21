const avatar = document.querySelector('#avatarBis')
avatar.addEventListener('click', function(){
    avatar.src = "image/avatar.svg";
    avatar.alt = "New avatar";
})

const textModify = document.querySelector('#modify');
textModify.addEventListener("click",function(){
    let firstName = prompt("what your name?");
    if(firstName){
        document.getElementById("firstname").textContent = firstName;
        document.getElementById("firstname").style.color = "white";
    }
    let backgroundColor = prompt("Enter a color");
    if(backgroundColor){
        document.getElementsByClassName("pink-bg").style.background = backgroundColor; 
    }
});