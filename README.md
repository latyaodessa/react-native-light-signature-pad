# react-native-light-signature-pad

![alt react-native-light-signature-pad](https://raw.githubusercontent.com/latyaodessa/react-native-light-signature-pad/main/example/assets/signature.gif)


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
```

## Basic Usage

```js
import * as React from 'react';

import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {SignaturePad} from 'react-native-light-signature-pad';


export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <Text>Sign me</Text>
      <SignaturePad backgroundColor={"#000000"} color={"#FFF"} onChange={base64DataUrl => console.log(base64DataUrl)}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});


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
