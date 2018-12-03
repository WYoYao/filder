const { injectBabelPlugin } = require('react-app-rewired');

module.exports = function override(config, env) {
    console.log(config);
    config.devtool = 'source-map';
    config = injectBabelPlugin(
        ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }],
        config,
    );
    // do stuff with the webpack config...
    return config;
};