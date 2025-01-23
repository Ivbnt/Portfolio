// work //


const workTitle = document.querySelector('#Work h1');
const workSection = document.getElementById('Work');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio < 1) {
            workTitle.classList.remove('hide');
        } else if (!entry.isIntersecting) {
            workTitle.classList.add('hide');
        }
    });
}, { threshold: [0, 1] });

observer.observe(workSection);



