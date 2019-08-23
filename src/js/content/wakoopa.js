import Helper from './helpers.js'

class Wakoopa {
    wakooped() {
        let images = document.querySelectorAll('img');
        images.forEach((element, index) => {
            if (!element.className.includes('wakooped')) {
                let rand = Helper.randomInt(1, 4);
                var image = chrome.extension.getURL(`img/${rand}.JPG`);
                var width = element.offsetWidth;
                var height = element.offsetHeight;

                element.className += ' wakooped';
                element.src = image;
                element.style.width = width + 'px';
                element.style.height = height + 'px';
            }
        })
    }
}

let wakoopa = new Wakoopa();
export default wakoopa;