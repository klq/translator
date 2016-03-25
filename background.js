// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Global accessor that the popup uses.
var words = {};
var selectedWord = null;
var selectedId = null;
var logmsg = 'original';

function updateWord(tabId) {
  chrome.tabs.sendRequest(tabId, {}, function(word) {
    words[tabId] = word;
    if (!word) {
      chrome.pageAction.show(tabId);
      if (selectedId == tabId) {
        updateSelected(tabId);
      }
    } else {
      chrome.pageAction.show(tabId);
      if (selectedId == tabId) {
        updateSelected(tabId);
      }
    }
  });
}

function updateSelected(tabId) {
  selectedWord = words[tabId];
  if (selectedWord)
    chrome.pageAction.setTitle({tabId:tabId, title:selectedWord});
}

chrome.tabs.onUpdated.addListener(function(tabId, change, tab) {
  if (change.status == "complete") {
    updateWord(tabId);
    logmsg = "hello hello " + tabId;
  }
});

chrome.tabs.onSelectionChanged.addListener(function(tabId, info) {
  selectedId = tabId;
  updateSelected(tabId);
});


chrome.tabs.onSelectionChanged.addListener(function(tab) {
  chrome.tabs.sendRequest(tab.id, {method: "getSelection"}, function(response){
    var word = response.data;
    words[tab.id] = word;
    if (!word) {
      if (selectedId == tab.id) {
        updateSelected(tab.id);
      };
    };
  });
});

// Ensure the current selected tab is set up.
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  updateWord(tabs[0].id);
});
