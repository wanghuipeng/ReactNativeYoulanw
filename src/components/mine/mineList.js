import React, { Component } from 'react';
import {StyleSheet,Text,View,Image,TouchableOpacity} from 'react-native';
import Util from '../common/util';


class MineList extends Component {
	life(){
		this.props.commonService();
	}

  render() {
    return (
        <View style={styles.list}>
	        {this.props.datas.map((data,index) => (
	            <TouchableOpacity key={index} style={styles.item} onPress={this.life.bind(this)} >
				    <View style={styles.text}>
                        <View style={styles.left}>
                           <Image style={styles.img} source={{uri:data.img}} />
                           <Text style={styles.subtitle}>{data.title}</Text>
				        </View>
				        <Text style={styles.right}>{data.rightTitle}</Text>
				    </View>
				</TouchableOpacity>
	        ))}
        </View>
    );
  }
}

const styles = StyleSheet.create({
   list:{width:Util.windowSize.width,flexDirection:'row',flexWrap:'wrap',backgroundColor:'#ffffff',borderBottomWidth:0.5,borderBottomColor:'#dddddd',},
   item:{width:Util.windowSize.width,height:40,alignItems:'center',flexDirection:'row'},
   img:{width:20,height:20,marginRight:5},
   text:{width:Util.windowSize.width,flexDirection:'row',paddingLeft:5, justifyContent:'space-between',alignItems:'center'},
   subtitle:{color:'#999999',fontSize:12},
   left:{width:Util.windowSize.width/2,alignItems:'center',flexDirection:'row',alignItems:'center'},
   right:{color:'#999',fontSize:10,paddingRight:5}
});

export default MineList;
