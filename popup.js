function displayTranslation(translatedText) {
  $('#translation').text(translatedText);
};

function displayGiphy(imgUrl) {
  $('#giphy').attr('src', imgUrl);
};

function getTranslation(word, displayCallback) {
  var translatedText = "gato gato gato!!";
  if (translatedText) {
    displayCallback(translatedText);
  } else {
    displayCallback("Sorry! Word: \'" + word + "\' not found. ")
  };
};

function getGiphy(word, displayCallback) {
  $.get("https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=" + word, function(response) {
    var data = response.data;
    if (data) {
      var firstImageUrl = data[0].images.fixed_height.url;
      displayCallback(firstImageUrl);
    };
  });
};

function translate() {
  var word = chrome.extension.getBackgroundPage().selectedWord;
  if (word) {
    getTranslation(word, displayTranslation);
    getGiphy(word, displayGiphy);
  };
};

window.onload = translate;
window.onclick = window.close;
