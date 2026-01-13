/* MOBILE MENU */
function toggleMenu() {
    document.getElementById("mobileNav").classList.toggle("active");
}

/* COUNTER ANIMATION */
const counters = document.querySelectorAll('.count');
let started = false;

function startCounter() {
    counters.forEach(counter => {
        const target = +counter.dataset.target;
        let count = 0;
        const speed = target / 100;

        const update = () => {
            count += speed;
            if (count < target) {
                counter.innerText = Math.ceil(count);
                requestAnimationFrame(update);
            } else {
                counter.innerText = target;
            }
        };
        update();
    });
}

window.addEventListener('scroll', () => {
    const section = document.querySelector('.impact-section');
    if (!section) return;

    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight && !started) {
        started = true;
        startCounter();
    }
});
