import React from 'react';
import {StyleSheet, View} from 'react-native';
import useScript from './hooks/useScript';
import {application, errorHandler, js, nativeFunction} from './scripts/CanvasScripts';
import {htmlContent} from './scripts/HtmlContent';
import type {SignaturePadTypes} from './types/SignaturePadTypes';


const SignaturePad: React.FC<SignaturePadTypes> = ({
                                                     color = "#000000",
                                                     backgroundColor = "#FFF",
                                                     onChange
                                                   }) => {
  const injectedJavaScript = nativeFunction
    + errorHandler
    + js
    + application(color, backgroundColor, undefined);

  useScript(injectedJavaScript);

  React.useEffect(() => {
    const handler = (event: any) => {

      try {
        const data = JSON.parse(event.data)
        if (data.base64DataUrl && onChange) {
          onChange(data);
        }

      } catch (err) {
        console.log(err);
      }

    }

    window.addEventListener("message", handler)

    return () => window.removeEventListener("message", handler)
  }, [])

  const html = htmlContent();

  return (
    <View style={styles.container}>
      <div dangerouslySetInnerHTML={{__html: html}}/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});


export default SignaturePad;

