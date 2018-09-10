import {
  Link,
  withStyles
} from './index'
import css from './styles.css'

window.customElements.define('wc-link', withStyles(Link, css))
