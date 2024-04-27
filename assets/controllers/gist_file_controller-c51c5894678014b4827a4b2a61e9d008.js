import { Controller } from '@hotwired/stimulus';

import jsonp from "jsonp";

const gist_css = 'https://github.githubassets.com/assets/gist-embed-1831e7b47678.css';

/* stimulusFetch: 'lazy' */
export default class extends Controller {
    connect() {
        const gistLink = `https://gist.github.com/${this.githubUserValue}/${this.articleValue}.json?file=${this.fileValue}`;

        jsonp(gistLink, { timeout: 20000 }, (err, response) => {
            if (err) {
                console.warn('unable to retrieve gist content');
                return;
            }
            this.element.innerHTML = `
                <link rel="stylesheet" href="${gist_css}">
                ${response.div}
            `;
        });
    }

    static values = { article: String, file: String, githubUser: String }
}
