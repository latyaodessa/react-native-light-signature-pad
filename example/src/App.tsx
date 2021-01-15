import * as React from 'react';

import {StyleSheet, View} from 'react-native';
import LightSignaturePad from 'react-native-light-signature-pad';


export default function App() {

  return (
    <View style={styles.container}>
      <LightSignaturePad backgroundColor={"#000000"} color={"#FFF"}/>
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
