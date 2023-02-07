const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://serverhwan.shop:30891',
            changeOrigin: true,
        })
    );
};