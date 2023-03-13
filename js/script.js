// Кнопка btn
let openPopUp = document.querySelectorAll('.btn ');
let closePopUp = document.querySelectorAll('.pop_up_close');
let popUp = document.querySelectorAll('.pop_up');
for(let i = 0; i < openPopUp.length; i++){
    openPopUp[i].addEventListener("click", function(event) {
        event.preventDefault();
        popUp[0].classList.add('active');
    });
}
for(let i = 0; i < closePopUp.length; i++){
    closePopUp[i].addEventListener("click", function(event) {
        event.preventDefault();
        popUp[0].classList.remove('active');
    });
};
// конец кода для кнопки btn

// Код для открытия меню
const navMain = document.querySelector('.nav-main');
const navToggle = document.querySelector('.nav-toggle');
navToggle.addEventListener('click', function() {
    navMain.classList.toggle('active');
});
document.querySelector('.nav-toggle-close').addEventListener('click', function() {
    navMain.classList.remove('active');
});
document.querySelectorAll('.nav-main a').forEach(function(item) {
    item.addEventListener('click', function() {
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
const popups = document.querySelectorAll('.popup');
const popupHeaders = document.querySelectorAll('.popup-header');
const popupTexts = document.querySelectorAll('.popup-text');
const popupCloses = document.querySelectorAll('.popup-close');

questionMarks.forEach((questionMark, index) => {
    questionMark.addEventListener('click', () => {
        const text = questionMark.getAttribute('data-text');
        const header = questionMark.getAttribute('data-header') || 'Информация';
        popupHeaders[index].textContent = header;
        popupTexts[index].textContent = text;
        popups[index].style.display = 'block';
    });
});

popupCloses.forEach((popupClose, index) => {
    popupClose.addEventListener('click', () => {
        popups[index].style.display = 'none';
    });
});

// Конец кода на всплывающее окно при клике на вопросительный знак

// Services меню смена блоков при клике
const links = document.querySelectorAll('.nav-services-link');
const blocks = document.querySelectorAll('.block-site');
blocks[0].style.display = 'flex';
links.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = event.target.id.replace('-link', '');
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
        blocks.forEach((block) => {
            block.style.display = 'none';
        });
        blocks[0].style.display = 'flex';
    }
});
// Конец кода для меню services
// Скрол меню
window.addEventListener('scroll', function() {
    var header = document.querySelector('header.main');
    header.classList.toggle('scrolling-active', window.scrollY > 0);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const headerHeight = document.querySelector('header').offsetHeight;
        window.scrollTo({
            top: target.offsetTop - headerHeight,
            behavior: 'smooth'
        });
    });
});
// Конец кода скрол меню
// Показать или скрыть стрелку в зависимости от прокрутки страницы
window.addEventListener('scroll', function() {
    const backToTopButton = document.querySelector('.back-to-top');
    if (window.pageYOffset > 200) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

// Перемещение страницы вверх при нажатии на стрелку
const backToTopButton = document.querySelector('.back-to-top');
backToTopButton.addEventListener('click', function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
});
// Конец кода скрола стрелочки ввверх
//Код для отправки почты
emailjs.init('9c-wLbqqkzjPo5xm3');

const popupTitle = document.getElementById('popup-title');
const popupForm = document.getElementById('popup-form');
const popupSuccess = document.getElementById('form-success');
const popupError = document.getElementById('form-error');

window.onload = function() {
    popupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm('contact_service', 'contact_form', this)
            .then(function() {
                popupSuccess.style.display = 'block';
                popupSuccess.style.color = 'orange';
                popupTitle.style.display = 'none';
                popupError.style.display = 'none';
                popupForm.style.display = 'none';
                console.log('SUCCESS!');
            }, function(error) {
                popupError.style.display = 'block';
                console.log('FAILED...', error);
            });
    });
}
//Конец кода отправки почты