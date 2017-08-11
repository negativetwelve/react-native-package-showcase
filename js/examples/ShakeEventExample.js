// Libraries
import React from 'react';
import ShakeEvent from 'react-native-shake-event';


export default class ShakeEventExample extends React.Component {
  componentWillMount() {
    ShakeEvent.addEventListener('shake', () => {
      console.log('Device shake!');
    });
  }

  componentWillUnmount() {
    ShakeEvent.removeEventListener('shake');
  }

  render() {
    return null;
  }
}
