// Listen for messages from the popup.js script
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "getDetails") {
      document.addEventListener('click', function(event) {
        event.preventDefault();
        const details = {
          className: event.target.className,
          id: event.target.id
        };
        alert(`Class: ${details.className}, ID: ${details.id}`); 
        return false; 
      }); 
    }
  
    if (request.action === "extractText") {
      const selection = window.getSelection().toString();
      navigator.clipboard.writeText(selection).then(function() {
        alert(`Copied: ${selection}`); // Or send this data back to popup.js
      }, function(err) {
        console.error('Could not copy text: ', err);
      });
    }
  
  
  });
  

  //don't know the logic of iFrames