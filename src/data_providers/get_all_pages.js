const request = require('superagent');

module.exports = (req, res, config) => {
  request
    .get(`${config.pageService}/all_pages`)
    .set('Authorization', `Bearer ${req.cookies['nocms-authenticated']}`)
    .end((err, response) => {
      if (err) {
        res.status(err.status || 500).send(err.error);
        return;
      }
      res.status(200).json(response.body);
    });
};
