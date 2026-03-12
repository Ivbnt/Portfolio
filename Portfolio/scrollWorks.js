    // 1) Sélectionner nos sections
    const work1 = document.getElementById("work1");
    const work2 = document.getElementById("work2");
    const work3 = document.getElementById("work3");
    const container = document.getElementById("scrollContainer");

    // 2) Calcule la zone "utile" de défilement 
    //    pour animer l'apparition progressive de Work2.
    //    - Début = le haut de .scroll-container 
    //    - Fin = le bas de .scroll-container 
    //      (ou un peu moins, selon l'effet souhaité)

    // On attend le "DOMContentLoaded" ou "load" pour que
    // offsetTop et offsetHeight soient corrects (si images, etc.)
    window.addEventListener('DOMContentLoaded', () => {
      setupScrolling();
    });

    function setupScrolling() {
      // position absolue du conteneur par rapport au document
      const containerStart = container.offsetTop;
      // hauteur du conteneur
      const containerHeight = container.offsetHeight;

      // calcul de la zone de défilement 
      // (on veut que l'animation se fasse sur la hauteur de 1 écran 
      //  dans ce cas. On pourrait le faire sur tout containerHeight 
      //  si on veut. À adapter.)
      const windowH = window.innerHeight;
      // On peut décider que l'animation se fasse 
      // entre containerStart et containerStart + windowH
      // de sorte que sur la 2e moitié, Work2 soit entièrement affiché.

      const startAnim = containerStart;          // début animation
      const endAnim   = containerStart + windowH; // fin animation

      window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        // Calculer la progression entre 0 et 1
        let progress = (scrollY - startAnim) / (endAnim - startAnim);

        // Clamper entre 0 et 1 pour ne pas dépasser
        if (progress < 0) progress = 0;
        if (progress > 1) progress = 1;

        // On veut qu'à progress=0 => translateY(100%) (invisible en bas)
        // et à progress=1 => translateY(0%) (complètement visible).
        const translateValue = 100 - (100 * progress);
        const translateValuework1 = 100 - (100 * progress);

        // Appliquer le transform
        work1.style.transform = `translateY(${translateValuework1}%)`;
        work2.style.transform = `translateY(${translateValue}%)`;
        work3.style.transform = `translateY(${translateValue}%)`;
      });
    }