const path = require('path');
const createExpoWebpackConfigAsync = require('@expo/webpack-config');
const { resolver } = require('./metro.config');

const root = path.resolve(__dirname, '..');
const node_modules = path.join(__dirname, 'node_modules');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);

  config.module.rules.push({
    test: /\.(js|jsx|ts|tsx)$/,
    include: path.resolve(root, 'src'),
    use: 'babel-loader',
  });

  const webViewRule = {
    test: /postMock.html$/,
    use: {
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
      },
    },
  };

  // We need to make sure that only one version is loaded for peerDependencies
  // So we alias them to the versions in example's node_modules
  Object.assign(config.resolve.alias, {
    ...resolver.extraNodeModules,
    'react-native-web': path.join(node_modules, 'react-native-web'),
    'react-native-webview': path.join(node_modules, 'react-native-web-webview'),
  });

  config.module.rules = [
    ...config.module.rules,
    webViewRule,
  ];

  return config;
};
