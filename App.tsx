import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import rootStore from './mobx'
import { Provider } from 'mobx-react';
export default function App() {
  return (
    <View>
      <Provider rootStore={rootStore}>
        <Header title={"Click to change imageInfo"} />
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
      </Provider>
    </View>
  );
}

