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

export default class Glass extends React.Component {
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

	render () {
		const {navigation} = this.props;
		const answer2 = navigation.getParam('answer2', '');

		return (
      		<View style={styles.container}>
        		<ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        			<View style={styles.answersContainer}>
            			<Text style={styles.answers}>{JSON.stringify(answer2)}</Text>
          			</View>
          			<View style={styles.questionsContainer}>
            			<Text style={styles.questions}>Pick a glass to drink from:</Text>
          			</View>
          			<View style={styles.buttonContainer}>
            			<FlatList 
              			data={[{key: 'Collins'}, {key: 'Highball'}, {key: 'Lowball'}, {key: 'Pint'}]} 
              			keyExtractor={this._keyExtractor} 
              			renderItem={({item}) => <TouchableHighlight onPress={(event) => { this.props.navigation.navigate('Results', {answer2: item.key}) }}
              			style={styles.touchable}>
                			<View style={styles.button}> 
                  				<Text style={styles.option}>{item.key}</Text>
                			</View>
              			</TouchableHighlight>}
            			/>
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
  touchable: {
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    borderRadius: 200,
    width: 150
  },
  button: {
    backgroundColor: "rgba(0,0,0,0.3)",
    borderColor: "white",
    borderRadius: 100,
    height: 140,
    width: 140,
    flex: 1,
    justifyContent: "center",
    marginBottom: 10
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center"
  },
  questions: {
    fontSize: 28,
    alignItems: "center",
    color: "white",
    marginBottom: 20
  },
  option: {
    fontSize: 24,
    textAlign: "center",
    color: "white"
  },
  answersContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "white",
    marginBottom: 10
  },
  answers: {
    fontSize: 24,
    alignItems: "center",
    color: "white"
  },
});
