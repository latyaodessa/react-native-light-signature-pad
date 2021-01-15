import * as React from 'react';

import {StyleSheet, View} from 'react-native';
import LightSignaturePad from 'react-native-light-signature-pad';


export default function App() {

  const [base64DataUrl, setBase64DataUrl] = React.useState<any | undefined>(undefined);

  console.log(base64DataUrl);

  return (
    <View style={styles.container}>
      <LightSignaturePad backgroundColor={"#000000"} color={"#FFF"} onChange={(base64 => setBase64DataUrl(base64))}/>
      <View style={styles.box}>
        {/*{base64DataUrl && <Image style={{width: 500, height: 500, borderWidth: 1, borderColor: 'red'}}*/}
        {/*       source={{uri: base64DataUrl.base64DataUrl}}/> }*/}

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
    // width: 500,
    // height: 500,
    // marginVertical: 20,
  },
});
