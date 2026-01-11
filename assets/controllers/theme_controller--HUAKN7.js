import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
    static targets = ["checkbox"];

    connect() {
        this.updateState();
    }

    toggle() {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            localStorage.theme = 'light';
        } else {
            localStorage.theme = 'dark';
        }

        if (
            localStorage.theme === 'dark' ||
            (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

        this.updateState();
    }

    updateState() {
        if (!this.hasCheckboxTarget) {
            return;
        }

        const isDark = document.documentElement.classList.contains('dark');
        this.checkboxTarget.checked = isDark;
    }
}

