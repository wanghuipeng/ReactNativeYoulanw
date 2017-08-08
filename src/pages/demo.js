import React, { Component } from 'react';
import {StyleSheet,Text,View,Image,TextInput} from 'react-native';
import SimpleSelectCity from '../components/city/SelectCity';

class Demo extends Component {
  render() {
    return (
      <SimpleSelectCity navigator={this.props.navigator} />
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1,backgroundColor: '#F5FCFF'}
});

export default Demo;