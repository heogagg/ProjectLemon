document.addEventListener("DOMContentLoaded", function() {
    const fadeElements = document.querySelectorAll('.grid-image');

    function checkVisibility() {
        const triggerBottom = window.innerHeight / 5 * 4; // Позиция триггера

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