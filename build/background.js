console.log("mertcan");
chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.sendMessage(tab.id, {a : 1}, function(response) {
        
      });
});
