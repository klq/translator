// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// The background page is asking us to find a word on the page.
// if (window == top) {
//   chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
//     sendResponse(findWord());
//   });
// };

// chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
//     alert("got request");
//     if (request.method == "getSelection")
//       sendResponse({data: window.getSelection().toString()});
//     else
//       sendResponse({}); // snub them.
// });

// Search the text for selected word
// Return null if none is found.
// var findWord = function() {
//   return 'new stuff hello world';
//   var word = window.getSelection().toString();
// };

var sendSelectedText = function(){
  chrome.runtime.sendMessage({"type": "sendText", "text": "this is a test"});
};

var bodies = document.getElementsByTagName("body");
if (bodies) {
  bodies[0].onmouseup = sendSelectedText;
}
