import React from "react";
import Edit from "../Edit/Edit";
import "./Note.css";

function Note(props) {
  return props.edit && props.noteindex === props.id ? (
    <Edit
      id={props.id}
      notes={props.notes}
      editnote={props.editnote}
      processedit={props.processedit}
    />
  ) : (
    <div className="note">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <div>
        <button onClick={props.delete} disabled={props.edit || props.add}>
          <i class="fas fa-trash"></i>
        </button>
        <button onClick={props.editnote} disabled={props.edit || props.add}>
          <i class="fas fa-edit"></i>
        </button>
      </div>
    </div>
  );
}

export default Note;
