import './App.css';
import React, {useState} from 'react';
import Todo from './components/Todo';
import New from './components/New';

function App() {

  const [todo, setTodo] = useState([{status : true, text : "create to-do list"}, {status : false, text : "eat lunch"}]);

  const addTodo = (newTodo) => {
    let todoCopy = [...todo];
    todoCopy.push(newTodo);
    setTodo(todoCopy);
  }
  
  
  return (
    <div className="App">
      < New addTodo = {addTodo} />
      < Todo todo = {todo} addTodo = {addTodo} setTodo = {setTodo} />
    </div>
  );
}
  

export default App;
