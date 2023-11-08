// When the DOM is loaded, add click event listeners to the buttons
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('get-details').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action: "getDetails"});
    });
  });

  document.getElementById('open-tab').addEventListener('click', function() {
    chrome.tabs.create({url: 'http://test.com'});
  });

  document.getElementById('extract-text').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action: "extractText"});
    });
  });

  document.getElementById('fill-and-submit').addEventListener('click', function() {
    const valueToFill = document.getElementById('input-to-fill').value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action: "fillAndSubmit", value: valueToFill});
    });
  });
});
