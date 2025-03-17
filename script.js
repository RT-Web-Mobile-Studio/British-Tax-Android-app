document.addEventListener('DOMContentLoaded', function() {
    const phases = document.querySelectorAll('.phase');

    function checkVisibility() {
        phases.forEach(phase => {
            const rect = phase.getBoundingClientRect();
            const isVisible = (rect.top <= window.innerHeight && rect.bottom >= 0);

            if (isVisible) {
                phase.classList.add('visible');
            }
        });
    }

    // Initial check
    checkVisibility();

    // Check on scroll
    window.addEventListener('scroll', checkVisibility);
});