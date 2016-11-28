import React, { Component } from 'react'

export default class AddCommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      title: null,
      text: null
    };
  }

  handleChange = (event) => {
    const stateDiff = {};
    //ок, но я б сделал с помощью того-же карринга, вместо ev.target.name
    stateDiff[event.target.name] = event.target.value;
    this.setState(stateDiff);
  }

  submitFormHandler = (e) => {
    e.preventDefault();
    console.log( this.state );
  }

  render() {
    return (
      <div>
        <form className="ui form" onSubmit={this.submitFormHandler}>
          <div className="field">
            <label>Name</label>
            <input type="text" name="user" placeholder="First Name" required onChange={this.handleChange} />
          </div>
          <div className="field">
            <label>Title</label>
            <input type="text" name="title" placeholder="Title" onChange={this.handleChange} />
          </div>
          <div className="field">
            <label>Text</label>
            <input type="text" name="text" placeholder="Text" required onChange={this.handleChange} />
          </div>
          <button className="ui button" type="submit">Submit</button>
        </form>
      </div>
    )
  }
}
