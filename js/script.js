// js/script.js

// Ожидаем полной загрузки DOM
document.addEventListener('DOMContentLoaded', function() {

    // ===== ПЛАВНОЕ ПОЯВЛЕНИЕ ЭЛЕМЕНТОВ ПРИ СКРОЛЛЕ =====
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    function checkVisibility() {
        animatedElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            // Элемент виден, когда его верхняя граница выше низа окна браузера
            if (rect.top < window.innerHeight - 100) {
                element.classList.add('visible');
            }
        });
    }

    // Проверить при загрузке и при скролле
    checkVisibility();
    window.addEventListener('scroll', checkVisibility);

    // ===== БУРГЕР-МЕНЮ ДЛЯ МОБИЛЬНЫХ УСТРОЙСТВ =====
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.querySelector('.nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            
            // Анимация бургер-иконки в крестик
            const spans = menuToggle.querySelectorAll('span');
            if (nav.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }

    // Закрытие меню при клике на ссылку
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
                const spans = menuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    });

});