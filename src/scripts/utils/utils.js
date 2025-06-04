
const Utils = {
  parseUrl: () => {
    const url = window.location.hash.slice(1).toLowerCase() || '/';
    const urlSplit = url.split('/');
    const result = (urlSplit.length > 2)
      ? `/${urlSplit[1]}/:id`
      : `/${urlSplit[1] || ''}`;
    return result;
  },

  parseActiveUrlWithCombiner: () => {
    const url = window.location.hash.slice(1).toLowerCase() || '/';
    const urlSplit = url.split('/');
    return `/${urlSplit[1] || ''}${urlSplit[2] ? `/${urlSplit[2]}` : ''}`;
  }
};

export default Utils;
