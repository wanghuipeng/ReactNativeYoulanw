/**
 * React Native App For Android
 * author : muslim
 * date : 2017-05-02
 */

import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux'  
import {createStore} from 'redux';  
import reducer from './src/reducer/index';  
import App from './src/container/app';  
    
const store = createStore(reducer);  
export default class ReactNativeYoulanw extends Component {
  render() {
    return (
    	<Provider store={store}>  
	        <App />  
	    </Provider>
    );
  }
}


AppRegistry.registerComponent('ReactNativeYoulanw', () => ReactNativeYoulanw);
