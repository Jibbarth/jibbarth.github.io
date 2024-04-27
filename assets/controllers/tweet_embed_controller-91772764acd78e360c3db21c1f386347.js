import { Controller } from '@hotwired/stimulus';

// @see https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/guides/embedded-tweet-parameter-reference
/* stimulusFetch: 'lazy' */
export default class extends Controller {
    static values = {
        id: String,
        conv: Boolean, // enable conversation mode
    }

    connect() {
        if (document.readyState === "complete") {
            this._loadTweet();
             return;
        }

        window.addEventListener('load', () => this._loadTweet());
    }

    _loadTweet() {
        this.element.innerHTML = "";
        window.twttr.widgets.createTweet(
            this.idValue,
            this.element,
            {
                conversation: this.convValue ? 'yes': 'none',
                align: 'center',
                dnt: true, // do not track
                theme: this._isDarkMode() ? 'dark': null,
            }
        );
    }

    _isDarkMode() {
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
}
