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

export default class DrinkItem extends React.Component {
	render() {
		return (
			<View>	
				<View>
					<Text>{this.props.strDrink}</Text>
				</View>
			</View>
		);
	}
}