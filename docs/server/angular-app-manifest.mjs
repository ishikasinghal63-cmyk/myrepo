
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/myrepo/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/myrepo"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 500, hash: '4158af88f132e6f67f8f08a0c3f3bc05af2d24e22d1ccea7879bfd6471bb4291', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1013, hash: '94d0ada3c6c85ddf3ecbf98f265952779d978625e3cacc4a2426f140874a173e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 6312, hash: '6e818cccc20cdc384d8777c3c682e168a3456d64011c520ced1fd836718a1d27', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
