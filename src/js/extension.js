import API from './browser.js'

function onLoad(callback) {
    document.addEventListener("DOMContentLoaded", callback());
}

onLoad(() => {
    let inputCheckbox = document.getElementById('wakoopa-action');
    inputCheckbox.addEventListener('change', (event) => {
        let targetElement = event.target || event.srcElement;
        API.set('semaphore', targetElement.checked, null);
    }, false);

    // Put input as checked if semaphore true
    API.get('semaphore', (result) => {
        if (result.semaphore && result.semaphore) {
            inputCheckbox.checked = true;
        }
    });
})