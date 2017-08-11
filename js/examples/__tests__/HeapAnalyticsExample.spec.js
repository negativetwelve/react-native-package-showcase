// Libraries
import 'react-native';
import React from 'react';
import Renderer from 'react-test-renderer';

// Components
import HeapAnalyticsExample from '../HeapAnalyticsExample';


it('renders correctly', () => {
  const tree = Renderer.create(
    <HeapAnalyticsExample />
  );
});
