class Browser {

    getBrowser() {
        if (typeof chrome !== 'undefined') {
            return chrome;
        }

        if (typeof browser !== 'undefined') {
            return browser;
        }
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
}

let API = new Browser();
export default API;