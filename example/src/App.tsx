import * as React from 'react';

import {StyleSheet, View} from 'react-native';
import {SignaturePad} from 'react-native-light-signature-pad';


export default function App() {

  return (
    <View style={styles.container}>
      <SignaturePad backgroundColor={"#000000"} color={"#FFF"} onChange={base64DataUrl => console.log(base64DataUrl)}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
