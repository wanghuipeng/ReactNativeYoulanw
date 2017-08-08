import React, { Component } from 'react';
import {StyleSheet,Text,View,Image,TextInput,ScrollView,ActivityIndicator} from 'react-native';
import Header from '../components/common/header';
import LineBar from '../components/common/lineBar';
import LeftTitle from '../components/common/leftTitle';
import Util from '../components/common/util';
import ServiceURL from '../components/common/service';
import SalaryWelfare from '../components/life/salaryWelfare';
import YoulanMall from '../components/life/youlanMall';
import ProService from '../components/life/proService';
import CommonList from '../components/life/commonList';

class Life extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      show:false,
	      data1: [],
	      data2: [],
	      data3: [],
	      data5: [],
	      data6: [],
	      data7: [],
	      data8: [],
	    };
	  }
	
	getData(){
		//请求数据
		var that = this;
		var url = ServiceURL.life;
		Util.getRequest(url,function(data){
			that.setState({
				show:true,
        		data1:data.welfare[0].resource,
        		data2:data.mall[0].resource,
        		data3:data.carreerService,
        		data5:data.tool1,
        		data6:data.tool2,
        		data7:data.tool3,
        		data8:data.tool4,
        });
		},function(error){
			alert(error)
		});
	}
	
    componentDidMount(){
    	this.getData();
    }
    
  render() {
    return (
      <View style={styles.container} >
        <Header 
		navigator={this.props.navigator}
		initObj={{
			showReturn:false,
			backName:null,
			barTitle:'生活',
		}} />
        <ScrollView>
            {
			    this.state.show ? 
			    <View>
			        <LineBar />
			        <LeftTitle leftText = '薪资福利' />
			        <SalaryWelfare datas={this.state.data1} navigator={this.props.navigator} />
			        <LineBar />
			        <YoulanMall datas={this.state.data2} navigator={this.props.navigator} />
			        <LineBar />
			        <LeftTitle leftText = '职业服务' />
			        <ProService datas={this.state.data3} navigator={this.props.navigator} />
			        <LineBar />
			        <LeftTitle leftText = '常用工具' />
			        <CommonList datas={this.state.data5} navigator={this.props.navigator} />
			        <LineBar />
			        <LeftTitle leftText = '本地生活' />
			        <CommonList datas={this.state.data6} navigator={this.props.navigator} />
			        <LineBar />
			        <LeftTitle leftText = '休闲娱乐' />
			        <CommonList datas={this.state.data7} navigator={this.props.navigator} />
			        <LineBar />
			        <LeftTitle leftText = '趣味咨询' />
			        <CommonList datas={this.state.data8} navigator={this.props.navigator} />
			        <LineBar />
			    </View>
		        :<ActivityIndicator style={{marginTop:100}} color="#2bb7ab" />
		    }
	    </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1,backgroundColor: '#F5FCFF'}
});

export default Life;
