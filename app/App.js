import React, { Component } from 'react';
import {
  StackNavigator,
} from 'react-navigation';
import Home from "./screens/Home"
import Scanner from "./screens/Scanner"
import Product from "./screens/Product"

export const selectedGroups = []
export const selectedIngredients = []

const App = StackNavigator({
  Home: { screen: Home },
  Scanner: { screen: Scanner },
  Product: { screen: Product }
});

export default App;