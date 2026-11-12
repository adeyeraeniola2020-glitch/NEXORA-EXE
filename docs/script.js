// NEXORA EXE - Main JavaScript

function welcomePlayer() {
    const gamesSection = document.getElementById("girly");

    if (gamesSection) {
        gamesSection.scrollIntoView({
            behavior: "smooth"
        });
    }
}

function comingSoon() {
    alert("This game is coming soon to NEXORA EXE!");
}

// DRESS UP FEST

let fashionLook = {
    hair: "",
    outfit: "",
    shoes: "",
    accessory: ""
};

function changeStyle(category, item) {
    fashionLook[category] = item;

    const character = document.getElementById("character-display");

    const result = document.getElementById("selected-style");

    if (character && result) {
        character.innerHTML =
            "👩🏽 " +
            fashionLook.hair + " " +
            fashionLook.outfit + " " +
            fashionLook.shoes + " " +
            fashionLook.accessory;

        result.innerHTML =
            "Hair: " + (fashionLook.hair || "Not selected") + "<br>" +
            "Outfit: " + (fashionLook.outfit || "Not selected") + "<br>" +
            "Shoes: " + (fashionLook.shoes || "Not selected") + "<br>" +
            "Accessory: " + (fashionLook.accessory || "Not selected");
    }
}

function resetFashion() {
    fashionLook = {
        hair: "",
        outfit: "",
        shoes: "",
        accessory: ""
    };

    document.getElementById("character-display").innerHTML = "👩🏽";

    document.getElementById("selected-style").innerHTML =
        "Choose your fashion items!";
}
