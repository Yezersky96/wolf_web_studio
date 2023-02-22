const toggleButtons = document.querySelectorAll(".faq-toggle-button");

toggleButtons.forEach(button => {
    button.addEventListener("click", () => {
        button.classList.toggle("open");
    });
});

