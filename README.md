# react-native-light-signature-pad

  - Android
  - iOS
  - Web (react-native-web)
  - Expo friendly

## Installation

```sh
yarn add react-native-light-signature-pad
yarn add react-native-web-webview
```
For Web:
```sh
yarn add react-native-webview
```
Create webpack.config.js in root folder

```js
const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function(env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);
  config.resolve.alias['react-native'] = 'react-native-web';
  config.resolve.alias['react-native-webview'] = 'react-native-web-webview';

  const webViewRule = {
    test: /postMock.html$/,
    use: {
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
      },
    },
  };

  config.module.rules = [
    ...config.module.rules,
    webViewRule,
  ];

  return config;
};

```


## Basic Usage

```js
import LightSignaturePad from "react-native-light-signature-pad";

// ...

  <LightSignaturePad/>

```


| Prop | Default |  Description |
| --- | --- |  --- |
| color | #000000 | Pen color |
| backgroundColor | #FFF | Canvas background color |
|onChange| | onChange(base64DataUrl) => void |



## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
