import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("my-panel")
export class MyPanel extends LitElement {
  @property({ type: String })
  title = "WIDGET";
  static styles = css`
    .container {
      min-width: 20rem;
      min-height: 5rem;
    }
    .title {
      background-color: var(--my-panel-primary-bg, red);
      color: var(--my-panel-primary-color, black);
      padding: 0.8rem;
      border-top-left-radius: 1rem;
      border-top-right-radius: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .body {
      padding: 1rem;
      border: 1px solid var(--my-panel-primary-bg, red);
    }
  `;
  render() {
    return html`
      <div class="container">
        <div class="title">
          ${this.title}
          <div>😁</div>
        </div>
        <div class="body"><slot></slot></div>
      </div>
    `;
  }
}
