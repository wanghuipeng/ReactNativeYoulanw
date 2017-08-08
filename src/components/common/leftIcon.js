import React, { Component } from 'react';
import {StyleSheet,Text,View} from 'react-native';

class LeftIcon extends Component {
	render(){
		return (
			<View>
				<View style={styles.iconLeft}></View>
			</View>
		)
	}
}

var styles = StyleSheet.create({
  iconLeft: {
  	height:15,
  	width:15,
  	borderLeftWidth:1,
  	borderBottomWidth:1,
  	borderColor:"#fff",
    marginLeft: 15,
    transform:[{rotate:"45deg"}]
  }
});

export default LeftIcon;
