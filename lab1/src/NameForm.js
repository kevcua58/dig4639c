import React, { Component } from 'react';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      field: {},
      error: {},
      greeting: {},
      validForm: false,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  //Function that validates form
  validateForm() {
    let field = this.state.field;
    let error = {};
    let validForm = true;

    //Makes sure a name is entered
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

  handleChange(event) {
    let field = this.state.field;
    field[event.target.name] = event.target.value;
    this.setState({field:field});
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.validateForm()) {
      let field = {};
      let greeting = {};
      field["name"] = "";
      this.setState({field:field});
      greeting["name"] = "Hello, " + this.state.field.name + "!";
      this.setState({greeting:greeting});
      this.setState({validForm: true});
    }
  }

  render() {
    return (
      <div>
        {(!this.state.validForm)
        ?
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={this.state.field.name} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        :
        (<div class="greetingText">
          {this.state.greeting.name}
        </div>)
        }

        {(this.state.validForm)
        ?
        null
        :
        (<div class="errorText">
          {this.state.error.name}
        </div>)
        }
      </div>
    );
  }
}

export default NameForm;
