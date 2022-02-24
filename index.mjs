import Qurl from '@ryanburnette/qurl';

const _URL = new Qurl();
const GOOGLE_PARAMS = ['state', 'code', 'scope', 'authuser', 'hd', 'prompt'];

export default function removeGoogleOidcQueryParams(opts = {}) {
  if (googleOidcQueryParamsArePresent(opts)) _removeGoogleOidcQueryParams();
}

function googleOidcQueryParamsArePresent(opts) {
  let values = GOOGLE_PARAMS.map(function (k) {
    return _URL.query(k);
  }).filter(function (v) {
    return v !== undefined;
  });
  // console.log('values', values);
  let result = values.length === GOOGLE_PARAMS.length;
  // console.log('result', result);
  return result;
}

function _removeGoogleOidcQueryParams(opts) {
  // remove applicable search params
  GOOGLE_PARAMS.forEach(function (k) {
    // console.log(k);
    _URL.remove(k);
  });
  // if we're left with just a ? in the address with no params, remove it
  if (window.location.search === '' && window.location.href.endsWith('?')) {
    window.history.replaceState(
      null,
      document.title,
      window.location.href.replace('?', '')
    );
  }
}
