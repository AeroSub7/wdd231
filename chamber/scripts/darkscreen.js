const content = document.body;
const darkMode = document.querySelector('#dark-btn');

darkMode.addEventListener("click", () => {
    const isOpen = darkMode.classList.toggle('show');
    darkMode.setAttribute('aria-pressed', isOpen);
    content.classList.toggle('dark-mode');
});

