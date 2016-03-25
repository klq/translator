// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function get_translation(word) {
  console.log(word);

  var translation = $('#translation');
  translation.text("This is a test.");
  translation.click(function () {
    window.close();
  });
}


function translate() {
  var word = chrome.extension.getBackgroundPage().selectedWord;
  var otherword = chrome.extension.getBackgroundPage().logmsg;
  console.log(word);
  console.log(otherword);
  if (true)
    get_translation(word);
}

window.onload = translate;

