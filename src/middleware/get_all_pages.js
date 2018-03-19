const request = require('superagent');
const config = require('nocms-config-client');
const logger = require('nocms-logger');

module.exports = (req, res, next) => {
  request
    .get(`${config.pageService}/all_pages`)
    .set({ Authorization: res.locals.authorizationHeader })
    .end((err, response) => {
      if (err) {
        logger.error('An error occured when trying to get all pages', err);
        next(err);
      }
      res.status(200).json(response.body);
    });
};
