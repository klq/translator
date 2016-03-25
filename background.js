var selectedWord = '';

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if ((message.type) === "sendText") {
    selectedWord = message.text;
  }
});
