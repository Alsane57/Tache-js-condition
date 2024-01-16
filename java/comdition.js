// Demander à l'utilisateur d'entrer son âge
var age = prompt("Entrez votre âge :");

// l'entrée en nombre
age = parseInt(age);

// Vérifier la catégorie d'âge
if (age >= 0 && age <= 14) {
    console.log("Enfants");

} else if (age >= 15 && age <= 25) {
    console.log("Adolescents");

} else if (age >= 26 && age <= 64) {
    console.log("Adultes");

} else if (age >= 65) {
    console.log("Aînés");

} else {
    console.log("Âge non valide");
}
