import React, { Component } from 'react';
import {StyleSheet,Text,View,Image,TouchableOpacity,ListView,ScrollView,RefreshControl,ActivityIndicator,ToastAndroid} from 'react-native';
import HomeItem from './homeItem';
import Util from '../common/util';
import ServiceURL from '../common/service';
import HomeWebView from  '../common/customWebView';

class HomeList extends Component {
	constructor(props) {
	    super(props);
	    var ds = new ListView.DataSource({
				rowHasChanged:(oldRow,newRow) => oldRow !== newRow 
			});
	    this.state = {
	    	dataSource:ds,
				show:false,
				id:"1"
	    }
	}
	
   getData(id){
		this.setState({
			show:false,
			id:this.props.dataId
		});

		//请求数据
		var that = this;
		var url = ServiceURL.home_list+id;
		
		Util.getRequest(url,function(data){
			if(!data.data || data.data.length == 0){
				return alert("未找到企业") 
			}
			//设置下载状态和数据源
			var ds = new ListView.DataSource({
				rowHasChanged:(oldRow,newRow) => oldRow !== newRow 
			});
			that.setState({
				show:true,
				dataSource:ds.cloneWithRows(data.data)
			});
		},function(error){
			alert(error)
		});
	}
	
	_showDetail(url){
		var detailRoutes = {
			component:HomeWebView,
			passProps:{
				showReturn:true,
				backName:null,
				title:null,
				url:url
			}
		}
		this.props.navigator.push(detailRoutes);
	}
	
	
	
	/*componentWillReceiveProps(nextProps){
		this.getData(this.props.dataId);
	}*/
   componentWillReceiveProps(nextProps){
      	this.getData(this.props.dataId);
   }
    /*shouldComponentUpdate(nextProps, nextState) {
		console.log("更新数据"+this.props.dataId+"原数据"+nextProps.dataId)
	    return nextProps.dataId !== this.props.dataId;
	}*/
    
	/*componentDidUpdate(){
    	this.getData(this.props.dataId);
    }*/
	
    componentDidMount(){
    	this.getData(this.state.id);
    }
    
   
	
	_renderRow(homeList){
		return (
				<TouchableOpacity onPress={this._showDetail.bind(this,'http://m.youlanw.com/zhaopin_'+homeList.resource.resourceValue+'.html')} >
				  <HomeItem homeList={homeList} />
				</TouchableOpacity>
			 )
	}
	
	_renderSeparator(sectionID:number,rowID:number){
		var style={
			height:1,
			backgroundColor:"#eee" 
        }
		return <View style={style} key={sectionID+rowID} />
	}
	
	render(){
		return (
			<View>
				<ScrollView showVerticalScrollIndicator={true}>
				    {
				    	this.state.show?
				    	<ListView dataSource={this.state.dataSource} 
				    	initialListSize={10}
				    	renderRow={this._renderRow.bind(this)}
				    	renderSeparator={this._renderSeparator}/> 
				    	:<ActivityIndicator style={{marginTop:100}} color="#2bb7ab" />
				    }
				</ScrollView>
		  </View>
		);
	}

}

const styles = StyleSheet.create({
  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#fff'
  }
});

export default HomeList;
