// Libraries
import 'react-native';
import React from 'react';
import Renderer from 'react-test-renderer';

// Components
import SVGExample from '../SVGExample';


it('renders correctly', () => {
  const tree = Renderer.create(
    <SVGExample />
  );
});
