import React, { Component } from 'react';
import {StyleSheet,Text,View,Image} from 'react-native';
import Util from '../common/util';

class ChatMessDetail extends Component {
  render() {
    return (
    	<View>
	    	{this.props.datas.map((data,index) => (
		    	<View style={styles.chatCont} key={index}>
			       	<View style={styles.left}>
			         	<Image style={styles.img} source={{uri:data.userAvatar}} />
			       	  <Text style={styles.time}>{data.publishTime}分钟前</Text>
			       	</View>
			       	<View style={styles.right}>
			       	   <Text style={styles.name}>{data.userName}</Text>
			       	   <Text style={styles.comment}>{data.content}</Text>
			       	</View>
				  </View>
				))}
	    </View>
    );
  }
}

const styles = StyleSheet.create({
  chatCont:{flex:1,flexDirection:'row',marginTop:5,marginBottom:5},
  left:{width:Util.windowSize.width/6*1,textAlign:'center'},
  right:{width:Util.windowSize.width/6*5,},
  img:{width:35,height:35,borderRadius:20},
  time:{fontSize:8,color:'#999',textAlign:'center',width:35},
  name:{fontSize:14,color:'#999'},
  comment:{borderRadius:3,backgroundColor:'#ececec',padding:5}
});

export default ChatMessDetail;
