import React from "react";
export default function Todo(props) {
    return (
      <li className="todo stack-small">
        <div className="c-cb">
          <input id="todo-0" type="checkbox" defaultChecked={true} />
          <label className="todo-label" htmlFor="todo-0">
            {props.name}
          </label>
        </div>
        
    </li>
    );
  }
  