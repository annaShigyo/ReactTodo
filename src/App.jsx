import React, { useState ,useEffect} from "react";
import Title from "./Components/Title";
import InputForm from "./Components/InputForm";

const App = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");

    if(savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  const [todo, setTodo] = useState("");
  const [doing, setDoing] = useState(false);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])

  const handleAddInputChange = (e) => {
    setTodo(e.target.value);
  };

  const handleAddFormSubmit = (e) => {
    e.preventDefault();
    if (todo !== "") {
      setTodos([
        ...todos,
        {
          key: todos.length + Math.random(),
          text: todo.trim(),
          doing: doing,
        }
      ]);
      setTodo("");
    }
  };

  const handleDeleteTodo = (key) => {
    const removeItem = todos.filter((todo) => {
      return todo.key !== key;
    })
    setTodos(removeItem);
  }

  const handleDoingChange = (key) => {
    const targetTodo = todos.find((todo) => {
      return todo.key === key;
    })
    targetTodo.doing = targetTodo.doing ? false : true;
    console.log(targetTodo)
  }

  return (
    <div className="App">
      <Title />
      <InputForm
        todo={todo}
        onAddInputChange={handleAddInputChange}
        onAddFormSubmit={handleAddFormSubmit}
      />
      <ul className="todo-list">
        {todos.map((todo) => (
          <>
            <li key={todo.key}>{todo.text}</li>
            <button onClick={() => handleDoingChange(todo.key)}>{todo.doing ? "着手" : "未着手"}</button>
            <button>Edit</button>
            <button onClick={() => handleDeleteTodo(todo.key)}>Delete</button>
          </>
        ))}
      </ul>
    </div>
  );
};

export default App;