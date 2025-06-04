export default class HomePresenter {
  constructor({ view, api }) {
    this._view = view;
    this._api = api;
  }

  async fetchAndDisplayStories() {
    try {
      const result = await this._api.getAllStories(); // Using default params for now
      if (result.error) {
        // If API returns an error (e.g. auth error), display it.
        this._view.displayError(result.message);
        // Optionally, display mock data if result.listStory is empty and an error occurred
        // if (!result.listStory || result.listStory.length === 0) {
        //   console.warn("Attempting to display mock stories due to API error or empty list.");
        //   this._view.displayStories(this._view._getMockStories()); // if _getMockStories is made public or called differently
        // }
      } else {
        this._view.displayStories(result.listStory);
      }
    } catch (error) {
      // Catch network errors or other issues not handled by api.js returning {error: true}
      console.error('Presenter error fetching stories:', error);
      this._view.displayError(error.message || 'Failed to fetch stories due to a network or unknown error.');
    }
  }
}