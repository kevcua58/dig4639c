import React from 'react';
import { 
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  FlatList,
  Text,
  TouchableHighlight,
  View,
  Header, 
} from 'react-native';

import DrinkItem from '../components/DrinkItem';
import Cocktail from '../components/Cocktail';

export default class Result extends React.Component {
  static navigationOptions = {
    title: "Sipped Sense",
    headerStyle: {
      backgroundColor: "#5d0ef0"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
      fontSize: 22
    }
  };

  constructor(props) {
  	super(props);
  	this.state = { data: [] };
  }

  // componentDidMount() {
  // 	this._refreshData();
  // }

  _renderItem = ({item}) => {
  	return (
  		<DrinkItem
  			coverURL={item.strDrinkThumb} 
  			drink={item.key}
  		/>
  	);
  };

  _addKeysToDrinks = drinks => {
  	return drinks.map(drink => {
  		return Object.assign(drink, {key: drink.strDrink})
  	});
  };

  // _refreshData = () => {
  // 	Cocktail.fetchDrinks().then(drinks => {
  // 		this.setState({ data: this._addKeysToDrinks(drinks) });
  // 	})
  // };

	render () {
		return (
      		<View style={styles.container}>
        		<ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          			<View style={styles.questionsContainer}>
            			<Text style={styles.questions}>Here are your options:</Text>
          			</View>
          			<View>
          				<FlatList data={this.state.data} renderItem={this._renderItem} />
          			</View>
        		</ScrollView>
      		</View>
    	);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bc2a77',
  },
  contentContainer: {
    alignItems: "center",
    paddingTop: 30,
  },
  questions: {
    fontSize: 28,
    alignItems: "center",
    color: "white",
    marginBottom: 20
  },
});
