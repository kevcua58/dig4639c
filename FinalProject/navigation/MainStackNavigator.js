import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import Flavor from '../screens/Flavor';
import Glass from '../screens/Glass';
import Results from '../screens/Results';

const HomeStack = createStackNavigator({
	Home: HomeScreen,
	Flavors: Flavor,
	Glasses: Glass,
	Results: Results
}, {initialRouteName:"Home"});

export default HomeStack;