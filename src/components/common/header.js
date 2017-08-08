import React, { Component } from 'react';
import {StyleSheet,Text,View,TouchableOpacity} from 'react-native';
import LeftIcon from './leftIcon';

class Header extends Component {
	//返回按钮事件
    _pop(){
    	this.props.navigator.pop();
    }
	render(){
		return (
			<View style={styles.header}>
				<TouchableOpacity style={styles.left_btn} onPress={this._pop.bind(this)}>
				    {this.props.initObj.showReturn ? <LeftIcon /> : null}
				    <Text style={styles.btn_text}>{this.props.initObj.backName}</Text>
				</TouchableOpacity>
				<View style={styles.title_container}>
					<Text style={styles.title} numberOfLines={1}>{this.props.initObj.barTitle}</Text>
				</View>
			</View>
		);
	}
}

var styles = StyleSheet.create({
  header: {
  	height:40,
  	backgroundColor:"#2bb7ab",
    flexDirection:"row",
    justifyContent:"center",
    alignItems: "center"
  },
  left_btn:{
  	flexDirection:"row",
  	justifyContent:"center",
  	alignItems:"center"
  },
  btn_text:{
  	color:"#fff",
  	fontSize:14
  },
  title_container:{
  	flex:1,
  	justifyContent:"center",
  	alignItems:"center"
  },
  title:{
  	color:"#fff",
  	fontSize:14,
  	lineHeight:18,
  	width:100,
  	textAlign:"center",
  	marginLeft:0
  }
});

export default Header;
