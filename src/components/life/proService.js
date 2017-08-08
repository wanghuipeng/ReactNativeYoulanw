import React, { Component } from 'react';
import {StyleSheet,Text,View,Image,TouchableOpacity} from 'react-native';
import Util from '../common/util';
import ProServiceWebView from  '../common/customWebView';

class ProService extends Component {
	_showDetail(title,url){
		var detailRoutes = {
			component:ProServiceWebView,
			passProps:{
				showReturn:true,
				backName:null,
				title:title,
				url:url
			}
		}
		this.props.navigator.push(detailRoutes);
	}
	
  render() {
    return (
        <View style={styles.block}>
	        {this.props.datas.map((data,index) => (
	        	<TouchableOpacity key={index} style={styles.item} onPress={this._showDetail.bind(this,data.resource.title,data.resource.linkUrl)}>
		            <Image style={styles.img} source={{uri:data.resource.thumbImageUrl}} />
		            <Text style={styles.text}>{data.resource.title}</Text>
		        </TouchableOpacity>
		    ))}
        </View>
        
    );
  }
}

const styles = StyleSheet.create({
   block:{width:Util.windowSize.width,flexDirection:'row',height:60,backgroundColor:'#ffffff'},
   item:{width:Util.windowSize.width/4,justifyContent:'center',alignItems:'center'},
   img:{width:25,height:25},
   text:{marginTop:3,fontSize:8,color:'#999999'}
});

export default ProService;
