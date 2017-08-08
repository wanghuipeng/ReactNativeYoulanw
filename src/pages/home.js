import React, { Component } from 'react';
import {StyleSheet,Text,View,Image,TextInput,ScrollView,DeviceEventEmitter} from 'react-native';
import HomeHeader from '../components/home/homeHeader';
import Carousel from '../components/home/carousel';
import Classify from '../components/home/classify';
import HomeList from '../components/home/homeList';
import CenterTitle from '../components/common/centerTitle';
import Header from '../components/common/header';

class Home extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
				cityId:"1",
				cityName:"上海"
	    }
	}
	
	componentDidMount(){
		//通过DeviceEventEmitter获取城市列表页面的城市名称和id
		DeviceEventEmitter.addListener('name',(text)=>{
    		this.setState({
    			cityName:text
    		})
    	})
		DeviceEventEmitter.addListener('id',(text)=>{
    		this.setState({
    			cityId:text
    		})
    	})
	}
	
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
	        <HomeHeader navigator={this.props.navigator} dataName = {this.state.cityName} />
	        <Carousel />
	        <Classify />
	        <CenterTitle centerText={{text:'优选职位'}} />
	        <HomeList navigator={this.props.navigator} dataId = {this.state.cityId} />
	      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1,backgroundColor: '#F5FCFF'}
});

export default Home;
