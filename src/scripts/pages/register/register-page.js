
export default class RegisterPage {
  constructor(container) {
    this._container = container;
  }

  async render() {
    return `
      <section class="container register-container">
        <h2>Register</h2>
        <form id="register-form">
          <label for="name">Nama</label>
          <input type="text" id="name" name="name" required />
          <label for="email">Email</label>
          <input type="email" id="email" name="email" required />
          <label for="password">Password</label>
          <input type="password" id="password" name="password" required />
          <button type="submit">Register</button>
        </form>
      </section>
    `;
  }

  async afterRender() {
    const form = document.getElementById('register-form');
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;

      const res = await import('../../data/api.js');
      const result = await res.register(name, email, password);
      if (!result.error) {
        alert('Register berhasil!');
        window.location.hash = '/login';
      } else {
        alert('Gagal register: ' + result.message);
      }
    });
  }
}
