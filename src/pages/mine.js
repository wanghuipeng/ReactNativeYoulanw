import React, { Component } from 'react';
import {StyleSheet,Text,View,Image,TextInput,TouchableOpacity} from 'react-native';
import Util from '../components/common/util';
import ServiceURL from '../components/common/service';
import Header from '../components/common/header';
import LineBar from '../components/common/lineBar';
import MineList from '../components/mine/mineList';
import Life from  './life';
import Login from  './login';

const  mineDatas= [
  {
    "img" : "http://reactchina.sxlcdn.com/letter_avatar_proxy/v2/letter/b/8e8cbc/50.png",
    "title" : "金币",
  },{
    "img" : "http://reactchina.sxlcdn.com/letter_avatar_proxy/v2/letter/k/a9a28c/50.png",
    "title" : "简历",
   },{
    "img" : "http://reactchina.sxlcdn.com/letter_avatar_proxy/v2/letter/k/a9a28c/50.png",
    "title" : "收藏"}
 ];
const  listDatas1= [
  {
    "img" : "http://reactchina.sxlcdn.com/letter_avatar_proxy/v2/letter/b/8e8cbc/50.png",
    "title" : "预支工资",
  }
 ];
 const  listDatas2= [
  {
    "img" : "http://reactchina.sxlcdn.com/letter_avatar_proxy/v2/letter/k/a9a28c/50.png",
    "title" : "查工资单",
   }
 ];
 const  listDatas3= [
  {
    "img" : "http://reactchina.sxlcdn.com/letter_avatar_proxy/v2/letter/k/a9a28c/50.png",
    "title" : "常用服务"}
 ];
const  listDatas4= [
  {
    "img" : "http://reactchina.sxlcdn.com/letter_avatar_proxy/v2/letter/b/8e8cbc/50.png",
    "title" : "邀请好友",
    "rightTitle":"叫上好友一起找工作"
  }
 ]; 
const  listDatas5= [
  {
    "img" : "http://reactchina.sxlcdn.com/letter_avatar_proxy/v2/letter/b/8e8cbc/50.png",
    "title" : "关于优蓝",
  }
 ]; 
 const  listDatas6= [
  {
    "img" : "http://reactchina.sxlcdn.com/letter_avatar_proxy/v2/letter/k/a9a28c/50.png",
    "title" : "意见反馈",
    "rightTitle":"4008-777-816"
   }
 ];
class Mine extends Component {
	
	constructor(props) {
	    super(props);
	    this.state = {
	      user: "",
	      name:"",
	    };
	  }
	
	commonService(){
		var detailRoute = {
			component:Life
		}
		this.props.navigator.push(detailRoute)
	}
	
	login(){
		var detailRoute = {
			component:Login
		}
		this.props.navigator.push(detailRoute)
	}
	
	getData(){
		//请求数据
		var that = this;
		var url = ServiceURL.mine;
		Util.getRequest(url,function(data){
			//设置下载状态和数据源
			that.setState({
				user:data.entity,
				name:data.entity.userSecurity.fullName
			});
		},function(error){
			alert(error)
		});
	}
    
  componentDidMount(){
    	this.getData();
    }
  
  
  render() { 	
    return (
      <View style={styles.container} >
        <Header 
					navigator={this.props.navigator}
					initObj={{
						showReturn:false,
						backName:null,
						barTitle:'我的',
					}} />
        {/*
          *
          * <View style={styles.user}>
		           <Image style={styles.userImg} source={{uri:this.state.user.icon}} />
		           <Text style={styles.userText} numberOfLines={1}>{this.state.name}</Text>
		        </View>
        */}
        <TouchableOpacity onPress={this.login.bind(this)}>
	        <View style={styles.user}>
	           <Image style={styles.userImg} source={require("../images/default_user.png")} />
	           <Text style={styles.userText1} numberOfLines={1}>登陆后找工作更方便</Text>
	           <Image style={styles.arrow} source={require("../images/arrow_right.png")} />
	        </View>
	      </TouchableOpacity>
        <View style={styles.headerList}>
	        {mineDatas.map((data,index) => (
		            <TouchableOpacity key={index} >
								    <View style={styles.headerItem}>
					             <Image style={styles.img} source={{uri:data.img}} />
					             <Text style={styles.text}>{data.title}</Text>
					          </View>
								</TouchableOpacity>
		        ))}
	      </View>
	      
	      <LineBar />
	      <MineList datas={listDatas1} />
	      <MineList datas={listDatas2} />
	      <MineList datas={listDatas3} commonService={this.commonService.bind(this)} />
	      <LineBar />
	      <MineList datas={listDatas4} />
	      <LineBar />
	      <MineList datas={listDatas5} />
	      <MineList datas={listDatas6} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1,backgroundColor: '#F5FCFF'},
  headerList:{width:Util.windowSize.width,height:70,flexDirection:'row',alignItems:'center',borderTopWidth:0.5,borderColor:"#ccc"},
  headerItem:{width:Util.windowSize.width/3,alignItems:'center',borderRightWidth:0.5,borderColor:"#ccc"},
  img:{width:20,height:20},
  text:{fontSize:14,color:'#333',marginTop:5},
  user:{width:Util.windowSize.width,height:70,flexDirection:'row',alignItems:'center',paddingLeft:5,paddingRight:5,position:'relative'},
  userImg:{borderRadius:40,width:50,height:50},
  userText:{color:'#333',marginLeft:10,maxWidth:200},
  userText1:{color:'#999',marginLeft:10,maxWidth:200},
  arrow:{width:22,height:22,position:'absolute',right:10,top:24}
});

export default Mine;