// scrипт для плавной прокрутки к разделам
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', function (event) {
    event.preventDefault(); // предотвращает стандартное поведение ссылки
    const targetId = this.getAttribute('href').substring(1); // убирает #
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 20, // прокрутка с небольшим отступом
        behavior: 'smooth', // плавная прокрутка
      });
    }
  });
});

// strelka
const scrollBtn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 750) {
    scrollBtn.classList.add('show');
  } else {
    scrollBtn.classList.remove('show');
  }
});
