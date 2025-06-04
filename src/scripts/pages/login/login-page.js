
export default class LoginPage {
  constructor(container) {
    this._container = container;
  }

  async render() {
    return `
      <section class="container login-container">
        <h2>Login</h2>
        <form id="login-form">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" required />
          <label for="password">Password</label>
          <input type="password" id="password" name="password" required />
          <button type="submit">Login</button>
        </form>
      </section>
    `;
  }

  async afterRender() {
    const form = document.getElementById('login-form');
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = form.email.value;
      const password = form.password.value;

      const res = await import('../../data/api.js');
      const result = await res.login(email, password);
      if (!result.error) {
        localStorage.setItem('token', result.loginResult.token);
        alert('Login berhasil!');
        window.location.hash = '/';
      } else {
        alert('Login gagal: ' + result.message);
      }
    });
  }
}
