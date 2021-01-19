import React from "react";
import "./Edit.css";

function Edit({ notes, editnote, id, updatecontent, updatetitle }) {
  return (
    <div className="edit">
      <input
        onChange={(e) => updatetitle(id, e.target.value)}
        value={notes[id].title}
        type="text"
      />
      <textarea
        onChange={(e) => updatecontent(id, e.target.value)}
        cols="30"
        rows="10"
        value={notes[id].content}
      ></textarea>
      <div>
        <button onClick={editnote}>
          <i class="fas fa-check"></i>
        </button>
      </div>
    </div>
  );
}

export default Edit;
