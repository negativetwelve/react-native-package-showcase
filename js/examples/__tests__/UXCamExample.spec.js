// Libraries
import 'react-native';
import React from 'react';
import Renderer from 'react-test-renderer';

// Components
import UXCamExample from '../UXCamExample';


it('renders correctly', () => {
  const tree = Renderer.create(
    <UXCamExample />
  );
});
