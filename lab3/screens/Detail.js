import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class Detail extends React.Component {
	render () {
		const {navigation} = this.props;
		const goTeam = navigation.getParam('goTeam', '');

		return (
			<View style={styles.container}>
				<Text style={styles.getStartedText}>Your Pokemon GO team: {JSON.stringify(goTeam)}</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  getStartedText: {
    fontSize: 20,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 15,
  },
});