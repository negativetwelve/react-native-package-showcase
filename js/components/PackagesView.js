// Libraries
import React from 'react';
import {StyleSheet, View} from 'react-native';

// Packages
import CodePushExample from '../examples/CodePushExample';
import DeviceInfoExample from '../examples/DeviceInfoExample';
import HeapAnalyticsExample from '../examples/HeapAnalyticsExample';
import InstabugExample from '../examples/InstabugExample';
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
    <DeviceInfoExample />
    <HeapAnalyticsExample />
    <InstabugExample />
    <IntercomExample />
    <LottieExample />
    <ShakeEventExample />
    <SVGExample />
    <UXCamExample />
    <VideoExample />
  </View>
);
