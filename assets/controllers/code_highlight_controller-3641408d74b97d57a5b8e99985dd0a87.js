import { Controller } from '@hotwired/stimulus';
import Prism from 'prismjs'

import 'prismjs/components/prism-core.min.js'
// Load the languages I need to highlight
// To add a new one : php bin/console importmap:require prismjs/components/prism-<language>.min.js, then import it in the list
import 'prismjs/components/prism-bash.min.js'
import 'prismjs/components/prism-clike.min.js'
import 'prismjs/components/prism-css.min.js'
import 'prismjs/components/prism-diff.min.js'
import 'prismjs/components/prism-ini.min.js'
import 'prismjs/components/prism-javascript.min.js'
import 'prismjs/components/prism-json.min.js'
import 'prismjs/components/prism-markup.min.js'
import 'prismjs/components/prism-markup-templating.min.js'
import 'prismjs/components/prism-php.min.js'
import 'prismjs/components/prism-twig.min.js'
import 'prismjs/components/prism-yaml.min.js'

import 'prism-themes/themes/prism-vsc-dark-plus.min.css'

/* stimulusFetch: 'lazy' */
export default class extends Controller {
    connect() {
        // This controller highlight code with prismJS
        Prism.highlightAll();
    }
}
