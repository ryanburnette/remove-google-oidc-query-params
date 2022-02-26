# [remove-google-oidc-query-params][1]

This browser JavaScript library exports a function that removes Google OIDC
query params left over from the process of acquiring a token.

Warning: This project is specific to my use cases and is not well-developed.

## Installation

```bash
npm install @ryanburnette/remove-google-oidc-query-params
```

## Usage

Usage with webpack.

```js
import removeGoogleOidcQueryParams from '@ryanburnette/remove-google-oidc-query-params';
removeGoogleOidcQueryParams();
```

Usage with script tag. This requires that you serve the compiled js file from
the dist directory.

```html
<script src="remove-google-oidc-query-params.js"></script>
<script type="text/javascript">
  removeGoogleOidcQueryParams();
</script>
```

[1]: https://github.com/ryanburnette/remove-google-oidc-query-params
