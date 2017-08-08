'use strict';
import React, {Component} from 'react';
import {
    Alert,
    View,
    Text,
    TextInput,
    StyleSheet,
    Platform,
    NavigatorIOS,
    TouchableOpacity,
    StatusBar,
    ScrollView,
    DeviceEventEmitter
} from 'react-native';

import Header from '../common/header';
import SearchBox from './SearchBox';
import SearchResult from './SearchResult';

import CityList from './IndexListView';

// 下面是数据部分
import DATA_JSON from './city-list.json';
const NOW_CITY_LIST = [
    {
        "name": "重庆",
        "spellName": "alidi",
        "id": "9",
        "fullname": "西藏/阿里",
        "sortLetters": "a"
    }
];
const ALL_CITY_LIST = DATA_JSON.allCityList;
const HOT_CITY_LIST = DATA_JSON.hotCityList;
const LAST_VISIT_CITY_LIST = DATA_JSON.lastVisitCityList;

export default class SimpleSelectCity extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            showSearchResult: false,
            keyword: '',
            searchResultList: [],
            allCityList: ALL_CITY_LIST,
            hotCityList: HOT_CITY_LIST,
            lastVisitCityList: LAST_VISIT_CITY_LIST,
            nowCityList: NOW_CITY_LIST
        };
    }
	 
    onChanegeTextKeyword(newVal) {
        // alert(newVal);
        if (newVal === '') {
            this.setState({showSearchResult: false});
        } else {
            // 在这里过滤数据结果
            let dataList = this.filterCityData(newVal);

            this.setState({keyword:newVal, showSearchResult: true, searchResultList: dataList});
        }
    }

    filterCityData(text) {
       console.log('search for list', text);

        let rst = [];
        for (let idx = 0; idx < ALL_CITY_LIST.length; idx++) {
            let item = ALL_CITY_LIST[idx];
            if (item.name.indexOf(text) === 0 || item.spellName.indexOf(text) === 0) {
                rst.push(item);
            }
        }
        return rst;
    }

    onSelectCity(cityJson) {
        if (this.state.showSearchResult) {
            this.setState({showSearchResult: false, keyword:''});
        }
        //alert('你选择了城市====》' + cityJson.id + '#####' + cityJson.name);
        this.props.navigator.pop();
        //向上一个页面回传所选择的城市名称及id
        DeviceEventEmitter.emit('name',cityJson.name);
        DeviceEventEmitter.emit('id',cityJson.id);
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

    render() {
        return (
            <View style={styles.container}>
                <Header initObj={{showReturn:true,backName:null,barTitle:"选择城市"}} navigator={this.props.navigator} />
                <SearchBox
                    keyword={this.state.keyword}
                    onChanegeTextKeyword={(vv) => {
                    this.onChanegeTextKeyword(vv)
                }}/>{this.state.showSearchResult
                    ? (<SearchResult
                        keyword={this.state.keyword}
                        onSelectCity={this.onSelectCity.bind(this)}
                        searchResultList={this.state.searchResultList}/>)
                    : (
                        <View style={{flex:1}}>
                            <CityList
                                onSelectCity={this.onSelectCity.bind(this)}
                                allCityList={this.state.allCityList}
                                hotCityList={this.state.hotCityList}
                                lastVisitCityList={this.state.lastVisitCityList}
                                nowCityList={this.state.nowCityList}/>
                        </View>
                    )}

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        // paddingTop: Platform.OS === 'ios' ? 20 : 0,  // 处理iOS状态栏
    },
    currentCity: {
        backgroundColor: '#ffffff',
        height: 20,
        margin: 5
    },
    currentCityText: {
        fontSize: 16
    }
});
