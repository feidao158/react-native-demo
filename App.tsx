import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import TimeInfo from './components/TimeInfo';
import RootStore from './mobx'
import { Provider } from 'mobx-react';
export default function App() {
  return (
    <View>
      <Provider RootStore={RootStore}>
        <Header title={"Click to change imageInfo"} />
        <TimeInfo></TimeInfo>
        <StatusBar style="auto" />
      </Provider>
    </View>
  );
}

