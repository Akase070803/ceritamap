
import { getAllStories } from '../../data/api';
import Idb from '../../data/idb';

export default class HomePage {
  constructor(container) {
    this._container = container;
  }

  async render() {
    return `
      <section class="container">
        <h2>All Stories</h2>
        <div id="story-list" role="region" aria-live="polite"></div>
      </section>
    `;
  }

  async afterRender() {
    const storyList = document.getElementById('story-list');
    storyList.innerHTML = 'Loading stories...';

    try {
      const data = await getAllStories();
      const stories = data.listStory;
      Idb.saveStories(stories);

      storyList.innerHTML = stories.map((story) => `
        <article class="story-card">
          <img src="${story.photoUrl}" alt="Photo by ${story.name}" />
          <div class="story-content">
            <h3>${story.name}</h3>
            <p>${story.description}</p>
            <small>${new Date(story.createdAt).toLocaleString()}</small>
          </div>
        </article>
      `).join('');
    } catch (err) {
      console.warn('API failed. Loading from IndexedDB.');
      const offlineStories = await Idb.getAllStories();

      if (offlineStories.length) {
        storyList.innerHTML = offlineStories.map((story) => `
          <article class="story-card">
            <img src="${story.photoUrl}" alt="Photo by ${story.name}" />
            <div class="story-content">
              <h3>${story.name}</h3>
              <p>${story.description}</p>
              <small>${new Date(story.createdAt).toLocaleString()}</small>
            </div>
          </article>
        `).join('');
      } else {
        storyList.innerHTML = '<p>Gagal memuat cerita. Tidak ada data offline.</p>';
      }
    }
  }
}
