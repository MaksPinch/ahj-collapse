import "../css/style.css";

class Collapse {
  constructor(button, content) {
    this.button = button;
    this.content = content;

    this.button.addEventListener("click", () => this.toggle());
  }

  toggle() {
    const isOpen = this.content.classList.toggle("open");
    this.button.setAttribute("aria-expanded", String(isOpen));
    this.content.setAttribute("aria-hidden", String(!isOpen));
  }
}

const button = document.querySelector(".collapse-button");
const content = document.querySelector(".collapse");
new Collapse(button, content);
