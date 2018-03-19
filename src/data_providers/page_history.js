const request = require('superagent');

module.exports = (req, res, config) => {
  request
    .get(`${config.pageService}/history`)
    .set('Authorization', `Bearer ${req.cookies['nocms-authenticated']}`)
    .query(req.query)
    .end((err, response) => {
      if (err) {
        res.status(err.status || 500).send(err.error);
        return;
      }
      res
        .status(200)
        .json(response.body);
    });
};
