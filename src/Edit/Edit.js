import React from "react";
import "./Edit.css";

function Edit({ notes, editnote, id, processedit }) {
  return (
    <div className="edit">
      <input id="notetitle" defaultValue={notes[id].title} type="text" />
      <textarea
        id="notecontent"
        cols="30"
        rows="10"
        defaultValue={notes[id].content}
      ></textarea>
      <div>
        <button onClick={editnote}>
          <i class="fas fa-times"></i>
        </button>
        <button onClick={() => processedit(id)}>
          <i class="fas fa-check"></i>
        </button>
      </div>
    </div>
  );
}

export default Edit;
