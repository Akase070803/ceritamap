import RegisterPage from '../pages/register/register-page';

const Register = {
  async render() {
    const page = new RegisterPage(document.body);
    return page.render();
  },

  async afterRender() {
    const page = new RegisterPage(document.body);
    await page.afterRender();
  }
};

export default Register;
