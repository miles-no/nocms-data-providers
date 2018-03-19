const express = require('express');
const { exportPages, getAllPages } = require('../lib');

const app = express();

app.use('/all_pages', getAllPages);
app.use('/export', exportPages);

const port = 9000;

app.listen(port, () => console.log(`Listening on port ${port}`));
