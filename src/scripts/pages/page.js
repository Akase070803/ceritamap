import AddPresenter from '../presenters/add-presenter';

const AddPage = {
  async render() {
    return `
      <main id="main-content">
        <a href="#main-content" class="skip-link">Skip to content</a>
        <h2>Tambah Data</h2>
        <form id="add-form">
          <label for="description">Deskripsi</label>
          <textarea id="description" required></textarea>

          <label for="latitude">Latitude</label>
          <input type="number" id="latitude" required />

          <label for="longitude">Longitude</label>
          <input type="number" id="longitude" required />

          <video id="video" autoplay></video>
          <button type="button" id="capture-btn">Ambil Foto</button>
          <img id="image-preview" alt="Pratinjau Gambar" />

          <button type="submit">Kirim</button>
        </form>
      </main>
    `;
  },

  async afterRender() {
    AddPresenter.init();
  }
};

export default AddPage;
