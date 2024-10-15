import { useState } from "react";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const TodoItem = ({ text }) => {
    return <li>{text}</li>;
  };

  // event to track changes in realtime
  const handleChange = event => {
    setNewTodo(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
    setNewTodos("")
    console.log(todos)
  }

  return (
    <>
      <div>

        <h1>Simple to do list</h1>
        {/* no action in forms when using react use onSubmit instead */}
        <form onSubmit={handleSubmit}>
          <input className="todo-input"
          autoComplete="off"
          type="text"
          name="newTodo"
          placeholder="What needs to be done?"
          onChange={handleChange}
           />

          <button 
            type="submit"
            className="save-button">SAVE
          </button>
        </form>
        <div>
          <ol>
            {}
          </ol>
        </div>

      </div>
    </>


  );
}

export default App;
