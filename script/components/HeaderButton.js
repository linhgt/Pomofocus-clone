const template = document.createElement("template");
template.innerHTML = `
  <style>
    .header-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      cursor: pointer;
      background: none rgba(255, 255, 255, 0.2);
      font-size: 13px;
      padding: 8px 12px;
      min-wiehgt: 70px;
      border: none;
      color: white;
    }
    .prefix {
      width: 16px;
      margin-right: 4px;
    }
  </style>

  <button class="header-btn">
    <img id="prefixImg" class="prefix" />
    <slot name="text"></slot>
  </button>
`;

class HeaderButton extends HTMLElement {
  static get observedAttributes() {
    return ["data-icon-src"]
  }

  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.append(template.content.cloneNode(true));
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if(name === 'data-icon-src') {
      this.shadowRoot.getElementById('prefixImg').src = newValue
    }
  }
}

customElements.define("header-button", HeaderButton);
