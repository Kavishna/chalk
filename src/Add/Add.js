import React from "react";
import "./add.css";
import AddNote from "../AddNote/AddNote";

function Add(props) {
  return props.add ? (
    <AddNote processadd={props.processadd} addnote={props.addnote} />
  ) : (
    <div className="add">
      <button onClick={props.addnote} disabled={props.edit}>
        <i class="fas fa-plus"></i>
      </button>
    </div>
  );
}

export default Add;
