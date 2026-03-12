// Menu Burger //




  /// WORK BUG ///


document.addEventListener('DOMContentLoaded', () => {
    const hackerLetters = document.querySelectorAll('.hacker-letter');
    const randomLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    
    // Fonction pour générer une lettre aléatoire
    const getRandomLetter = () => {
      return randomLetters[Math.floor(Math.random() * randomLetters.length)];
    };
    
    // Fonction pour lancer l'animation "hacker" sur une lettre et retourner une Promise
    const animateHackerLetter = (letter) => {
      return new Promise((resolve) => {
        const original = letter.textContent;
        letter.setAttribute('data-letter', original);
        
        // Réinitialiser l'animation en retirant et réajoutant la classe 'active'
        letter.classList.remove('active');
        
        // Forcer le reflow pour réinitialiser l'animation
        void letter.offsetWidth;
        
        // Ajouter la classe 'active' pour démarrer l'animation "hacker"
        letter.classList.add('active');
        
        // Compteur de changements
        let iteration = 0;
        const maxIterations = 10; // Nombre d'itérations
        const intervalTime = 50; // Intervalle de 50ms

        // Changer les lettres de manière aléatoire
        const interval = setInterval(() => {
          if (iteration < maxIterations) {
            const randomChar = getRandomLetter();
            letter.textContent = randomChar;
            letter.setAttribute('data-letter', randomChar);
            iteration++;
          } else {
            clearInterval(interval);
            letter.textContent = original;
            letter.classList.remove('active');
            resolve(); // Indique que l'animation est terminée
          }
        }, intervalTime);
      });
    };
    
    // Fonction pour animer les lettres séquentiellement
    const animateLettersSequentially = async () => {
      for (const letter of hackerLetters) {
        await animateHackerLetter(letter);
      }
    };
    
    // Utiliser Intersection Observer pour détecter quand le h1 entre dans la vue
    const observerOptions = {
      root: null, // Observing within the viewport
      rootMargin: '0px',
      threshold: 0.5 // Trigger when 50% of the h1 is visible
    };

    
    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateLettersSequentially();
        }
      });
    };

    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    const target = document.querySelector('#Work h1');
    //const target2 = document.querySelector('#me');

    observer.observe(target);
    //observer.observe(target2);
  });
