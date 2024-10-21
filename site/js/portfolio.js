document.addEventListener('DOMContentLoaded', function() {
    const avatar = document.getElementById('avatar');
    const newAvatarImage = 'image/avatar.svg';
    const changeNameColorBtn = document.getElementById('changeNameColorBtn');
    const firstname = document.getElementById('firstname');
    const descriptionSection = document.getElementById('description');

    // Gestion du clic sur l'avatar
    if (avatar) {
        avatar.addEventListener('click', function() {
            avatar.src = newAvatarImage;
        });
    }

    // Gestion du clic sur le bouton pour changer la couleur et le nom
    if (changeNameColorBtn) {
        changeNameColorBtn.addEventListener('click', function() {
            const userColor = prompt("Entrez la nouvelle couleur");


            if (userColor) {
                descriptionSection.style.backgroundColor = userColor;

                const pinkTexts = document.querySelectorAll('.pink-text');
                pinkTexts.forEach(function(element) {
                    element.style.color = userColor;
                });

                const footer = document.querySelector('footer');
                footer.style.backgroundColor = userColor;
            }

            const userName = prompt("Entrez votre nom");

            if (userName) {
                firstname.textContent = userName;
                firstname.style.color = 'white';
            }
        });
    }
});
