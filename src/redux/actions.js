import { ADD } from './types.js';

const actions = {
  addTodo: (message) => {
    return {
      type: ADD,
      message,
    }
  }
};

export default actions;