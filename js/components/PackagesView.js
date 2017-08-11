// Libraries
import React from 'react';
import {StyleSheet, View} from 'react-native';

// Packages
import SVGExample from '../examples/SVGExample';
import UXCamExample from '../examples/UXCamExample';
import VideoExample from '../examples/VideoExample';


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


export default () => (
  <View style={styles.container}>
    <SVGExample />
    <UXCamExample />
    <VideoExample />
  </View>
);
