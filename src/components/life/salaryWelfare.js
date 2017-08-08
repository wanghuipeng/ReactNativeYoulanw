import React, { Component } from 'react';
import {StyleSheet,Text,View,Image,TouchableOpacity} from 'react-native';
import Util from '../common/util';
import SalaryWelfareWebView from  '../common/customWebView';
import LineBar from '../common/lineBar';

class SalaryWelfare extends Component {
	_showDetail(title,url){
		var detailRoutes = {
			component:SalaryWelfareWebView,
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
            <TouchableOpacity style={styles.blockLeft} onPress={this._showDetail.bind(this,this.props.datas.title,this.props.datas.linkUrl)}>
		          <Text style={styles.leftTitle}>{this.props.datas.title}</Text>
		          <Text style={styles.leftText} numberOfLines={1}>{this.props.datas.subtitle}</Text>
		          <Image style={styles.leftImg} source={{uri:this.props.datas.thumbImageUrl}} />
            </TouchableOpacity>
            
	        <View style={styles.blockRight}>
		        <TouchableOpacity onPress={this._showDetail.bind(this,'预借工资','http://m.tkinghr.com/MobileSalary/salary/SalaryServices')}>
		          <View style={styles.right1}>
		            <Image style={styles.rightImg} source={require('../../images/img1.png')} />
		            <View style={styles.rightView}>
		            	<Text style={styles.rightTitle1}>预借工资</Text>
		            	<Text style={styles.rightText}>免息24小时到账</Text>
		            </View>
		          </View>
		        </TouchableOpacity>
		        <TouchableOpacity onPress={this._showDetail.bind(this,'查工资单','http://m.tkinghr.com/MobileSalary/salary/SalaryServices')}>
		          <View style={styles.right2}>
		            <Image style={styles.rightImg} source={require('../../images/img2.png')} />
		            <View style={styles.rightView}>
		            	<Text style={styles.rightTitle2}>查工资单</Text>
		            	<Text style={styles.rightText}>提前5天看工资</Text>
		            </View>
		          </View>
		        </TouchableOpacity>
	        </View>
	    </View>
    );
  }
}

const styles = StyleSheet.create({
   block:{flexDirection:'row',height:100,backgroundColor:'#ffffff'},
   blockLeft:{width:Util.windowSize.width/5*2,justifyContent:'center',alignItems:'center',borderRightWidth:0.5,borderRightColor:'#dddddd'},
   leftTitle:{color:'#3cb1ee',fontSize:12},
   leftText:{color:'#999999',fontSize:8},
   leftImg:{width:40,height:40},
   blockRight:{width:Util.windowSize.width/5*3,flexDirection:'column',justifyContent:'center',alignItems:'center',},
   right1:{height:50,flexDirection:'row',width:Util.windowSize.width/5*3,justifyContent:'center',alignItems:'center',borderBottomWidth:0.5,borderBottomColor:'#dddddd'},
   rightImg:{width:32,height:32,marginRight:10},
   rightView:{flexDirection:'column'},
   rightTitle1:{color:'#ff745f',fontSize:11},
   rightText:{color:'#999999',fontSize:8},
   right2:{height:50,flexDirection:'row',width:Util.windowSize.width/5*3,justifyContent:'center',alignItems:'center',},
   rightTitle2:{color:'#7776a2',fontSize:11},
});

export default SalaryWelfare;
