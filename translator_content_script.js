var selectedText = function() {
  return window.getSelection().toString();
};

var sendSelectedText = function() {
  chrome.runtime.sendMessage({"type": "sendText", "text": selectedText()});
};

var bodies = document.getElementsByTagName("body");
if (bodies) {
  bodies[0].onmouseup = sendSelectedText;
}
