import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
    static targets = ['menu', 'iconOpen', 'iconClose'];

    connect() {
        this.close();
    }

    toggle() {
        if (this.menuTarget.classList.contains('hidden')) {
            this.open();
        } else {
            this.close();
        }
    }

    open() {
        this.menuTarget.classList.remove('hidden');
        this.iconOpenTarget.classList.add('hidden');
        this.iconCloseTarget.classList.remove('hidden');
    }

    close() {
        this.menuTarget.classList.add('hidden');
        this.iconOpenTarget.classList.remove('hidden');
        this.iconCloseTarget.classList.add('hidden');
    }
}
