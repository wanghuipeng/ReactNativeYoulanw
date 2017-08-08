import React, { Component } from 'react';
import {Dimensions,ActivityIndicator} from 'react-native';
 
const Util = {
 	//屏幕尺寸
 	windowSize:{
 		width:Dimensions.get("window").width,
 		height:Dimensions.get("window").height,
 	},
 	//fetch
 	getRequest:function(url,successCallback,failCallback){
 		fetch(url)
 		.then((response) => response.json())
 		.then((responseData) => successCallback(responseData))
 		.catch((error) => failCallback(error));
 	},
 	//fetch
 	getRequest:function(url,successCallback,failCallback){
 		fetch(url)
 		.then((response) => response.json())
 		.then((responseData) => successCallback(responseData))
 		.catch((error) => failCallback(error));
 	},
 	//fetch post
 	postJson:function(url, data, callback){
        var fetchOptions = {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data;boundary=6ff46e0b6b5148d984f148b6542e5a5d'
          },
          body:data//这里我参数只有一个data,大家可以还有更多的参数
        };

        fetch(url, fetchOptions)
        .then((response) => response.text())
        .then((responseText) => {
         //  callback(JSON.parse(responseText));
           callback(responseText);
        }).done();
  },
 	//loading
 	loading:<ActivityIndicator style={{marginTop:180}} color="#2bb7ab" />
 }

export default Util;