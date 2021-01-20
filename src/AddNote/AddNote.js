import React from "react";
import "./AddNote.css";

function AddNote(props) {
  return (
    <div className="addnote">
      <input id="title" type="text" />
      <textarea id="content" cols="30" rows="10"></textarea>
      <div>
        <button onClick={props.addnote}>
          <i class="fas fa-times"></i>
        </button>
        <button onClick={props.processadd}>
          <i class="fas fa-check"></i>
        </button>
      </div>
    </div>
  );
}

export default AddNote;
