import React from "react";

const InputForm = ({todo, onAddInputChange, onAddFormSubmit}) => {
  return(
  <form onSubmit={onAddFormSubmit}>
    <input name="todo" type ="text" placeholder="create new todo!"
    value={todo} onChange={onAddInputChange}/>
    <button>＋</button>
  </form>
  )
}

export default InputForm;