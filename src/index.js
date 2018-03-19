const exportPages = require('./data_providers/export_pages');
const getAllPages = require('./data_providers/get_all_pages');

module.exports = {
  getDataProviders: (config) => {
    return {
      exportPages: () => { return exportPages(config); },
      getAllPages: () => { return getAllPages(config); },
    };
  },
};
