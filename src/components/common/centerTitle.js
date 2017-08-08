import React, { Component } from 'react';
import {StyleSheet,Text,View} from 'react-native';

class CenterTitle extends Component {
	render(){
		return (
			<View style={styles.centerTitle}>
				<View style={styles.leftLine}></View>
				<Text style={styles.text}>{this.props.centerText.text}</Text>
				<View style={styles.rightLine}></View>
			</View>
		);
	}
	
}

var styles = StyleSheet.create({
  centerTitle:{height:30,backgroundColor:'#eeeeee',justifyContent:'center',alignItems:'center',flexDirection:'row',borderTopWidth:0.5,borderTopColor:'#dddddd',borderBottomWidth:0.5,borderBottomColor:'#dddddd'},
  leftLine:{width:15,height:1,backgroundColor:'#bbbbbb'},
  rightLine:{width:15,height:1,backgroundColor:'#bbbbbb'},
  text:{fontSize:10,marginLeft:5,marginRight:5}
});

export default CenterTitle;
