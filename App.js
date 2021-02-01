/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import AlbumList from './src/components/AlbumList';

 import Header from './src/components/Header'

const App =() =>  {
  return (
    <>
    <SafeAreaView>
      <Header headertitel="Albums"/>
      <AlbumList />
    </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
 
});

export default App;
