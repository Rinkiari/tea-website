let currentLang = localStorage.getItem('lang') || 'ru';

function setLanguage(lang) {
  currentLang = lang;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const key = el.getAttribute('data-i18n-html');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  document.documentElement.lang = lang;

  const labelSpan = document.querySelector('.langToggle .langLabel');
  if (labelSpan) {
    if (translations[lang] && translations[lang].lang_label) {
      labelSpan.textContent = translations[lang].lang_label;
    } else {
      labelSpan.textContent = lang === 'ru' ? 'English' : 'Русский';
    }
  }

  localStorage.setItem('lang', lang);
}

window.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);

  const btn = document.querySelector('.langToggle');
  if (btn) {
    btn.addEventListener('click', () => {
      setLanguage(currentLang === 'ru' ? 'en' : 'ru');
    });
  } else {
    console.error('Кнопка .langToggle не найдена!');
  }
});
