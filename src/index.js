const exportPages = require('./data_providers/export_pages');
const getAllPages = require('./data_providers/get_all_pages');
const pageHistory = require('./data_providers/page_history');

module.exports = (config = { pageService: '' }) => {
  return {
    exportPages: (req, res) => { return exportPages(req, res, config); },
    getAllPages: (req, res) => { return getAllPages(req, res, config); },
    pageHistory: (req, res) => { return pageHistory(req, res, config); },
  };
};
