import React, { Component } from 'react';
import {StyleSheet,Text,View,Image,TextInput,ScrollView,ListView,ActivityIndicator,RefreshControl,TouchableOpacity} from 'react-native';
import ChatItem from '../components/chat/chatItem';
import Util from '../components/common/util';
import ServiceURL from '../components/common/service';
import Header from '../components/common/header';
import PullRefreshScrollView from 'react-native-pullrefresh-scrollview';

let pageSize = 10;
class Chat extends Component {
	constructor(props) {
	    super(props);
	   
	    
	    this.state = {
	    	loading: true,
	      dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
	      show:false,
	      datas:[],
	      limit:pageSize,
	      index:2,
	      isRefreshing:false
	    };
	  }
	
	getData(limit){
		//请求数据
		var that = this;
		var url = ServiceURL.chat_list+limit;
		Util.getRequest(url,function(data){
			//设置下载状态和数据源
			that.setState({
				loading: false,
				show:true,
                datas:data.ramble.data,
                dataSource:that.state.dataSource.cloneWithRows(data.ramble.data),
          });
		},function(error){
			alert(error)
		});
	}
	
    componentDidMount(){
    	this.getData(this.state.limit); 
    }
    
    render() {
  	//自定义的loading图标
		if(this.state.loading) {
	      return (
	        /*自定义的loading图标
	         * <View style = {styles.empty}>
	          <Image style={{width:50,height:50}} source={require('image!loader')} />
	          
	        </View>*/
	        <ActivityIndicator style={{marginTop:180}} color="#00aa00" />
	      )
	    }
    return (
      <View style={styles.container}>
        <Header 
		navigator={this.props.navigator}
		initObj={{
			showReturn:false,
			backName:null,
			barTitle:'说说',
		}} />
	      {
			this.state.show ? 
	        <View ref={(scrollView) => { _scrollView = scrollView; }}>
		        <ListView 
		        renderScrollComponent={(props) => <PullRefreshScrollView     onLoadMore={this.onLoadMore.bind(this)} useLoadMore={1} {...props} />} 
		        dataSource={this.state.dataSource}
				    	initialListSize={10}
				    	renderRow={this._renderRow.bind(this)}
				    	renderSeparator={this._renderSeparator.bind(this)}
				        refreshControl={
					        <RefreshControl
					            refreshing={this.state.isRefreshing}
					            onRefresh={this._onRefresh.bind(this)}
					            colors={['#2bb7ab']}
					            progressBackgroundColor="#ffffff" 
					        />} 
				    	/>
	            
			    <TouchableOpacity
				  style={styles.button} 
				  onPress={() => { _scrollView.scrollTo({y: 0}); }}>
				  <Text>滚回顶部</Text>
				</TouchableOpacity>
		    </View>
		    :<ActivityIndicator style={{marginTop:100}} color="#2bb7ab" />
		  }
      </View>
    );
  }
  
  _renderRow(data){
		return <ChatItem data={data} navigator={this.props.navigator} />
	}
	
	_renderSeparator(sectionID:number,rowID:number){
		var style={
			height:1,
			backgroundColor:"#eee" 
   }
		return <View style={style} key={sectionID+rowID} />
	}
  //下拉刷新
  _onRefresh() {  
  	console.log("下拉刷新")
	    this.setState({isRefreshing: true});  
	    setTimeout(() => {
	      this.getData(this.state.limit);
	      this.setState({isRefreshing: false});
	    }, 1000);  
	  }
  
  //上拉加载
  // 请求网络数据将加载更多数据状态改为已加载完成   
  getData1(page,limit){
  	//请求数据
	var that = this;
	var url = ServiceURL.chat_list_1+"&page="+page+"&limit="+limit;
	Util.getRequest(url,function(data){
		//设置下载状态和数据源
		that.setState({
			loading: false,
            loadingMore: false,
            index: that.state.index+1,
			show:true,
            datas:data.ramble.data,
            dataSource:that.state.dataSource.cloneWithRows(data.ramble.data),
      });
	},function(error){
		alert(error)
	});
 }
  onLoadMore(){
  	let start = (this.state.index-1)*pageSize;
  	console.log("加载更多:"+start)
  	this.getData1(1,pageSize*start);
  }
  
}

const styles = StyleSheet.create({
  container: {flex: 1,backgroundColor: '#F5FCFF'},
  button: {
	padding: 5,
	alignItems: 'center',
	backgroundColor: '#eaeaea',
  }
});

export default Chat;