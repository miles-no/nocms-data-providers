const request = require('superagent');

module.exports = (req, res, config) => {
  request
    .get(`${config.pageService}/export-page-data`)
    .set('Authorization', `Bearer ${req.cookies['nocms-authenticated']}`)
    .end((err, response) => {
      if (err) {
        res.status(err.status || 500).send(err.error);
        return;
      }
      const fileName = `nocms-pages-${(new Date()).toISOString().substring(0, 19)}.json`;
      res
        .status(200)
        .set({
          'Content-Type': 'application/octet-stream',
          'Content-Disposition': `attachment; filename=${fileName}`,
        })
        .json(response.body);
    });
};
