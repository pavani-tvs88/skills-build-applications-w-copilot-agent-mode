module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Replace deprecated options with setupMiddlewares
      if (webpackConfig.devServer) {
        webpackConfig.devServer.setupMiddlewares = (middlewares, devServer) => {
          if (typeof webpackConfig.devServer.onBeforeSetupMiddleware === 'function') {
            webpackConfig.devServer.onBeforeSetupMiddleware(devServer);
          }
          if (typeof webpackConfig.devServer.onAfterSetupMiddleware === 'function') {
            webpackConfig.devServer.onAfterSetupMiddleware(devServer);
          }
          return middlewares;
        };

        delete webpackConfig.devServer.onBeforeSetupMiddleware;
        delete webpackConfig.devServer.onAfterSetupMiddleware;
      }
      return webpackConfig;
    },
  },
};