// Libraries
import 'react-native';
import React from 'react';
import Renderer from 'react-test-renderer';

// Components
import Index from '../index.ios.js';


it('renders correctly', () => {
  const tree = Renderer.create(
    <Index />
  );
});
