export default class AddPage {
  constructor(container) {
    this._container = container;
  }

  async render() {
    return `
      <section class="container">
        <h2>Tambah Cerita</h2>
        <form id="addStoryForm" aria-label="Form Tambah Cerita">
          <label for="description">Deskripsi:</label>
          <textarea id="description" name="description" required></textarea>

          <label for="photo">Ambil Gambar:</label>
          <input type="file" accept="image/*" id="photo" name="photo" required>

          <label for="map">Klik Lokasi pada Peta:</label>
          <div id="map" style="height: 300px;"></div>
          <input type="hidden" id="lat" name="lat">
          <input type="hidden" id="lon" name="lon">

          <button type="submit">Kirim</button>
        </form>
      </section>
    `;
  }

  async afterRender() {
    // Placeholder for afterRender logic
    console.log("Form siap dan map akan dirender di sini.");
  }
}