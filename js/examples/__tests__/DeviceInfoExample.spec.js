// Libraries
import 'react-native';
import React from 'react';
import Renderer from 'react-test-renderer';

// Components
import DeviceInfoExample from '../DeviceInfoExample';


it('renders correctly', () => {
  const tree = Renderer.create(
    <DeviceInfoExample />
  );
});
