import React from 'react';
import './App.css';
import TodoFormContainer from './containers/TodoFormContainer'
import TodoListContainer from './containers/TodoListContainer'
import DoneTodoListContainer from './containers/DoneTodoListContainer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoListContainer />
        <TodoFormContainer />
        <DoneTodoListContainer />
      </header>
    </div>
  );
}

export default App;
