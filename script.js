document.addEventListener('DOMContentLoaded', function() {
  var languageFlag = document.getElementById('current-lang');
  var enButton = document.getElementById('en-btn');
  var esButton = document.getElementById('es-btn');

  var storedLanguage = localStorage.getItem('selectedLanguage') || 'en';
  var imagePath = localStorage.getItem('selectedLanguageFlag') || 'img/united-kingdom.png';

  var i18n = domI18n({
    selector: '[data-translatable]',
    separator: ' // ',
    languages: ['en', 'es'],
    defaultLanguage: 'en',
    currentLanguage: storedLanguage,
  });

  languageFlag.src = imagePath;

  enButton.onclick = function () {
    i18n.changeLanguage('en');
    localStorage.setItem('selectedLanguage', 'en');
    localStorage.setItem('selectedLanguageFlag', 'img/united-kingdom.png');
    languageFlag.src = 'img/united-kingdom.png';
  };

  esButton.onclick = function () {
    i18n.changeLanguage('es');
    localStorage.setItem('selectedLanguage', 'es');
    localStorage.setItem('selectedLanguageFlag', 'img/spain.png');
    languageFlag.src = 'img/spain.png';
  };

  window.addEventListener('beforeunload', function (event) {
    localStorage.setItem('selectedLanguageFlag', languageFlag.src);
  });
});

document.getElementById('scrollUp').addEventListener('click', function(event) {
  event.preventDefault();
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
});