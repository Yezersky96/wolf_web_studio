// const toggleButtons = document.querySelectorAll(".faq-toggle-button");
// toggleButtons.forEach(button => {
//     button.addEventListener("click", () => {
//         button.classList.toggle("open");
//     });
// });
//
//
// var modal = document.querySelector(".modal");
// var closeBtn = document.querySelector(".close");
// var modalHeading = document.querySelector("#modal-heading");
// var modalText = document.querySelector("#modal-text");
//
// // Обработчик события клика по ссылке
// document.querySelectorAll(".nav-services-link").forEach(function(link) {
//     link.addEventListener("click", function(event) {
//         event.preventDefault();
//
//         // Получаем данные для модального окна
//         var title = this.getAttribute("data-title");
//         var text = this.getAttribute("data-text");
//
//         // Заполняем модальное окно данными
//         modalHeading.innerHTML = title;
//         modalText.innerHTML = text;
//
//         // Открываем модальное окно
//         modal.style.display = "block";
//     });
// });
//
// // Обработчик события клика по кнопке закрытия модального окна
// closeBtn.addEventListener("click", function() {
//     modal.style.display = "none";
// });
//
// // Обработчик события клика по области вокруг модального окна
// window.addEventListener("click", function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// });
// /* кнопка 8 */
// let openPopUp = document.querySelectorAll('.btn ');
// let closePopUp = document.querySelectorAll('.pop_up_close');
// let popUp = document.querySelectorAll('.pop_up');
// for(let i = 0; i < openPopUp.length; i++){
//     openPopUp[i].addEventListener("click", function(event) {
//         event.preventDefault();
//         popUp[0].classList.add('active');
//     });
// };
// for(let i = 0; i < closePopUp.length; i++){
//     closePopUp[i].addEventListener("click", function(event) {
//         event.preventDefault();
//         popUp[0].classList.remove('active');
//     });
// };
//
// let navToggle = document.querySelector(".nav-toggle");
// let navMain = document.querySelector(".nav-main");
// let header = document.getElementById("page-header")
// navToggle.addEventListener("click", function () {
//     navToggle.classList.toggle("active");
//     navMain.classList.toggle("active");
//     header.classList.toggle("open");
// });
//
// // Показать или скрыть стрелку в зависимости от прокрутки страницы
// window.addEventListener('scroll', function() {
//     var backToTopButton = document.querySelector('.back-to-top');
//     if (window.pageYOffset > 200) {
//         backToTopButton.style.display = "block";
//     } else {
//         backToTopButton.style.display = "none";
//     }
// });
//
// // Перемещение страницы вверх при нажатии на стрелку
// var backToTopButton = document.querySelector('.back-to-top');
// backToTopButton.addEventListener('click', function() {
//     window.scrollTo({top: 0, behavior: 'smooth'});
// });
//


// Кнопка btn
let openPopUp = document.querySelectorAll('.btn ');
let closePopUp = document.querySelectorAll('.pop_up_close');
let popUp = document.querySelectorAll('.pop_up');
for(let i = 0; i < openPopUp.length; i++){
    openPopUp[i].addEventListener("click", function(event) {
        event.preventDefault();
        popUp[0].classList.add('active');
    });
};
for(let i = 0; i < closePopUp.length; i++){
    closePopUp[i].addEventListener("click", function(event) {
        event.preventDefault();
        popUp[0].classList.remove('active');
    });
};
// конец кода для кнопки btn

// Код для открытия меню
// Получаем элементы для работы с меню и кнопкой открытия
const navMain = document.querySelector('.nav-main');
const navToggle = document.querySelector('.nav-toggle');
// Добавляем обработчик события клика на кнопку открытия меню
navToggle.addEventListener('click', function() {
    // Добавляем/удаляем класс 'active' для открытия/закрытия меню
    navMain.classList.toggle('active');
});
// Добавляем обработчик события клика на кнопку закрытия меню
document.querySelector('.nav-toggle-close').addEventListener('click', function() {
    // Удаляем класс 'active' для закрытия меню
    navMain.classList.remove('active');
});
// Добавляем обработчик события клика на ссылки меню для их закрытия
document.querySelectorAll('.nav-main a').forEach(function(item) {
    item.addEventListener('click', function() {
        // Удаляем класс 'active' для закрытия меню
        navMain.classList.remove('active');
    });
});
// Конец кода для меню

// Код для раздела FAQ
const toggleButtons = document.querySelectorAll(".faq-toggle-button");

toggleButtons.forEach(button => {
    button.addEventListener("click", () => {
        button.classList.toggle("open");
        const section = button.parentElement;
        const text = section.querySelector(".text");
        text.classList.toggle("open");
    });
});

const titles = document.querySelectorAll(".faq-section > .title");

titles.forEach(title => {
    title.addEventListener("click", () => {
        const section = title.parentElement;
        const button = section.querySelector(".faq-toggle-button");
        button.classList.toggle("open");
        const text = section.querySelector(".text");
        text.classList.toggle("open");
    });
});
// конец кода раздела FAQ

// Код для всплывающего окна при клике на вопросительный знак
const questionMarks = document.querySelectorAll('.question-mark');

// Обработчик клика на каждый вопросительный знак
questionMarks.forEach((questionMark) => {
    questionMark.addEventListener('click', () => {
        // Получаем текст для отображения из атрибута data-text
        const text = questionMark.getAttribute('data-text');

        // Получаем заголовок для отображения из атрибута data-header или использовать значение по умолчанию
        const header = questionMark.getAttribute('data-header') || 'Информация';

        // Получаем элементы всплывающего окна
        const popup = document.querySelector('.popup');
        const popupHeader = document.querySelector('.popup-header');
        const popupText = document.querySelector('.popup-text');

        // Устанавливаем заголовок и текст всплывающего окна
        popupHeader.textContent = header;
        popupText.textContent = text;

        // Отображаем всплывающее окно
        popup.style.display = 'block';
    });
});

// Обработчик клика на кнопку закрытия всплывающего окна
const popupClose = document.querySelector('.popup-close');
popupClose.addEventListener('click', () => {
    const popup = document.querySelector('.popup');
    popup.style.display = 'none';
});
// Конец кода на всплывающее окно при клике на вопросительный знак

// Services меню смена блоков при клике
// получаем ссылки и блоки
const links = document.querySelectorAll('.nav-services-link');
const blocks = document.querySelectorAll('.block-site');

// показываем первый блок по умолчанию
blocks[0].style.display = 'flex';

// добавляем обработчик клика на каждую ссылку
links.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // предотвращаем переход по ссылке
        const targetId = event.target.id.replace('-link', ''); // получаем ID целевого блока
        // скрываем все блоки, кроме целевого
        blocks.forEach((block) => {
            if (block.id === targetId) {
                block.style.display = 'flex';
            } else {
                block.style.display = 'none';
            }
        });
    });
});

// добавляем обработчик на клик вне блоков
document.addEventListener('click', (event) => {
    if (!event.target.classList.contains('nav-services-link') && !event.target.closest('.block-site')) {
        // скрываем все блоки
        blocks.forEach((block) => {
            block.style.display = 'none';
        });
        // показываем первый блок по умолчанию
        blocks[0].style.display = 'flex';
    }
});
// Конец кода для меню services
// Скрол меню
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//
//         const target = document.querySelector(this.getAttribute('href'));
//         const headerHeight = document.querySelector('header').offsetHeight; // здесь можно использовать высоту любого другого элемента, который находится над якорной ссылкой
//
//         window.scrollTo({
//             top: target.offsetTop - headerHeight,
//             behavior: 'smooth'
//         });
//     });
// });
// Конец кода скрол меню
