import { Controller } from '@hotwired/stimulus';

/* stimulusFetch: 'lazy' */
export default class extends Controller {
    connect() {
        if (!navigator.share) {
            return;
        }
        this.element.classList.remove('hidden');
        const dataToShare = { title: this.element.getAttribute('data-title')};

        let url = document.location.href;

        const canonicalElement = document.querySelector('link[rel=canonical]');
        if (canonicalElement !== null) {
            url = canonicalElement.href;
        }
        dataToShare.url = url;

        this.element.onclick = function(e) {
            e.preventDefault();
            console.log(dataToShare);
            navigator.share(dataToShare)
                .then(() => console.log('Successful share'))
                .catch((error) => console.log('Error sharing', error));
        };
    }
}
