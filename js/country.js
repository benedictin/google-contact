const countries = [
    { name: "France +44", code: "fr" },
    { name: "Allemagne +41", code: "de" },
    { name: "Italie +46", code: "it" },
    { name: "Espagne +49", code: "es" },
    { name: "États-Unis +1", code: "us" },
    { name: "Congo Kinshasa +243", code: "cd" },
    { name: "Congo Brazzaville +242", code: "cg" },
    { name: "Côte d'Ivoire +225", code: "ci" },
    { name: "Cameroun +237", code: "cm" },
    // Ajoutez d'autres pays ici
];
 const flagDisplay = document.getElementById('flagDisplay');
const select = document.getElementById('countrySelect');
flagDisplay.innerHTML =  `<img src="https://flagcdn.com/cd.svg" class="flag" alt="Drapeau">`;
countries.forEach(country => {
    const option = document.createElement('option');
    option.value = country.code; // Utiliser le code pour la valeur
    option.textContent = country.name; // Nom du pays affiché
    select.appendChild(option);
});
select.addEventListener('change', function() {
   
    const flagUrl = `https://flagcdn.com/${select.value}.svg`; // URL du drapeau

    if (select.value) {
        flagDisplay.innerHTML = `<img src="${flagUrl}" class="flag" alt="Drapeau">`; // Afficher le drapeau
    } else {
        flagDisplay.innerHTML =  `<img src="https://flagcdn.com/cd.svg" class="flag" alt="Drapeau">`; // Réinitialiser si aucune sélection
    }
});
