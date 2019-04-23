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

export default class HomeScreen extends React.Component {
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

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.questionsContainer}>
            <Text style={styles.questions}>Choose your spirit:</Text>
          </View>
          <View style={styles.buttonContainer}>
            <FlatList 
              data={[{key: 'Vodka'}, {key: 'Rum'}, {key: 'Whiskey'}, {key: 'Tequila'}]} 
              keyExtractor={this._keyExtractor} 
              renderItem={({item}) => <TouchableHighlight onPress={(event) => { this.props.navigation.navigate('Flavors', {answer1: item.key}) }}
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
});
