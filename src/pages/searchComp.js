import React, { Component } from 'react';
import {StyleSheet,Text,View,TextInput,TouchableOpacity,ListView,ScrollView} from 'react-native';
import Util from '../components/common/util';
import LeftIcon from '../components/common/leftIcon';
import SearchItem from '../components/searchComp/searchItem';
import ServiceURL from '../components/common/service';
import CompWebView from  '../components/common/customWebView';

class SearchComp extends Component {
	constructor(props) {
	    super(props);
	    var ds = new ListView.DataSource({
			rowHasChanged:(oldRow,newRow) => oldRow !== newRow 
		});
		this.state = {
			dataSource:ds,
			show:false,
			keyword:'',
		}
	}
	//返回按钮事件
    _pop(){
    	this.props.navigator.pop();
    }
    
    _showDetail(url){
		var detailRoutes = {
			component:CompWebView,
			passProps:{
				showReturn:true,
				backName:null,
				title:null,
				url:url
			}
		}
		this.props.navigator.push(detailRoutes);
	}
    
    _changeText(text){
		this.setState({
			keyword:text
		})
	}
    //搜索关键字企业
    _searchComp(){
		//请求数据
		var that = this;
		var url = ServiceURL.comp_search+this.state.keyword+"&longitude=121.478416&latitude=31.236256&limit=15&page=1";
		Util.getRequest(url,function(data){
			if(!data.data || data.data.length == 0){
				return alert("未找到相关企业");
			}
			
			//设置下载状态和数据源
			var ds = new ListView.DataSource({
				rowHasChanged:(oldRow,newRow) => oldRow !== newRow 
			});
			
			var comp = data.data;
			that.setState({
				show:true,
				dataSource:ds.cloneWithRows(comp)
			});
		},function(error){
			alert(error);
		});
    }
    
    _renderRow(comp){
		return (
			<TouchableOpacity onPress={this._showDetail.bind(this,'http://m.youlanw.com/qiye_'+comp.ylCompanyId+'.html')} >
			   <SearchItem comp={comp} />
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
    
    componentDidMount(){
    	this.setState({
			show:true
		})
    }
    
        endEdit(){  
            if(this.state.isLeft==1){  
                this.hideModal();  
            }else if(this.state.isLeft==2){  
                this.btnOK();  
            }  
        }  
    
	render() {
	    return (
	      <View style={styles.container}>
	        <View style={styles.header}>
	            <TouchableOpacity onPress={this._pop.bind(this)}>
				    <LeftIcon />
				</TouchableOpacity>
		        <View style={styles.center}>
					<TextInput style={styles.input} onChangeText={this._changeText.bind(this)}  onEndEditing={()=>{this.endEdit()}}  underlineColorAndroid='transparent' placeholder='输入你想查找的企业' />
		        </View>
		        <TouchableOpacity onPress={this._searchComp.bind(this)}>
			        <View style={styles.right}>
		                <Text style={styles.search}>搜索</Text>
			        </View>
		        </TouchableOpacity>
		    </View>
		    <ScrollView keyboardShouldPersistTaps={true}>
			    {
			    	this.state.show?
			    	<ListView dataSource={this.state.dataSource} 
			    	initialListSize={10}
			    	renderRow={this._renderRow.bind(this)}
			    	renderSeparator={this._renderSeparator.bind(this)}/> 
			    	:Util.loading
			    }
			</ScrollView>
	      </View>
	    );
	}
}

const styles = StyleSheet.create({
  container: {flex: 1,backgroundColor: '#F5FCFF'},
  header:{paddingLeft:0,paddingRight:10,height:40,paddingTop:5,paddingBottom:5,flexDirection:'row',justifyContent:'space-between',alignItems:'center',backgroundColor:'#25c5b6'},
  iconDown:{width: 17,height:17},
  iconNotice:{width: 15,height:15},
  left:{flexGrow:4,flexDirection:'row'},
  center:{flexGrow:20,alignItems:'center'},
  right:{flexGrow:3,justifyContent:'center',alignItems:'center',flexDirection:'row'},
  text:{color:'#ffffff',fontSize:14,lineHeight:16},
  input:{width:Util.windowSize.width/1.6,flex:1,height:30,lineHeight:10,borderWidth:1,padding:0,paddingLeft:5,paddingRight:5,borderRadius:2,borderColor:"#dddddd",backgroundColor:"#ffffff",fontSize:14},
  search:{fontSize:14,color:'#ffffff',}
});

export default SearchComp;