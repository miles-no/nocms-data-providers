# NoCMS Data Providers

Pluggable handlers for common functionality in NoCMS publisher interface.

# Installation
```
npm install nocms-data-providers
```

# Usage

```javascript
const config = require('nocms-config-client').get();
const { exportPages, getAllPages, pageHistory } = require('nocms-data-providers')({
  pageService: config.pageService
});

// Set up route handlers
app.get('/api/nocms/export-pages', exportPages);
app.get('/api/nocms/get-all-pages', getAllPages);
app.get('/api/nocms/page-history', pageHistory);
```

That's it!

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
