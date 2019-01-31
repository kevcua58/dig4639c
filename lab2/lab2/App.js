import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, TextInput, Button } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      field: {},
      error: {}
    }
    this.onChange = this.onChange.bind(this);
    this.onPress = this.onPress.bind(this);
  }

  validateForm() {
    let field = this.state.field;
    let error = {};
    let validForm = true;

    //Checks for letters only
    if (!field["name"]) {
      validForm = false;
      error["name"] = "Please enter a name.";
    }

    //Checks for letters only
    if (typeof field["name"] !== "undefined") {
      if (!field["name"].match(/^[A-Za-z ]*$/)) {
        validForm = false;
        error["name"] = "Please enter letters only.";
      }
    }

    this.setState({
      error:error
    });
    return validForm;
  }

  onChange(event) {
    let field = this.state.field;
    field[event.target.name] = event.target.value;
    this.setState({field});

    console.log(event);
  }

  onPress(event) {
    event.preventDefault();

    if (this.validateForm()) {
      let field = {};
      field["name"] = "";
      this.setState({field:field});
      alert('Hello, ' + this.state.field.name + '!');
    }

    console.log("Pressed");
  }

  render() {
    return (
      <View style={styles.container} flexDirection="column" alignItems="stretch">
        <View>
          <TextInput style={styles.textInput} name="name" value={this.state.field.name} onChangeText={this.onChange} placeholder="Name">
          </TextInput>
        </View>
        <TouchableOpacity style={styles.buttonStyle} onPress={this.onPress}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        <View>
            <Text style={styles.errorText}>{this.state.error.name}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonText: {
    color: "white",
    fontSize: 40
  },

  errorText: {
    color: "red",
  },

  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    height: 75,
    margin: 30,
  },

  textInput: {
    margin: 30,
    height: 75,
    fontSize: 20
  },

  defaultText: {
    fontSize: 20
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
