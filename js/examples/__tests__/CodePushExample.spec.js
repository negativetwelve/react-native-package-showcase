// Libraries
import 'react-native';
import React from 'react';
import Renderer from 'react-test-renderer';

// Components
import CodePushExample from '../CodePushExample';


it('renders correctly', () => {
  const tree = Renderer.create(
    <CodePushExample />
  );
});
