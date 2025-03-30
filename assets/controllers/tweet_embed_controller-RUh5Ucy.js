import { Controller } from '@hotwired/stimulus';

// @see https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/guides/embedded-tweet-parameter-reference
/* stimulusFetch: 'lazy' */
export default class extends Controller {
    static values = {
        id: String,
        conv: Boolean, // enable conversation mode
    }

    connect() {
        // Load Twitter SDK
        // @see https://developer.twitter.com/en/docs/twitter-for-websites/javascript-api/guides/set-up-twitter-for-websites
        window.twttr = (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0],
                t = window.twttr || {};
            if (d.getElementById(id)) return t;
            js = d.createElement(s);
            js.id = id;
            js.src = "https://platform.twitter.com/widgets.js";
            fjs.parentNode.insertBefore(js, fjs);

            t._e = [];
            t.ready = function(f) {
                t._e.push(f);
            };

            return t;
        }(document, "script", "twitter-wjs"));

        window.twttr.ready(() => this._loadTweet());
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
