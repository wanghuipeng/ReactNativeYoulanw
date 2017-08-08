import React, { Component } from 'react';
import {StyleSheet,Text,View} from 'react-native';

class LeftTitle extends Component {
	render(){
		return (
			<View style={styles.leftTitle}>
				<View style={styles.leftBar}></View>
				<Text style={styles.text}>{this.props.leftText}</Text>
			</View>
		);
	}
	
}

var styles = StyleSheet.create({
  leftTitle:{height:30,alignItems:'center',flexDirection:'row',backgroundColor:'#fff',borderBottomWidth:0.5,borderBottomColor:'#dddddd',paddingLeft:5},
  leftBar:{width:5,height:13,backgroundColor:'#25c5b6'},
  text:{fontSize:10,marginLeft:5,color:'#999999'}
});

export default LeftTitle;
