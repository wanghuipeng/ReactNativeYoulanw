import React, { Component } from 'react';
import {StyleSheet,Text,View,Image} from 'react-native';

class Classify extends Component {
  render() {
    return (
        <View style={styles.classify}>
	        <View style={styles.grow}>
		        <View style={styles.circle}>
		            <Image style={styles.img} source={require('../../images/icon-chat-cur.png')} />
		        </View>
		        <Text style={styles.text}>一键求职</Text>
	        </View>
	        <View style={styles.grow}>
		        <View style={styles.circle}>
		            <Image style={styles.img} source={require('../../images/icon-mine-cur.png')} />
		        </View>
		        <Text style={styles.text}>面试安排</Text>
	        </View>
	        <View style={styles.grow}>
		        <View style={styles.circle}>
		            <Image style={styles.img} source={require('../../images/icon-work-cur.png')} />
		        </View>
		        <Text style={styles.text}>全部职位</Text>
	        </View>
	    </View>
    );
  }
}

const styles = StyleSheet.create({
   classify:{flexDirection:'row',height:80},
   text:{fontSize:9,marginTop:3,color:'#666666'},
   img:{width:20,height:20},
   grow:{flexGrow:1,justifyContent:'center',alignItems:'center'},
   circle:{width:38,height:38,justifyContent:'center',alignItems:'center',borderWidth:0.5,borderStyle:'solid',borderColor:'#25c5b6',borderRadius:100}
});

export default Classify;
