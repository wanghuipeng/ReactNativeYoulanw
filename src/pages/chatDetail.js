import React, { Component } from 'react';
import { StyleSheet,Text,View,WebView,Image,TouchableOpacity,ScrollView,TextInput,Button,DeviceEventEmitter} from 'react-native';
import Header from '../components/common/header';
import Util from '../components/common/util';
import ServiceURL from '../components/common/service';
import ChatMessDetail from '../components/chat/chatMessDetail';

class ChatDetail extends Component {
	
	constructor(props) {
	    super(props);
	    this.state = {
			chatId:this.props.id,
			data:[],
			data1:[],
			data2:[],
			data3:[],
			zanCount:null,
	    	click:false,
	    	comment:''
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
	
	getData(id){
		//请求数据
		var that = this;
		var url = ServiceURL.chat_detail+id;
		Util.getRequest(url,function(data){
			//设置下载状态和数据源
			that.setState({
				data: data.entity.createUser,
				data1: data.entity,
				data2: data.entity.circle,
				data3: data.entity.comments,
         });
		},function(error){
			alert(error)
		});
	}
	
	componentDidMount(){
		this.getData(this.state.chatId);
	}
	
	changeComment(text){
		this.setState({
			comment:text
		})
	}
	
	addComment(){
		//请求数据
		var that = this;
		var url = ServiceURL.add_comment+this.state.chatId;
		fetch(url,{method: "POST"})
            .then((res) => { console.log(res.status);return res.json(); })
            .then((data) => { 
            	
            })
            .catch((e) => { alert(error) });
            
		fetch(url, {
		  method: 'POST',
		  headers: {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json'
		  },
		  body: JSON.stringify({
		  	    content:this.state.comment,
		  })
		}).then((response)=>response.text())
		.then((responseText)=>{
		    alert(responseText);
		}).catch((error)=>{
		    alert(error);
		});
	}
	
	render(){
		return (
			<View style={styles.container}>
			    <Header 
				navigator={this.props.navigator}
				initObj={{
					showReturn:this.props.showReturn,
					backName:this.props.backName,
					barTitle:this.props.title,
				}} />
			    <ScrollView>
					<View style={{backgroundColor:"#fff",flex:1}}>
					    
					    <View style={styles.box}>
					        <View style={styles.top}>
								<View style={styles.left}>
								   <Image style={styles.head} source={{uri:this.state.data.icon}} />
						        </View>
						        <View style={styles.right}>
						          <Text>{this.state.data.name}</Text>
						          <Text style={styles.time}>{new Date(this.state.data1.publishTime).getFullYear() + '-'+ (new Date(this.state.data1.publishTime).getMonth()+1 < 10 ? '0'+(new Date(this.state.data1.publishTime).getMonth()+1) : new Date(this.state.data1.publishTime).getMonth()+1) + '-'+new Date(this.state.data1.publishTime).getDate()+ " " + new Date(this.state.data1.publishTime).getHours() + ':'+new Date(this.state.data1.publishTime).getMinutes()+':'+new Date(this.state.data1.publishTime).getSeconds()}</Text>
						        </View>
						    </View>
		
					        <View style={styles.cont}>
							   <Text style={styles.text}>{this.state.data1.content}</Text>
							   <Image style={styles.contImg} source={{uri:this.state.data1.thumbImage}} />
					        </View>
		
					        <View style={styles.foot}>
			                  <Text style={styles.loop}>{this.state.data2.name}</Text>
				              <View style={styles.spans}>
				                <TouchableOpacity onPress={this.count_zan.bind(this,this.state.data1.id,this.state.data1.praiseCount)}>
					              <View style={styles.zan}>
					                <Image style={styles.img} source={require('../images/zan.png')} />
					                {
					                	this.state.click ?
					                	<Text style={styles.num}>{this.state.zanCount}</Text>
					                	:
					                	<Text style={styles.num}>{this.state.data1.praiseCount}</Text>
					                }
					              </View>
					            </TouchableOpacity>
					            <View style={styles.shuo}>
					                <Image style={styles.img} source={require('../images/shuo.png')} />
					                <Text style={styles.num}>{this.state.data1.commentCount}</Text>
					            </View>
					          </View>
				           </View>
				        </View>
				        
				        <View style={styles.comments}>
				           <Text style={styles.title}>最新评论({this.state.data1.commentCount})</Text>
				           {this.state.data1.commentCount==0 ? null:<ChatMessDetail datas={this.state.data3} />}
				        </View>
					</View>
			    </ScrollView>
			    <View style={styles.editComment}>
			       <TextInput style={styles.textInput} onChangeText={this.changeComment.bind(this)} underlineColorAndroid='transparent'  placeholder="写评论" />
			       <Button style={styles.btn} onPress={this.addComment.bind(this)} title="发送" color="#25c5b6" />
			    </View>
	        </View>
		);
	}
}

const styles = StyleSheet.create({
   container: {flex: 1,backgroundColor: '#F5FCFF'},
   box:{flex:1,padding:10,flexDirection:'column',borderBottomColor:'#ddd',borderBottomWidth:1},
   top:{flexDirection:'row',marginBottom:10,marginLeft:-5},
   text:{fontSize:16,marginBottom:10},
   time:{color:'#999',fontSize:10,},
   left:{width:Util.windowSize.width/6*1,paddingLeft:5,paddingRight:5},
   head:{width:35,height:35,borderRadius:30},
   right:{width:Util.windowSize.width/6*5,flexDirection:'column',},
   foot:{width:Util.windowSize.width,paddingRight:15,justifyContent:'space-between',flexDirection:'row'},
   loop:{color:'#999',fontSize:10,maxWidth:80,height:20,lineHeight:20},
   contImg:{width:100,height:100},
   spans:{flexDirection:'row'},
   zan:{width:30,borderWidth:1,borderColor:'#dddddd',borderRadius:8,flexDirection:'row',justifyContent:'center',alignItems:'center',height:15,marginRight:5},
   shuo:{width:30,borderWidth:1,borderColor:'#dddddd',borderRadius:8,flexDirection:'row',justifyContent:'center',alignItems:'center',height:15},
   img:{width:10,height:10},
   num:{color:'#999999',fontSize:8},
   comments:{padding:5},
   title:{color:'#999'},
   editComment:{width:Util.windowSize.width,height:45,flexDirection:'row',justifyContent:'space-between',alignItems:'center',padding:5,backgroundColor:'#ebecee'},
   textInput:{width:Util.windowSize.width/10*8,height:35,fontSize:14,paddingTop:0,paddingBottom:0 ,backgroundColor:'#fff',borderRadius:3,borderWidth:1,borderColor:'#ddd'},
   btn:{width:Util.windowSize.width/10*2,marginLeft:5}
});

export default ChatDetail;
