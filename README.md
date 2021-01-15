# react-native-light-signature-pad

## Supported

  - Android
  - iOS
  - Web (react-native-web)
  - Expo friendly

## Installation

```sh
yarn add react-native-light-signature-pad
// Webview
yarn add react-native-webview


## Basic Usage

```js
import {SignaturePad} from "react-native-light-signature-pad";

// ...

  <SignaturePad backgroundColor={"#000000"} color={"#FFF"} onChange={base64DataUrl => console.log(base64DataUrl)}/>

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
