/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */
import './css/app.css';
import './bootstrap.js';

import twemoji from 'twemoji';

let current_url = null;
document.addEventListener("turbo:load", (evt) => {
    twemoji.parse(document.body);

    window.umami.track(props => ({ ...props,
        'referrer': current_url !== null ? current_url : document.referrer,
        'title': document.getElementsByTagName('title')[0].innerText,
        'url': window.location.pathname
    }));
    current_url = window.location.pathname;
})
