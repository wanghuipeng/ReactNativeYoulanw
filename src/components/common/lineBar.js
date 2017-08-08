import React, { Component } from 'react';
import {StyleSheet,Text,View} from 'react-native';
import Util from '../common/util';

class LineBar extends Component {
	render(){
		return (
			<View style={styles.lineBar}></View>
		)
	}
}

var styles = StyleSheet.create({
  lineBar: {height:10,width:Util.windowSize.width,backgroundColor:"#eeeeee"}
});

export default LineBar;
