import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  _gotoScreen = (key) => {
    console.log("Going to " + key);
  }
  
  render() {
    const {navigate} = this.props.navigation;
    const articuno = require('../assets/images/mystic.jpg');
    const moltres = require('../assets/images/valor.jpg');
    const zapdos = require('../assets/images/instinct.jpg');

    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.getStartedContainer}>
            <Text style={styles.getStartedText}>Choose your Pokemon GO team:</Text>
            <FlatList
             data={[{key: 'Mystic',image: articuno}, {key: 'Valor',image: moltres}, 
             {key: 'Instinct',image: zapdos}]}
             keyExtractor={this._keyExtractor}
              renderItem={({item}) => <TouchableOpacity onPress={(event) => { this.props.navigation.navigate('Details', {goTeam: item.key}) }}>
                <Image source={item.image} style={{width:250,height:250}} />
              </TouchableOpacity>}
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
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  getStartedText: {
    fontSize: 20,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 15,
  },
});