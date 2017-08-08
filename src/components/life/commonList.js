import React, { Component } from 'react';
import {StyleSheet,Text,View,Image,TouchableOpacity} from 'react-native';
import Util from '../common/util';
import CommonListWebView from  '../common/customWebView';

class CommonList extends Component {
	_showDetail(title,url){
		var detailRoutes = {
			component:CommonListWebView,
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
        <View style={styles.list}>
	        {this.props.datas.map((data,index) => (
	            <TouchableOpacity key={index} style={styles.item} onPress={this._showDetail.bind(this,data.resource.title,data.resource.linkUrl)}>
					<Image style={styles.img} source={{uri:data.resource.thumbImageUrl}} />
				    <View style={styles.text}>
				    	<Text style={styles.title}>{data.resource.title}</Text>
				    	<Text style={styles.subtitle}>{data.resource.subtitle}</Text>
				    </View>
				</TouchableOpacity>
	        ))}
        </View>
    );
  }
}

const styles = StyleSheet.create({
   list:{width:Util.windowSize.width,flexDirection:'row',flexWrap:'wrap',backgroundColor:'#ffffff',marginBottom:-0.5,marginLeft:-0.5},
   item:{width:Util.windowSize.width/2,height:40,alignItems:'center',flexDirection:'row',borderBottomWidth:0.5,borderBottomColor:'#dddddd',borderLeftWidth:0.5,borderLeftColor:'#dddddd'},
   img:{width:17,height:17,marginRight:10,marginLeft:15},
   text:{flexDirection:'column'},
   title:{color:'#666666',fontSize:10},
   subtitle:{color:'#999999',fontSize:8},
});

export default CommonList;
