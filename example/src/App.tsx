import * as React from 'react';

import {StyleSheet, View} from 'react-native';
import LightSignaturePad from 'react-native-light-signature-pad';


export default function App() {


  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <LightSignaturePad/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 500,
    height: 500,
    marginVertical: 20,
  },
});
