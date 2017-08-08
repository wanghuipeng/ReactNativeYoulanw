import React, { Component } from 'react';
import {StyleSheet,Text,View,Image,TouchableOpacity,DeviceEventEmitter} from 'react-native';
import Util from '../common/util';
import ServiceURL from '../common/service';
import ChatMess from './chatMess';
import ChatDetail from '../../pages/chatDetail';

var arr= [];
class ChatItem extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	zanCount:null,
	    	click:false,
	    	data:[]
	    }
	}
	
	count_zan(id,count){
		//请求数据
		var that = this;
		var url = ServiceURL.praise+id;
		
		fetch(url,{method: "POST"})
            .then((res) => { console.log(res.status);return res.json(); })
            .then((data) => { 
            	count++;
            	that.setState({
            		zanCount:count,
					click:!that.state.click
	            });
            })
            .catch((e) => { alert(error) });
	}
	
	showDetail(){
		var detailRoute = {
			component:ChatDetail,
			passProps:{
				showReturn:true,
				backName:null,
				title:'话题',
				id:this.props.data.id
			}
		}
		this.props.navigator.push(detailRoute);
	}
	
  render() {
    return (
    	<TouchableOpacity onPress={this.showDetail.bind(this)}>

				<View style={styles.card}>
			        <View style={styles.left}>
			           <Image style={styles.head} source={{uri:this.props.data.createUser.icon}} />
			        </View>
			        <View style={styles.right}>
			           <View style={styles.title}>
			              <Text style={styles.name} numberOfLines={1}>{this.props.data.title}</Text>
			              <Text style={styles.time}>{new Date(this.props.data.publishTime).getFullYear() + '-'+ (new Date(this.props.data.publishTime).getMonth()+1 < 10 ? '0'+(new Date(this.props.data.publishTime).getMonth()+1) : new Date(this.props.data.publishTime).getMonth()+1) + '-'+new Date(this.props.data.publishTime).getDate()+ " " + new Date(this.props.data.publishTime).getHours() + ':'+new Date(this.props.data.publishTime).getMinutes()+':'+new Date(this.props.data.publishTime).getSeconds()}</Text>
			           </View>
			           <View style={styles.cont}>
			              <Text>说说id:{this.props.data.id}</Text>
			              <Text style={styles.text} numberOfLines={5}>{this.props.data.content}</Text>
			              <Image style={styles.contImg} source={{uri:this.props.data.thumbImage}} />
			           </View>
			           <View style={styles.foot}>
			              <Text style={styles.loop}>{this.props.data.circle.name}</Text>
			              <View style={styles.spans}>
			                <TouchableOpacity onPress={this.count_zan.bind(this,this.props.data.id,this.props.data.praiseCount)}>
				              <View style={styles.zan}>
				                <Image style={styles.img} source={require('../../images/zan.png')} />
				                {
				                	this.state.click ?
				                	<Text style={styles.num}>{this.state.zanCount}</Text>
				                	:
				                	<Text style={styles.num}>{this.props.data.praiseCount}</Text>
				                }
				              </View>
				            </TouchableOpacity>
				            <View style={styles.shuo}>
				                <Image style={styles.img} source={require('../../images/shuo.png')} />
				                <Text style={styles.num}>{this.props.data.commentCount}</Text>
				            </View>
				          </View>
			           </View>
			        </View>
		        </View>
		        <View style={styles.comments}>
		        {
		           	(this.props.data.commentCount==0)? null:
		           	<View style={styles.commentItem}>
		           		<ChatMess results = {this.props.data} />
		           	</View>
		        }
		        </View>

	    </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
   card:{width:Util.windowSize.width,flexDirection:'row',paddingTop:5,paddingBottom:5},
   left:{width:Util.windowSize.width/6*1,paddingLeft:5,paddingRight:5,},
   head:{width:35,height:35,borderRadius:30},
   right:{width:Util.windowSize.width/6*5,flexDirection:'column',},
   title:{justifyContent:'space-between',flexDirection:'row',paddingLeft:5,paddingRight:5,position:'relative'},
   name:{color:'#00c8b6',fontSize:10,maxWidth:180},
   time:{color:'#999999',fontSize:8,maxWidth:80,position:'absolute',right:5,top:0},
   cont:{width:Util.windowSize.width/6*5,marginTop:5,marginBottom:5,paddingLeft:5,paddingRight:5,},
   text:{color:'#666666',fontSize:9},
   contImg:{width:100,height:100,marginTop:5},
   foot:{width:Util.windowSize.width/6*5,paddingLeft:5,paddingRight:5,justifyContent:'space-between',flexDirection:'row'},
   loop:{color:'#ffc22f',fontSize:8,maxWidth:80},
   spans:{flexDirection:'row'},
   zan:{width:30,borderWidth:1,borderColor:'#dddddd',borderRadius:8,flexDirection:'row',justifyContent:'center',alignItems:'center',height:15,marginRight:5},
   shuo:{width:30,borderWidth:1,borderColor:'#dddddd',borderRadius:8,flexDirection:'row',justifyContent:'center',alignItems:'center',height:15},
   img:{width:10,height:10},
   num:{color:'#999999',fontSize:8},
   comments:{width:Util.windowSize.width,flexDirection:'row',justifyContent:'flex-end',marginTop:5,marginBottom:5},
   commentItem:{width:Util.windowSize.width/6*4.8,backgroundColor: '#ececec',borderRadius: 2,marginRight:5,padding:5}
});

export default ChatItem;
