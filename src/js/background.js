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

API.onMessage((request, sender, sendResponse) => {
    if (request.save) {
        API.set('semaphore', request.save, null);
    }

    if (request.get) {
        API.get('semaphore', sendResponse);
    }

    return true;
});