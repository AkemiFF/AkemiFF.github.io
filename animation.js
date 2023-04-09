// récupérer les éléments span dans le DOM
const spans = document.querySelectorAll('.home-content h3 span');
const span1 = document.querySelector('.ability span');
const span2 = document.querySelector('.portfolio span');
const span3 = document.querySelector('.service span');
// initialiser l'index et le sens de l'affichage des spans
let spanIndex = 0;
let spanDirection = 1;

// fonction pour afficher les lettres d'un span lettre par lettre
function animateSpan(span) {
    const letters = span.textContent.split('');
    span.textContent = '';
    letters.forEach((letter, index) => {
        setTimeout(() => span.textContent += letter, 100 * index);
    });
}

// fonction pour alterner l'affichage des deux spans en boucle
function loopSpans() {
    animateSpan(span1);
    animateSpan(span2);
    animateSpan(span3);
    animateSpan(spans[spanIndex]);
    spanIndex += spanDirection;
    if (spanIndex >= spans.length || spanIndex < 0) {
        spanDirection = -spanDirection;
        spanIndex += spanDirection;
    }
    setTimeout(loopSpans, 1500);
}

loopSpans();






