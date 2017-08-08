import React, { Component } from 'react';
import {StyleSheet,Text,View} from 'react-native';
import Util from '../common/util';

class ChatMess extends Component {
  render() {
    return (
    	<View style={styles.chatCont}>
	    	<View style={styles.chatItem}><Text style={styles.name}>{this.props.results.comments[0].userName}: </Text><Text style={styles.text}>{this.props.results.comments[0].content}</Text></View>
		    {
			(this.props.results.commentCount>1)? <View style={styles.chatItem}><Text style={styles.name}>{this.props.results.comments[1].userName}: </Text><Text style={styles.text}>{this.props.results.comments[1].content}</Text></View>:null
		    }
		</View>
    );
  }
}

const styles = StyleSheet.create({
  chatItem:{flexDirection:'row'},
  name:{color: '#999999',fontSize:8},
  text:{color:'#333',fontSize:8}
});

export default ChatMess;
