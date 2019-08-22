import React, { Component } from 'react';
import NewToDo from '../../components/NewToDo/NewToDo.jsx';
import DisplayToDo from '../../components/DisplayToDo/DisplayToDo.jsx';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import toDoReducer from '../../redux/reducers.js';
import actions from '../../redux/actions.js';

const store = createStore(toDoReducer);

const mapStateToProps = (state) => {
  return {
    messages: state,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewToDo: (message) => {
      dispatch(actions.addToDo(message));
    }
  }
}

const NewWrapper = connect(mapStateToProps, mapDispatchToProps)(NewToDo);
const DisplayWrapper = connect(mapStateToProps, mapDispatchToProps)(DisplayToDo);


export default class Home extends Component {
  render() {
    return(
      <section className="home">
        <Provider store={store}>
          <NewWrapper />
          <DisplayWrapper />
        </Provider>
      </section>
    );
  }
};
