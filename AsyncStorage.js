/**
 * React Native App For Android
 * author : muslim
 * date : 2017-05-02
 */

import React, { Component } from 'react';
import {AppRegistry,View,StyleSheet,Text,AsyncStorage} from 'react-native';
 
export default class ReactNativeYoulanw extends Component{
 constructor(props){
 super(props);
 this.set = this.set.bind(this);
 this.get = this.get.bind(this);
 this.clear = this.clear.bind(this);
 }
 //渲染
 render(){
 
 return (
  <View style = {style.container}>
  <Text onPress = {this.set}>储存数据</Text>
  <Text style = {{marginTop: 10}} onPress = {this.get}>
   获取数据
  </Text>
  <Text style = {{marginTop: 10}} onPress = {this.clear}>
   清除数据
  </Text>
  </View>
 );
 }
 set(){
 AsyncStorage.setItem('name','gefufeng',(error) => {
  if (error) {
  alert("储存失败");
  }else{
  alert("储存成功");
  }
 });
 }
 get(){
 AsyncStorage.getItem('name',(error,result) => {
  if (error) {
  alert("获取失败");
  }else{
  alert("数据为：" + result);
  }
 });
 }
 clear(){
 AsyncStorage.removeItem('name',(error) => {
  if (!error) {
  alert("清除成功");
  }
 });
 }
}
const style = StyleSheet.create({
 container : {
 flex: 1,
 alignItems: 'center',
 justifyContent: 'center',
 backgroundColor : "#F5FCFF"
 }
 
});

AppRegistry.registerComponent('ReactNativeYoulanw', () => ReactNativeYoulanw);