import React, { Component } from 'react';
import {
  Platform,
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  ScrollView,
  TouchableOpacity,
  Image,
  View
} from 'react-native';
import { Card, List, ListItem, Button } from 'react-native-elements'
import App from "../App"

export default class Home extends Component<{}> {
  state = {
    matches: [],
    code: undefined,
    product: {
      desc: "N/A",
      image: undefined,
      ingredients: [],
      nutrition: []
    }
  }

  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.title}`,
  });

  componentWillMount = () => {
    this.props.navigation.setParams({
      title: "Unknown"
    })
  }

  componentDidMount = () => {
    const { code } = this.props.navigation.state.params

    this.setState({
      code
    })

    fetch('http://192.168.0.104:8080/api/upc/' + code)
      .then(res => res.json())
      .then(json => {
        const selectedIngredients = App.selectedIngredients
        const matches = new Set()

        json.ingredients.forEach(ingredient => {
          selectedIngredients.forEach(partial => {
            if (ingredient.toLowerCase().indexOf(partial.toLowerCase()) >= 0) {
              matches.add(ingredient)
            }
          })
        })


        this.setState({
          matches,
          product: json
        })

        this.props.navigation.setParams({
          title: json.desc
        })
      })
  }

  renderIngredients = () => {
    return Array.from(this.state.matches).map(item => {
      return (
        <ListItem
          key={item}
          title={item}/>
      )
    })
  }

  render() {
    const { code, flash } = this.state
    const { desc, image } = this.state.product

    return (
      <View style={styles.wrapper}>
        <ScrollView style={styles.container}>

          <Card
            style={styles.card}
            image={{uri: image}}>
          </Card>
          <Text style={styles.title}>Matched Ingredients</Text>
          <List style={styles.list}>
            {this.renderIngredients()}
          </List>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    height: "100%"
  },
  flash: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#fff'
  },
  container: {
    backgroundColor: '#fff'
  },
  title: {
    fontWeight: 'bold'
  },
  list: {
    padding: 0
  },
  card: {
    margin: 0
  }
});