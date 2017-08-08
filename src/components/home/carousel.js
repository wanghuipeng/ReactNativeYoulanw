import React, { Component } from 'react';
import {StyleSheet,Text,View,Image,TouchableOpacity} from 'react-native';
import Swiper from 'react-native-swiper';
import Util from '../common/util';
import ServiceURL from '../common/service';
import CarouselWebView from  '../common/customWebView';

class Carousel extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	carousel:[],
	    }
	}
	
  link(title,url){
		var detailRoute = {
			component:CarouselWebView,
			passProps:{
				showReturn:true,
				backName:null,
				title:title,
				url:url
			}
		}
		this.props.navigator.push(detailRoute); 
	}
	
	getData(){
		//请求数据
		var that = this;
		var url = ServiceURL.home_carousel;
		Util.getRequest(url,function(data){
			if(!data.data || data.data.length == 0){
				return alert("未找到轮播图片") 
			}
			
			that.setState({
               carousel:data.data
			});

		},function(error){
			alert(error)
		});
	}
	
	componentDidMount() {
	  this.getData();
	}
	
  render() {
    return (
    	
      <Swiper height={55} loop={true} index={0} autoplay={true} horizontal={true} 
			 dot={<View style={{backgroundColor: 'rgba(255,255,255,.3)', width: 5, height: 5, borderRadius: 5, marginLeft: 5, marginRight: 5}} />}
			 activeDot={<View style={{backgroundColor: '#fff', width: 5, height: 5, borderRadius: 5, marginLeft: 5, marginRight:5}} />}
       paginationStyle={{bottom: 6}}>
      {this.state.carousel.map(banner => (
		        <View style={styles.slide} key={banner.id} onPress={this.link.bind(this,banner.resource.description,"http://m.youlanw.com/zhaopin_"+banner.resource.resourceValue+".html")} >
		            <Image style={styles.image} source={{uri:banner.resource.thumbImageUrl}} />
		        </View>
      ))}
      </Swiper>
    )
  }
}

const styles = StyleSheet.create({
    slide:{backgroundColor: 'transparent'},
	image: {
	width:Util.windowSize.width,
	height:55,
	resizeMode: 'cover'
	}
});

export default Carousel;
