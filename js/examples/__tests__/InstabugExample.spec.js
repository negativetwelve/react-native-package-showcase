// Libraries
import 'react-native';
import React from 'react';
import Renderer from 'react-test-renderer';

// Components
import InstabugExample from '../InstabugExample';


it('renders correctly', () => {
  const tree = Renderer.create(
    <InstabugExample />
  );
});
