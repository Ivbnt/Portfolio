  // Sélection des éléments
  const container = document.getElementById('image1');
  const image = container.querySelector('img');

  // Paramètre : angle max d'inclinaison
  const maxRotation = 15;

  // Quand la souris bouge dans le conteneur
  container.addEventListener('mousemove', (e) => {
    // Dimensions du conteneur et position relative
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left; 
    const y = e.clientY - rect.top;

    // Centre du conteneur
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calcul de l'inclinaison en fonction de la distance au centre
    const rotateX = ((y - centerY) / centerY) * maxRotation; // inclinaison verticale
    const rotateY = ((x - centerX) / centerX) * maxRotation; // inclinaison horizontale

    // Applique la transformation (on inverse l'axe X pour un ressenti plus intuitif)
    image.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  });

  // Réinitialise la rotation quand la souris sort
  container.addEventListener('mouseleave', () => {
    image.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
  });

