export default class AboutPage {
  constructor(container) {
    this._container = container;
  }

  async render() {
    return `
      <section class="container">
        <h2>Tentang Aplikasi</h2>
        <p>Aplikasi ini dibuat untuk berbagi cerita menggunakan API Dicoding.</p>
      </section>
    `;
  }

  async afterRender() {
    // No specific logic for now
  }
}