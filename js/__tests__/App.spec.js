// Libraries
import 'react-native';
import React from 'react';
import Renderer from 'react-test-renderer';

// Components
import App from '../App';


it('renders correctly', () => {
  const tree = Renderer.create(
    <App />
  );
});
