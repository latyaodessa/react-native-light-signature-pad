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
