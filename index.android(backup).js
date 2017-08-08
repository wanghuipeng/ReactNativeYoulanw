/**
 * React Native App For Android
 * author : muslim
 * date : 2017-05-02
 */

import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import Navigation from './src/components/common/navigation';

export default class ReactNativeYoulanw extends Component {
  render() {
    return (
    	<Navigation />
    );
  }
}


AppRegistry.registerComponent('ReactNativeYoulanw', () => ReactNativeYoulanw);
