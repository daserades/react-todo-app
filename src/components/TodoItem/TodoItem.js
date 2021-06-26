import React from "react";
import "./TodoItem.css";
import { useState } from "react";

function Todo(props) {

  const { content,id } = props;
  const [ isDone, setIsDone ] = useState(false);

  const isDoneStyle ={
    textDecoration: isDone ? "line-through" : ""
  };


  const toggleIsDone = () => setIsDone(!isDone);


  return (      
      <div style={isDoneStyle} onClick={toggleIsDone}>
        {content}
        <button id="buttonDelete" onClick={() => props.onDelete(id)} className="btn btn-danger">
          Sil
        </button>
      </div>)
}

export default Todo;
