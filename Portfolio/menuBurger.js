const burger = document.getElementById('burger');
        const sideMenu = document.getElementById('side-menu');
        const closeBtn = document.getElementById('close-btn');
        const overlay = document.getElementById('overlay');

        // Fonction pour ouvrir le menu latéral
        const openMenu = () => {
            sideMenu.classList.add('open');
            overlay.classList.add('open');
            // Désactiver le scroll du corps lorsque le menu est ouvert
            document.body.style.overflow = 'hidden';
        };

        // Fonction pour fermer le menu latéral
        const closeMenu = () => {
            sideMenu.classList.remove('open');
            overlay.classList.remove('open');
            // Réactiver le scroll du corps lorsque le menu est fermé
            document.body.style.overflow = '';
        };

        // Ouvrir le menu quand on clique sur le burger
        burger.addEventListener('click', openMenu);

        // Fermer le menu quand on clique sur le bouton de fermeture
        closeBtn.addEventListener('click', closeMenu);

        // Fermer le menu quand on clique sur l'overlay
        overlay.addEventListener('click', closeMenu);

        // Optionnel : Fermer le menu avec la touche Échap
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeMenu();
            }
        });