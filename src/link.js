
import { LitElement, html } from '@polymer/lit-element'
import { withStyle as _ws, withStyleLink as _wslnk } from '@netology-group/wc-utils'

import style from './link.css'

export class LinkElement extends LitElement {
  static get properties () {
    return {
      label: String,
      url: String
    }
  }
  _render (props) {
    const { label, url } = props

    return html`
      <a target="_blank" href="${url}" class="wrapper">
        <div class="row">
          <div class="info">
            <div class="icon"></div>
            <div class="data">
              <div class="label">${label}</div>
            </div>
          </div>
          <div>
            <div class="goto"></div>
          </div>
        </div>
      </a>
    `
  }
}

const withStyle = _ws(html)

const withStyleLink = _wslnk(html)

export const mixins = {
  withStyle,
  withStyleLink
}

export const Link = withStyle(LinkElement, style)
