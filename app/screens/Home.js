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
  TouchableHighlight,
  View,
  Button,
  Text
} from 'react-native';
import { Tabs, Tab, Icon, CheckBox } from 'react-native-elements'
import Scanner from "./Scanner"
import groups from "../lib/groups"
import App from "../App"

console.disableYellowBox = true;

export default class Home extends Component<{}> {
  state = {
    splash: true,
    checked: [],
    selectedTab: 'allergies'
  }

  static navigationOptions = ({ navigation }) => ({
    title: 'Allergy Scan',
  });

  onScanClick = () => {
    const { navigate } = this.props.navigation;

    setTimeout(() => {
      navigate('Scanner');
    }, 200)
  }

  onToggleOption = (name) => {
    const nextChecked = this.state.checked
    const index = this.state.checked.indexOf(name)
    if (index >= 0) {
      nextChecked.splice(index, 1)
    } else {
      nextChecked.push(name)
    }
    this.setState({
      checked: nextChecked
    })

    App.selectedGroups = nextChecked
    App.selectedIngredients = []
    App.selectedGroups.forEach(group => {
      App.selectedIngredients = App.selectedIngredients.concat(groups[group])
    })
  }

  changeTab = (selectedTab) => {
    this.setState({selectedTab})
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        splash: false
      })
    }, 500)
  }

  renderOptions = () => {
    return Object.keys(groups).map(name => {
      const isChecked = this.state.checked.indexOf(name) >= 0;
      return (
        <CheckBox
          key={name}
          onPress={() => this.onToggleOption(name)}
          checked={isChecked}
          title={name}
        />
      )
    })
  }

  render() {
    const { selectedTab } = this.state

    return (
      <Tabs style={styles.container}>
        <Tab
          titleStyle={{fontWeight: 'bold', fontSize: 10}}
          selectedTitleStyle={{marginTop: -1, marginBottom: 6}}
          selected={selectedTab === 'allergies'}
          title={selectedTab === 'allergies' ? 'ALLERGIES' : null}
          renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={'#5e6977'} name='check' size={24} />}
          renderSelectedIcon={() => <Icon color={'#6296f9'} name='check' size={24} />}
          onPress={() => this.changeTab('allergies')}>
          <View>{this.renderOptions()}</View>
        </Tab>

        <Tab
          titleStyle={{fontWeight: 'bold', fontSize: 10}}
          selectedTitleStyle={{marginTop: -1, marginBottom: 6}}
          selected={selectedTab === 'scan'}
          title={selectedTab === 'scan' ? 'SCAN' : null}
          renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={'#5e6977'} name='camera' type='font-awesome' size={24} />}
          renderSelectedIcon={() => <Icon color={'#6296f9'} name='camera' type='font-awesome' size={24} />}
          onPress={() => this.changeTab('scan')}>
          {!this.state.splash && <Scanner
            navigation={this.props.navigation}
          />}
        </Tab>
      </Tabs>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    display: 'flex'
  }
});