import React, { Component } from 'react';
import {StyleSheet,Text,View,Image} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Home from '../../pages/home'; 
import Life from '../../pages/life'; 
import Chat from '../../pages/chat'; 
import Mine from '../../pages/mine'; 

class TabNavigators extends Component {
 	constructor(props) {
	    super(props);
	    this.state = {
			selectedTab : 'home'
	    }
	 }
 	
 		/*
	 * tab点击方法 
	 */  
	onPress(tabCode){  
		if(tabCode){  
			this.setState({  
				selectedTab : tabCode
			});  
		}  
	}
 	
 	render(){ 
        
		return (  
			<View style={styles.container}>  
				<TabNavigator tabBarStyle={styles.tab}>  
					<TabNavigator.Item  
					    titleStyle={styles.tabText}
		                selectedTitleStyle={styles.selectedTabText}
						key='home' 
						title='工作'  
						renderIcon={()=><Image style={styles.tabIcon} source={require('../../images/home.png')}/>}  
						renderSelectedIcon={()=><Image style={styles.tabIcon} source={require('../../images/homeActive.png')}/>}  
						selected={this.state.selectedTab === 'home'}  
						onPress={()=>this.onPress('home')}  
						>  
						  <Home navigator={this.props.navigator} />
					</TabNavigator.Item>  

					<TabNavigator.Item  
					    titleStyle={styles.tabText}
		                selectedTitleStyle={styles.selectedTabText}
						key='chat' 
						title='说说'  
						renderIcon={()=><Image style={styles.tabIcon} source={require('../../images/movie.png')}/>}  
						renderSelectedIcon={()=><Image style={styles.tabIcon} source={require('../../images/movieActive.png')}/>}  
						selected={this.state.selectedTab === 'chat'}  
						onPress={()=>this.onPress('chat')}  
						>  
						  <Chat navigator={this.props.navigator} />
					</TabNavigator.Item>

					<TabNavigator.Item  
					    titleStyle={styles.tabText}
		                selectedTitleStyle={styles.selectedTabText}
						key='mine' 
						title='我的'  
						renderIcon={()=><Image style={styles.tabIcon} source={require('../../images/mine.png')}/>}  
						renderSelectedIcon={()=><Image style={styles.tabIcon} source={require('../../images/mineActive.png')}/>}  
						selected={this.state.selectedTab === 'mine'}  
						onPress={()=>this.onPress('mine')}  
						>  
						  <Mine navigator={this.props.navigator} />
					</TabNavigator.Item>
					
				</TabNavigator>  
			</View>  
		) 
 	}
 }

const styles = StyleSheet.create({  
  container: {  
    flex: 1,  
    backgroundColor: '#F5FCFF',  
  },    
  tab:{  
    height: 45,  
    alignItems:'center',  
    backgroundColor:'#f4f5f6',  
  },  
  tabIcon:{  
    width:15,  
    height:15,  
    marginTop:5
  },  
  tabText:{
  	color:"#666",
  	fontSize:10
  },
  selectedTabText:{
  	color:"#2bb7ab"
  }
});  

export default TabNavigators;
