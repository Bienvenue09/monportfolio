// ================= MENU MOBILE =================

const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navbar.classList.contains("active")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


// Fermer le menu après avoir cliqué sur un lien

document.querySelectorAll("#navbar a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


// ================ FORMULAIRE ================

const form = document.getElementById("contact-form");
const statusMessage = document.getElementById("message-status");

form.addEventListener("submit", async function(event) {

    event.preventDefault();

    statusMessage.textContent = "Envoi en cours...";

    try {
        const response = await fetch(form.action, {
            method: "POST",
            body: new FormData(form),
            headers: {
                "Accept": "application/json"
            }
        });

        if (response.ok) {
            statusMessage.textContent =
                "Merci ! Votre message a bien été envoyé.";

            form.reset();

        } else {
            statusMessage.textContent =
                "Erreur lors de l'envoi. Réessayez.";
        }

    } catch (error) {
        statusMessage.textContent =
            "Problème de connexion. Réessayez.";
    }

});