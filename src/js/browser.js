class Browser {

    getBrowser() {
        if (typeof chrome !== 'undefined') {
            return chrome;
        }

        if (typeof browser !== 'undefined') {
            return browser;
        }
    }

    sendMessage(message, callback_function) {
        this.getBrowser().runtime.sendMessage(message, callback_function);
    }

    tabsQuery(opt, callback_function) {
        this.getBrowser().tabs.query(opt, callback_function);
    }

    tabsOnActivated(callback_function) {
        this.getBrowser().tabs.onActivated.addListener(callback_function);
    }

    tabsOnUpdated(callback_function) {
        this.getBrowser().tabs.onUpdated.addListener(callback_function);
    }

    onMessage(callback_function) {
        this.getBrowser().runtime.onMessage.addListener(callback_function);
    }

    tabsSendMessage(active_tab, payload) {
        this.getBrowser().tabs.sendMessage(active_tab, payload);
    }

    set(key, value, callback_function) {
        let obj = {};
        obj[key] = value;
        this.getBrowser().storage.local.set(obj, callback_function);
    }

    get(key, callback_function) {
        this.getBrowser().storage.local.get(key, function (items) {
            callback_function(items);
        });
    }
}

let API = new Browser();
export default API;