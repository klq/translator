function displayTranslation(translatedText) {
  var translation = $('#translation');
  translation.text(translatedText);
};

function getTranslation(word) {
  // TODO: call translation service
  return word;
}

function translate() {
  var word = chrome.extension.getBackgroundPage().selectedWord;
  if (word) {
    translatedText = getTranslation(word);
    displayTranslation(translatedText);
  }
}

window.onload = translate;
window.onclick = window.close;
