import React, { Component } from 'react';
import {StyleSheet,Text,View,Navigator,Platform,BackAndroid,ToastAndroid} from 'react-native';
import TabNavigators from  './tabNavigators';

const lastClickTime = 0;

class Navigations extends Component {
	constructor(props) {
	    super(props);
	    this.renderScene = this.renderScene.bind(this);
	    this.onBackAndroid = this.onBackAndroid.bind(this);
	 }
	
	  componentWillMount() {
	    if (Platform.OS === 'android') {
	      BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
	    }
	  }
	  
	  componentWillUnmount() {
	    if (Platform.OS === 'android') {
	      BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);
	    }
	  }
 
	onBackAndroid() {
	    var routers = this.navigator.getCurrentRoutes();
	    if (routers.length > 1) {
	      this.navigator.pop();
	      return true;
	    }
	    var now = new Date().getTime();
	    if (now - lastClickTime < 2500) {//2.5秒内点击后退键两次推出应用程序
	      return false;//控制权交给原生
	    }
	    lastClickTime = now;
	    ToastAndroid.show('再按一次退出应用',ToastAndroid.SHORT);
	    return true;
	}
	
	render() {
		var renderScene = this.renderSceneAndroid;
		var configureScence = this.configureScenceAndroid;
		return (
			<Navigator
				initialRoute={{ name: '工作', component:TabNavigators}}
				configureScene={ this.configureScence }
				renderScene={ this.renderScene}
			/>
		)
	}
	
	renderScene(route, navigator) {
    
	    this.navigator = navigator;
	    
	   	var Component = route.component;
	   	return (
	   		<View style={{flex:1}}>
	   		  <Component 
	   		  navigator={navigator}
	   		  route={route}
	   		  {...route.passProps}/>
	   		</View>
	   	);

    }
	
}

export default Navigations;