// Libraries
import React from 'react';
import {StyleSheet, View} from 'react-native';

// Packages
import CodePushExample from '../examples/CodePushExample';
import HeapAnalyticsExample from '../examples/HeapAnalyticsExample';
import IntercomExample from '../examples/IntercomExample';
import LottieExample from '../examples/LottieExample';
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
    <CodePushExample />
    <HeapAnalyticsExample />
    <IntercomExample />
    <LottieExample />
    <ShakeEventExample />
    <SVGExample />
    <UXCamExample />
    <VideoExample />
  </View>
);
