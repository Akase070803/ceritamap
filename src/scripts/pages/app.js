
import routes from '../routes/routes';
import Utils from '../utils/utils';

export default class App {
  constructor({ content, drawerButton, navigationDrawer }) {
    this._content = content;
    this._drawerButton = drawerButton;
    this._navigationDrawer = navigationDrawer;

    this._initialAppShell();
  }

  _initialAppShell() {
    if (this._drawerButton && this._navigationDrawer) {
      this._drawerButton.addEventListener('click', (e) => {
        e.stopPropagation();
        this._navigationDrawer.classList.toggle('open');
      });

      window.addEventListener('click', (e) => {
        if (!this._navigationDrawer.contains(e.target) && !this._drawerButton.contains(e.target)) {
          this._navigationDrawer.classList.remove('open');
        }
      });
    }
  }

  async renderPage() {
    const url = Utils.parseActiveUrlWithCombiner();
    const page = routes[url];
    if (!page) {
      this._content.innerHTML = '<h2>404 - Halaman tidak ditemukan</h2>';
      return;
    }
    const pageElement = page;


    if (!page) {
      this._content.innerHTML = '<h2>404 - Halaman tidak ditemukan</h2>';
      return;
    }

    const view = new page(this._content);
    this._content.innerHTML = await view.render();

    if (document.startViewTransition) {
      document.startViewTransition(() => {
        view.afterRender();
      });
    } else {
      view.afterRender();
    }
  }
}
