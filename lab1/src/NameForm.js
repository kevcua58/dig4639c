import React, { Component } from 'react';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      field: {},
      error: {}
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
    this.setState({field});
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.validateForm()) {
      let field = {};
      field["name"] = "";
      this.setState({field:field});
      alert('Hello, ' + this.state.field.name + '!');
    }
  }

  render() {
    const style = {
      color: 'red'
    };

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={this.state.field.name} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
        <div style={style}>
          {this.state.error.name}
        </div>
      </form>
    );
  }
}

export default NameForm;
