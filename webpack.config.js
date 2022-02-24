'use strict';

const path = require('path');

module.exports = {
  entry: './remove-google-oidc-query-params.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'remove-google-oidc-query-params.js',
    library: {
      name: 'removeGoogleOidcQueryParams',
      type: 'umd'
    }
  }
};
