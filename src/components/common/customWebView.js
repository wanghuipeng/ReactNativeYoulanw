import React, { Component } from 'react';
import {Text,View,WebView} from 'react-native';
import Header from './header';

class CustomWebView extends Component {
	render(){
		return (
			<View style={{backgroundColor:"#fff",flex:1}}>
				<Header 
				navigator={this.props.navigator}
				initObj={{
					showReturn:this.props.showReturn,
					backName:this.props.backName,
					barTitle:this.props.title,
				}} />
				<WebView 
				startInLoadingState={true}
				contentInset={{top:-44,bottom:-120}}
				source={{uri:this.props.url}}
				/>
			</View>
		);
	}
}

export default CustomWebView;
