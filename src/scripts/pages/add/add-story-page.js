const AddStoryPage = {
  async render() {
    return `
      <section class="container">
        <h2>Tambah Cerita</h2>
        <form id="addStoryForm">
          <label for="description">Deskripsi:</label>
          <input type="text" name="description" required />
          <label for="photo">Foto:</label>
          <input type="file" name="photo" accept="image/*" capture required />
          <button type="submit">Kirim</button>
        </form>
      </section>
    `;
  },
  async afterRender() {
    const form = document.getElementById('addStoryForm');
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      try {
        await addStory(formData);
        alert('Cerita berhasil dikirim.');
        window.location.hash = '#/';
      } catch (err) {
        alert('Gagal mengirim cerita. Coba lagi.');
      }
    });
  }
};
export default AddStoryPage;
