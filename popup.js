function displayTranslation(translatedText) {
  $('#giphy').attr('src', translatedText);
};

function getTranslation(word, displayCallback) {
  $.get("https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=" + word, function(response) {
    var data = response.data;
    if (data) {
      var firstImageUrl = data[0].images.original.url;
      displayCallback(firstImageUrl);
    }
  });
}

function translate() {
  var word = chrome.extension.getBackgroundPage().selectedWord;
  if (word) {
    getTranslation(word, displayTranslation);
  }
}

window.onload = translate;
window.onclick = window.close;
