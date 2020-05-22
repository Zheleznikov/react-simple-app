import React, { Component } from "react";

class Form extends Component {
  initialState = {
    name: "",
    power: "",
  };

  state = this.initialState;

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  submitForm = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  };

  render() {
    const { name, power } = this.state;
    return (
      <form>
        <label htmlFor="name">Герой</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={this.handleChange}
        />

        <label htmlFor="power">Супер-сила</label>
        <input
          type="text"
          name="power"
          id="power"
          value={power}
          onChange={this.handleChange}
        />
        <input type="button" value="Добавить" onClick={this.submitForm} />
      </form>
    );
  }
}

export default Form;
