// Scrипт для плавной прокрутки к разделам
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', function (event) {
    event.preventDefault(); // Предотвращает стандартное поведение ссылки
    const targetId = this.getAttribute('href').substring(1); // Убирает #
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 20, // Прокрутка с небольшим отступом
        behavior: 'smooth', // Плавная прокрутка
      });
    }
  });
});
