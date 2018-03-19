const exportPages = require('./middleware/export_pages');
const getAllPages = require('./middleware/get_all_pages');

module.exports = {
  getMiddleware: (config) => ({
    exportPages: () => exportPages(config),
    getAllPages: () => getAllPages(config),
  }),
};
