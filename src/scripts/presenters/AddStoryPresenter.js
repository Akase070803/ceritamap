export default class AddStoryPresenter {
  constructor({ view, api }) {
    this._view = view;
    this._addStory = api.addStory;
  }

  async addStory(description, photoBlob, lat = null, lon = null) {
    try {
      const result = await this._addStory(description, photoBlob, lat, lon);
      return result;
    } catch (error) {
      console.error('Error adding story:', error);
      return { error: true, message: 'An unexpected error occurred.' };
    }
  }
}
