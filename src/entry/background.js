setTimeout(() => {
  chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {

    if (tab.status == 'complete' && tab.url == 'https://www1.reg.cmu.ac.th/registrationoffice/student/main.php?mainfile=studentgrad') {

      chrome.tabs.sendMessage(tab.id, {}, function (response) {
      });
    }
  })
}, 2000)