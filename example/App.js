/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import BroadcastView from 'react-native-broadcast';

export default class App extends Component<{}> {
  state = {
    camtype: 'front', //frond | back
    publishUrl: 'rtmp://huutq88.com/live/' // set publish = '' to stop broad
}

  render() {
    return (
      <View style={styles.container}>
        <BroadcastView
          publish={this.state.publishUrl}
          cameraPosition={this.state.camtype}
          style={{ height: 300 }}
        />
        <TouchableOpacity onPress={this.onOpen} style={{ height: 45, width: 150, backgroundColor: 'red' }}>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
