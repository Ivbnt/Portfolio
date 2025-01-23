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



const work2 = document.getElementById('work2');
const obs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      work2.classList.add('visible');
    }
  });
}, { threshold: 0.1 });
obs.observe(work2);
