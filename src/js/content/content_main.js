import API from './../browser.js'
import Wakoopa from './wakoopa.js'

function main() {
    API.onMessage((request, sender, sendResponse) => {
        Wakoopa.wakooped();
    })
}

main();