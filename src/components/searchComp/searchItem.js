import React, { Component } from 'react';
import {StyleSheet,Text,View} from 'react-native';
import Util from '../common/util';

class SearchItem extends Component {
  render() {
    return (
	    <View style={styles.listItem}>
	        <Text style={styles.name}>{this.props.comp.enterpriseName}</Text>
	        <Text style={styles.address}>{this.props.comp.provinceName+this.props.comp.cityName+this.props.comp.districtName}</Text>
	    </View>
    );
  }
}

const styles = StyleSheet.create({
    listItem:{height:35,flexDirection:'column',paddingLeft:5,paddingRight:5,paddingTop:5,paddingBottom:5,borderBottomWidth:0.5,borderBottomColor:'#dddddd',backgroundColor:'#ffffff'},
    name:{fontSize:10},
    address:{fontSize:8,color:'#999999'}
});

export default SearchItem;
