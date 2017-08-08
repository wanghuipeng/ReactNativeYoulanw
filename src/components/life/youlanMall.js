import React, { Component } from 'react';
import {StyleSheet,Image} from 'react-native';
import Util from '../common/util';

class YoulanMall extends Component {
	
  render() {
    return (
	    <Image style={styles.youlanMall}  source={{uri:this.props.datas.thumbImageUrl}} />
    );
  }
}

const styles = StyleSheet.create({
   youlanMall:{width:Util.windowSize.width,height:50}
});

export default YoulanMall;
