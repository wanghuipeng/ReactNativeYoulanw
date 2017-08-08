import React, { Component } from 'react';
import {StyleSheet,Text,View,Image} from 'react-native';
import Util from '../common/util';

class HomeItem extends Component {
  render() {
    return (
	    <View style={styles.listItem}>
	        <View style={styles.left}>
	            <Image style={styles.img} source={{uri:this.props.homeList.resource.thumbImageUrl}} />
	        </View>
	        <View style={styles.right}>
	            <View style={styles.comp}>
	               <Text style={styles.compName} numberOfLines={1}>{this.props.homeList.resource.description}-{this.props.homeList.resource.title}</Text>
	               <Text style={styles.label}>{this.props.homeList.resource.label1}</Text>
	            </View>
                <Text style={styles.welfare} numberOfLines={1}>{this.props.homeList.resource.resourceValue}</Text>
                <View style={styles.salary}>
	               <Text style={styles.salaryName} numberOfLines={1}>{this.props.homeList.resource.subtitle}</Text>
	               <Text style={styles.address}>{this.props.homeList.resource.label2}</Text>
	            </View>
	        </View>
	    </View>
    );
  }
}

const styles = StyleSheet.create({
    listItem:{height:55,flexDirection:'row',alignItems:'center',paddingLeft:5,paddingRight:5,borderBottomWidth:0.5,borderBottomColor:'#dddddd'},
    img:{width:35,height:35,borderRadius:2},
    left:{marginRight:5,position:'absolute',left:5,top:9},
    right:{flexDirection:'column'},
    comp:{position:'relative',width:Util.windowSize.width,paddingLeft:40},
    compName:{fontSize:10,paddingRight:30},
    label:{position:'absolute',right:5,top:2,height:12,width:20,backgroundColor:'#ff6666',color:'#ffffff',fontSize:8,borderTopLeftRadius:2,borderBottomLeftRadius:2,textAlign:'center'},
    welfare:{fontSize:10,color:'#999999',width:Util.windowSize.width,paddingLeft:40},
    salary:{position:'relative',width:Util.windowSize.width,paddingLeft:40},
    salaryName:{fontSize:10,color:'#ffb400',paddingRight:120},
    address:{fontSize:8,color:'#999999',position:'absolute',right:10,top:1,width:120,textAlign:'right'}
});

export default HomeItem;
