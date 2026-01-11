import { Controller } from '@hotwired/stimulus';

/* stimulusFetch: 'lazy' */
export default class extends Controller {
    static targets = ['content'];

    connect() {
        this.close();
    }

    toggle() {
        if (this.element.classList.contains('expanded')) {
            this.close();
        } else {
            this.open();
        }
    }

    open() {
        this.element.classList.add('expanded');
        this.contentTarget.classList.remove('hidden');
        this.element.classList.add('w-full');
        this.element.classList.remove('w-auto');
    }

    close() {
        this.element.classList.remove('expanded');
        this.contentTarget.classList.add('hidden');
        this.element.classList.remove('w-full');
        this.element.classList.add('w-auto');
    }
}
