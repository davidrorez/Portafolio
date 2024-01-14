var languageFlag = document.getElementById('current-lang');
var enButton = document.getElementById('en-btn');
var esButton = document.getElementById('es-btn');
var i18n = domI18n({
  selector: '[data-translatable]',
  separator: ' // ',
  languages: ['en', 'es'],
  defaultLanguage: 'en'
});

enButton.onclick = function () {
  i18n.changeLanguage('en');
  languageFlag.src = 'img/united-kingdom.png'
};

esButton.onclick = function () {
  i18n.changeLanguage('es');
  languageFlag.src = 'img/spain.png'
};
