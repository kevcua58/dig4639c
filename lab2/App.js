import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, TextInput, Button } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      field: {},
      error: {},
      greeting: {},
      validForm: false,
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

  onChange(name) {
    this.state.field.name = name;
    }

  onPress(event) {
    event.preventDefault();

    if (this.validateForm()) {
      let field = {};
      let greeting = {};
      field["name"] = "";
      greeting["name"] = "Hello, " + this.state.field.name + "!";
      this.setState({
        field:field,
        greeting:greeting,
        validForm: true
      });

    }

    console.log("Pressed");
  }

  render() {
    return (
      <View style={styles.container} flexDirection="column" alignItems="stretch">
        <View>
          {(!this.state.validForm)
          ?
          <View>
            <TextInput style={styles.textInput} name="name" onChangeText={this.onChange} placeholder="Enter your name">
            </TextInput>
            <TouchableOpacity style={styles.buttonStyle} onPress={this.onPress}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </View>
          :
          (<Text style={styles.greetingText}>{this.state.greeting.name}</Text>)
          }
        </View>

        <View>
          {(this.state.validForm)
          ?
          null
          :
          (<Text style={styles.errorText}>{this.state.error.name}</Text>)
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonText: {
    color: "white",
    fontSize: 30
  },

  greetingText: {
    color: "green",
    fontSize: 30,
    margin: 100,
  },

  errorText: {
    color: "red",
    fontSize: 25,
    marginLeft: 30
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
  },
});
