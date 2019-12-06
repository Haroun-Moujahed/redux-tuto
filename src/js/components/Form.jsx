import React, { Component } from "react";
import { connect } from "react-redux";
import addArticle from "../actions/indexActions";

const mapActionsToProps = {
  addArticle: addArticle
};

class ConnectedForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { title } = this.state;
    title
      ? this.props.addArticle({ title, id: Date.now(), isComplete: false })
      : alert("empty task");
    this.setState({ title: "" });
  };
  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit">SAVE</button>
      </form>
    );
  }
}

const Form = connect(null, mapActionsToProps)(ConnectedForm);
export default Form;
