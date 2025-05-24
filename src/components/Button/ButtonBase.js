// Define the Web Component
console.log('✅ MyButton defined');


class MyButton extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
  
      const btn = document.createElement('button');
      btn.textContent = this.getAttribute('label') || 'Click Me';
      btn.className = 'my-button';
  
      const style = document.createElement('style');
      style.textContent = `
        .my-button {
          padding: 0.5rem 1rem;
          font-size: 1rem;
          background: #1e90ff;
          color: white;
          border: none;
          cursor: pointer;
        }
      `;
  
      this.shadowRoot.append(style, btn);
    }
  
    static get observedAttributes() {
      return ['label'];
    }
  
    attributeChangedCallback(name, oldVal, newVal) {
      if (name === 'label') {
        this.shadowRoot.querySelector('button').textContent = newVal;
      }
    }
  }
  
  customElements.define('my-button', MyButton);
  