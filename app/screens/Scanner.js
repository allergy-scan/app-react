/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import Camera from 'react-native-camera';

export default class Scanner extends Component<{}> {
  onBarCodeRead = (data) => {
    if (this.barcodeFound)
      return;
    this.barcodeFound = true;

    const { navigate } = this.props.navigation;
    
    const type = data.type
    const code = data.data

    navigate('Product', {
      code
    })

    setTimeout(() => {
      this.barcodeFound = false
    }, 1500)
  }

  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.camera}
          onBarCodeRead={this.onBarCodeRead}
          aspect={Camera.constants.Aspect.fill}>
        </Camera>
        <View
          style={styles.overlay}>
          <Text
            style={styles.touchToFocus}>
            Touch to focus
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  camera: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  overlay: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: 'absolute',
    alignItems: 'center'
  },
  touchToFocus: {
    bottom: 0,
    color: '#fff',
    textShadowColor: '#000',
    textShadowOffset: {
      width: 2,
      height: 2
    },
    textShadowRadius: 2
  }
});