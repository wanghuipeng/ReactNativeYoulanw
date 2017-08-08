import React, { Component } from 'react';
import {StyleSheet,Text,View,Image,TextInput,Button,TouchableOpacity} from 'react-native';
import Util from '../components/common/util';
import ServiceURL from '../components/common/service';
import Mine from './mine';

class Login extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      phoneNum:'',
	      codeNum:''
	    };
	  }
	
	_changePhoneNum(text){
		this.setState({
			phoneNum:text
		})
	}
	
	_changeCodeNum(text){
		this.setState({
			codeNum:text
		})
	}
	
	//跳转到第二个页面去
    onLoginSuccess(){
     const { navigator } = this.props;
     if (navigator) {
       navigator.push({
         name : 'LoginSuccess',
         component : Mine,
       });
     }
   }
	
	//返回按钮事件
    _pop(){
    	this.props.navigator.pop();
    }
	
	getCode(){
		//请求数据
		{/*
		  *
		  * var that = this;
		var url = ServiceURL.code+"appkey=145FB9D1-2643-4B18-B9EA-8CD2C44FAC00&client_id=test&mobile=13052228363&type=4";
		fetch(url,{method: "POST"})
            .then((res) => { console.log(res.status);return res.json(); })
            .then((data) => { 
            	alert(this.state.phoneNum)
            })
            .catch((e) => { alert(error) });
            */}
		
        
        
	    let url = ServiceURL.code;
		fetch(url, {
		  method: 'POST',
		  headers: {
		    'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
		  },
		  body: JSON.stringify({
		  	    appkey: "145FB9D1-2643-4B18-B9EA-8CD2C44FAC00",
		        client_id: "test",
		        mobile: "13052228363",
		        type: "4",
		  })
		}).then((response)=>response.text())
		.then((responseText)=>{
		    alert(responseText);
		}).catch((error)=>{
		    alert(error);
		});
	    
	}
	
	getData(){
		//请求数据
		var that = this;
		var url = ServiceURL.login+"appkey=145FB9D1-2643-4B18-B9EA-8CD2C44FAC00&client_id=test&login_name="+this.state.phoneNum+"&password="+this.state.codeNum;
		fetch(url,{method: "POST"})
            .then((res) => { console.log(res.status);return res.json(); })
            .then((data) => { 
            	alert(data.msg)
            	this._pop();
            })
            .catch((e) => { alert(error) });
	}
	
    //返回按钮事件
    _pop(){
    	this.props.navigator.pop();
    }
    
  render() {
    return (
      <View style={styles.container} >
          <TouchableOpacity onPress={this._pop.bind(this)}>
             <Text style={styles.cancel}>取消</Text>
          </TouchableOpacity>
          <View style={styles.cont}>
	          <Image style={styles.logo} source={require("../images/logo.png")} />
	          <View style={styles.editInput}>
	             <Image style={styles.icon} source={require("../images/phone.png")} />
	             <TextInput style={styles.textInput} onChangeText={this._changePhoneNum.bind(this)} underlineColorAndroid='transparent'  placeholder="输入手机号码" />
	             <TouchableOpacity style={styles.inputBtn} onPress={this.getCode.bind(this)}>
		            <Text style={styles.inputText} >获取验证码</Text>
		         </TouchableOpacity>
	          </View>
	          <View style={styles.editInput}>
	             <Image style={styles.icon} source={require("../images/email.png")} />
	             <TextInput style={styles.textInput} onChangeText={this._changeCodeNum.bind(this)} underlineColorAndroid='transparent'  placeholder="输入短信验证码" />
	          </View>
	          <TouchableOpacity onPress={this.getData.bind(this)}>
	            <Text style={styles.loginBtn}>登录</Text>
	          </TouchableOpacity>
	          <Text style={styles.text}>登录即表示同意<Text style={styles.yellow}>《优蓝社区用户协议》</Text></Text>
	      </View>
	      <View style={styles.otherLogin}>
	         <View style={styles.header}>
	            <View style={styles.leftLine}></View>
	            <Text style={styles.title}>第三方账号登陆</Text>
	            <View style={styles.rightLine}></View>
	         </View>
	         <View style={styles.other}>
	            <View style={styles.item}>
	               <Image style={styles.img} source={require("../images/qq.png")} />
	               <Text style={styles.subText}>QQ登录</Text>
	            </View>
	            <View style={styles.item}>
	               <Image style={styles.img} source={require("../images/wechat.png")} />
	               <Text style={styles.subText}>微信登录</Text>
	            </View>
	         </View>
	      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1,backgroundColor: '#d0f1ed',textAlign:'center',flexDirection:'column',justifyContent:'space-between'},
  cont:{alignItems: 'center',},
  cancel:{padding:15,color:'#fff'},
  logo:{width:150,height:50,marginBottom:20},
  icon:{width:15,height:20,position:'absolute',left:0,top:12},
  textInput:{marginLeft:10,width:Util.windowSize.width/7*4,paddingBottom:0},
  editInput:{width:Util.windowSize.width/7*6,position:'relative',flexDirection:'row',justifyContent:'space-between',alignItems: 'center',borderBottomWidth:1,borderBottomColor:'#d5d5d5',height:40,lineHeight:40,marginTop:10},
  inputBtn:{width:65,textAlign:'center',borderRadius:2,borderColor:'#ffb400',borderWidth:1,position:'absolute',right:0,top:13},
  inputText:{fontSize:10,color:'#ffb400',textAlign:'center',height:20,lineHeight:17},
  yellow:{color:"#ffb400"},
  text:{fontSize:10},
  loginBtn:{marginTop:35,marginBottom:10,fontSize:14,color:'#333',borderRadius:2,borderColor:'#999999',borderWidth:0.5,width:Util.windowSize.width/7*6,height:40,lineHeight:29,textAlign:'center'},
  header:{flexDirection:'row',justifyContent:'space-between',alignItems: 'center',paddingLeft:10,paddingRight:10},
  leftLine:{width:Util.windowSize.width/7*2,backgroundColor:'#cccccc',height:1},
  rightLine:{width:Util.windowSize.width/7*2,backgroundColor:'#cccccc',height:1},
  other:{width:Util.windowSize.width,textAlign:'center',flexDirection:'row',justifyContent:'center',alignItems: 'center',padding:10},
  item:{textAlign:'center',width:60,alignSelf: 'center',},
  title:{fontSize:10},
  subText:{fontSize:10,textAlign:'center'},
  img:{width:40,height:40,marginLeft:10,marginRight:10}
  
});

export default Login;
