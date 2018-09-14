import { LitElement, html } from '@polymer/lit-element'

class Link extends LitElement {
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

function withStyles (baseClass, styles) {
  return class extends baseClass {
    _renderStyles () {
      return html`<style>${styles}</style>`
    }
    _render (props) {
      return html`
        ${this._renderStyles()}
        ${super._render(props)}
      `
    }
  }
}

export {
  Link,
  withStyles
}
