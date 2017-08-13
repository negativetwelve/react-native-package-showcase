// Libraries
import 'react-native';
import React from 'react';
import Renderer from 'react-test-renderer';

// Components
import LottieExample from '../LottieExample';


it('renders correctly', () => {
  const tree = Renderer.create(
    <LottieExample />
  );
});
