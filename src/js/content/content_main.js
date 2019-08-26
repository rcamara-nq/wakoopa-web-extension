import API from './../browser.js'
import Wakoopa from './wakoopa.js'

API.onMessage((request, sender, sendResponse) => {
    if (request.message) {
        API.get('semaphore', function (result) {
            if (result.semaphore && result.semaphore) {
                Wakoopa.wakooped();
            }
        })
    }

    return true;
});