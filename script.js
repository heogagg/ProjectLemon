document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll('.fade-in');
    const videos = document.querySelectorAll('video');

    function checkVisibility() {
        const triggerBottom = window.innerHeight / 6 * 3; // Позиция триггера

        fadeElements.forEach(element => {
            const box = element.getBoundingClientRect();
            const boxTop = box.top;

            if (boxTop < triggerBottom) {
                element.classList.add('visible');
            } else {
                element.classList.remove('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Проверяем видимость при загрузке страницы
});