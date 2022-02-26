const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './src/remove-google-oidc-query-params.mjs'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'remove-google-oidc-query-params.js',
    library: {
      name: 'removeGoogleOidcQueryParams',
      type: 'umd'
    }
  },
  mode: 'production'
};
