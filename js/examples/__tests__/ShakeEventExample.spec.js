// Libraries
import 'react-native';
import React from 'react';
import Renderer from 'react-test-renderer';

// Components
import ShakeEventExample from '../ShakeEventExample';


it('renders correctly', () => {
  const tree = Renderer.create(
    <ShakeEventExample />
  );
});
