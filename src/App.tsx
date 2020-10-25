import React from 'react';
import { Switch, Route } from 'react-router-dom'
import TodoList from './pages/TodoList'

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <TodoList />
      </Route>
    </Switch>
  );
}

export default App;
