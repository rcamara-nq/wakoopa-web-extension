import API from './browser.js'

API.tabsOnActivated(function (activeInfo) {
    API.tabsQuery({
        active: true,
        currentWindow: true
    }, function (tabs) {
        var activeTab = tabs[0];
        API.tabsSendMessage(activeTab.id, {
            "message": "activated"
        });
    });
});

API.tabsOnUpdated(function (tabId, changeInfo, tab) {
    var activeTab = tab;
    API.tabsSendMessage(activeTab.id, {
        "message": "completed"
    });
});