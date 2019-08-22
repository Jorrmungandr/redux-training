import React, { Component } from 'react';

export default class NewToDo extends Component {
  render(){
    return (
      // <form>
      //   <input type="text"/>
      // </form>
        <p>{this.props.messages}</p>
    )
  }
};
