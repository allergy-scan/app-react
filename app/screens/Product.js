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
import { Card, List, ListItem, Button, Icon } from 'react-native-elements'
import App from "../App"

const FoodStatuses = {
  Loading: 0,
  CanEat: 1,
  CannotEat: 2,
  Unknown: 3
}

export default class Home extends Component<{}> {
  state = {
    matches: [],
    flashDismissed: false,
    code: undefined,
    product: {
      desc: "N/A",
      image: undefined,
      ingredients: [],
      nutrition: []
    }
  }

  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.title || ''}`,
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

    fetch('http://10.141.128.134:8080/api/upc/' + code)
      .then(res => res.json())
      .then(json => {
        const selectedIngredients = App.selectedIngredients
        const matches = []

        json.ingredients.forEach(ingredient => {
          selectedIngredients.forEach(partial => {
            if (ingredient.toLowerCase().indexOf(partial.toLowerCase()) >= 0) {
              matches.push(ingredient)
            }
          })
        })

        this.setState({
          matches,
          product: json,
          foodStatus: matches.length > 0 ? FoodStatuses.CannotEat : FoodStatuses.CanEat
        })

        this.props.navigation.setParams({
          title: json.desc
        })
      })
      .catch(err => {
        alert("Unable to resolve backend")
      })
  }

  dismissFlash = () => {
    this.setState({
      flashDismissed: true
    })
  }

  renderFlash = () => {
    const { foodStatus } = this.state

    let msg = (
      <Text>
        Loading
        <Text></Text>
      </Text>
    )

    if (foodStatus === FoodStatuses.CanEat) {
      msg = (
        <View>
          <Icon
            name='check-circle'
            type='font-awesome'
            color='green'
            size={80}
          />
          <Text>No allergens found.</Text>
        </View>
      )
    } else if (foodStatus === FoodStatuses.CannotEat) {
      msg = (
        <View>
          <Icon
            name='exclamation-circle'
            type='font-awesome'
            color='#c60017'
            size={80}
          />
          <Text>Allergens found!</Text>
        </View>
      )
    } else if (foodStatus === FoodStatuses.Unknown) {
      msg = (
        <View>
          <Icon
            name='question-circle'
            type='font-awesome'
            color='#517fa4'
            size={80}
          />
          <Text>Unable to find that item...</Text>
        </View>
      )
    }


    if (this.state.flashDismissed)
      return null

    return (
      <TouchableHighlight onPress={this.dismissFlash} style={styles.flash}>
        {msg}
      </TouchableHighlight>
    )
  }

  renderIngredients = () => {
    return Array.from(new Set(this.state.matches)).map(item => {
      return (
        <ListItem
          titleStyle={styles.badIngred}
          key={item}
          title={item}/>
      )
    })
  }

  renderAllIngredients = () => {
    return this.state.product.ingredients.map(item => {
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
          <View style={styles.allIngredTitle}>
            <Text>All Ingredients</Text>
            <List style={styles.list}>
              {this.renderAllIngredients()}
            </List>
          </View>
        </ScrollView>

        {!this.flashDismissed && this.renderFlash()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    height: "100%"
  },
  badIngred: {
    color: 'red'
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
  allIngredTitle: {
    marginTop: 20
  },
  list: {
    padding: 0
  },
  card: {
    margin: 0
  }
});