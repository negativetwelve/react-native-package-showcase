// Libraries
import 'react-native';
import React from 'react';
import Renderer from 'react-test-renderer';

// Components
import VideoExample from '../VideoExample';


it('renders correctly', () => {
  const tree = Renderer.create(
    <VideoExample />
  );
});
