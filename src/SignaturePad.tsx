import React from 'react';
import {StyleSheet, View} from 'react-native';
import {WebView} from 'react-native-webview';
import {application, errorHandler, js, nativeFunction} from './scripts/CanvasScripts';
import {htmlContent} from './scripts/HtmlContent';
import type {SignaturePadTypes} from "./types/SignaturePadTypes";


const SignaturePad: React.FC<SignaturePadTypes> = ({
                                                     color = "#000000",
                                                     backgroundColor = "#FFF",
                                                     onChange,
                                                   }) => {

  const injectedJavaScript = nativeFunction
    + errorHandler
    + js
    + application(color, backgroundColor, undefined);

  const html = htmlContent();


  return (
    <View style={styles.container}>
      <WebView
        automaticallyAdjustContentInsets={false}
        onMessage={(event: any) => {
          onChange && onChange(JSON.parse(event.nativeEvent.data));
        }}
        source={{html: html}}
        originWhitelist={['*']}
        javaScriptEnabled={true}
        javaScriptEnabledAndroid={true}
        injectedJavaScriptBeforeContentLoadedForMainFrameOnly={true}
        injectedJavaScript={injectedJavaScript}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default SignaturePad;

