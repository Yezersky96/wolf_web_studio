const toggleButtons = document.querySelectorAll(".faq-toggle-button");
toggleButtons.forEach(button => {
    button.addEventListener("click", () => {
        button.classList.toggle("open");
    });
});


var modal = document.querySelector(".modal");
var closeBtn = document.querySelector(".close");
var modalHeading = document.querySelector("#modal-heading");
var modalText = document.querySelector("#modal-text");

// Обработчик события клика по ссылке
document.querySelectorAll(".nav-services-link").forEach(function(link) {
    link.addEventListener("click", function(event) {
        event.preventDefault();

        // Получаем данные для модального окна
        var title = this.getAttribute("data-title");
        var text = this.getAttribute("data-text");

        // Заполняем модальное окно данными
        modalHeading.innerHTML = title;
        modalText.innerHTML = text;

        // Открываем модальное окно
        modal.style.display = "block";
    });
});

// Обработчик события клика по кнопке закрытия модального окна
closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
});

// Обработчик события клика по области вокруг модального окна
window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});
/* кнопка 8 */
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

const navToggle = document.querySelector('.nav-toggle');
const navToggleClose = document.querySelector('.nav-toggle-close');
const navMain = document.querySelector('.nav-main');

function toggleNav() {
    navToggle.classList.toggle('active');
    navMain.classList.toggle('active');
}

function closeNav() {
    navToggle.classList.remove('active');
    navMain.classList.remove('active');
}

navToggle.addEventListener('click', toggleNav);
navToggleClose.addEventListener('click', closeNav);


// Показать или скрыть стрелку в зависимости от прокрутки страницы
window.addEventListener('scroll', function() {
    var backToTopButton = document.querySelector('.back-to-top');
    if (window.pageYOffset > 200) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

// Перемещение страницы вверх при нажатии на стрелку
var backToTopButton = document.querySelector('.back-to-top');
backToTopButton.addEventListener('click', function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
});





