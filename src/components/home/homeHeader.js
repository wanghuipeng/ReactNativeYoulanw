import React, { Component } from 'react';
import {StyleSheet,Text,View,Image,TextInput,TouchableOpacity} from 'react-native';
import Util from '../common/util';
import City from '../../pages/city';
import Demo from '../../pages/demo';
import SearchComp from '../../pages/searchComp';

class HomeHeader extends Component {
	 
	_city(){
		
		var detailRoute = {
			component:Demo
		}
		this.props.navigator.push(detailRoute)
	}
	
	_search(){
		var detailRoute = {
			component:SearchComp
		}
		this.props.navigator.push(detailRoute)
	}

	render() {
	    return (
	        <View style={styles.header}>
	            <TouchableOpacity onPress={this._city.bind(this)}>
			        <View style={styles.left}>
			          <Text style={styles.text} numberOfLines={1}>{this.props.dataName}</Text>
			          <Image style={styles.iconDown} source={require('../../images/arrowDown.png')}  />
			        </View>
		        </TouchableOpacity>
		        <View style={styles.center}>
		            <Text onPress={this._search.bind(this)} style={styles.input}>输入你想查找的企业</Text>
		        </View>
		        <View style={styles.right}>
	                <Image style={styles.iconNotice} source={require('../../images/notice.png')} />
		        </View>
		    </View>
	    );
	  }
}

const styles = StyleSheet.create({
  header:{flex:1,width:Util.windowSize.width,height:40,paddingLeft:10,paddingRight:10,paddingTop:5,paddingBottom:5,flexDirection:'row',justifyContent:'space-between',alignItems:'center',backgroundColor:'#25c5b6'},
  iconDown:{width: 20,height:20},
  iconNotice:{width: 18,height:18},
  left:{flexGrow:4,flexDirection:'row',alignItems:'center'},
  center:{flexGrow:20,alignItems:'center'},
  right:{flexGrow:3,justifyContent:'center',flexDirection:'row',alignItems:'center'},
  text:{color:'#ffffff',fontSize:14,lineHeight:16,maxWidth:45},
  input:{backgroundColor:'#ffffff',color:'#999999',width:Util.windowSize.width/1.6,flex:1,height:30,lineHeight:23,alignSelf:'center',alignItems:'center',borderWidth:1,padding:0,paddingLeft:5,paddingRight:5,borderRadius:2,borderColor:"#dddddd",fontSize:14},
});

export default HomeHeader;
