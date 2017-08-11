// Libraries
import React from 'react';
import {StyleSheet, View} from 'react-native';

// Packages
import HeapAnalyticsExample from '../examples/HeapAnalyticsExample';
import ShakeEventExample from '../examples/ShakeEventExample';
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
    <HeapAnalyticsExample />
    <ShakeEventExample />
    <SVGExample />
    <UXCamExample />
    <VideoExample />
  </View>
);
