// Récupération de l'élément image
var img = document.getElementById("hexagon");

// Initialisation des variables de position
var pos = 0;
var dir = 1;

// Fonction d'animation
function animate() {
    // Déplacement de l'image
    pos += dir;
    img.style.top = pos + "px";

    // Inversion de la direction si l'image atteint les bords
    if (pos > 50 || pos < -50) {
        dir = -dir;
    }

    // Demande d'animation de la fonction à chaque frame
    window.requestAnimationFrame(animate);
}

// Démarrage de l'animation
animate();
