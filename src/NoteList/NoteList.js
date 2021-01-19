import React from "react";
import Note from "../Note/Note";
import "./NoteList.css";
import Add from "../Add/Add";

function NoteList(props) {
  const notes = props.notes.map((note, index) => (
    <Note
      delete={() => props.delete(index)}
      key={index}
      title={note.title}
      content={note.content}
      editnote={() => props.editnote(index)}
      edit={props.edit}
      updatecontent={props.updatecontent}
      updatetitle={props.updatetitle}
      notes={props.notes}
      id={index}
      noteindex={props.noteindex}
      addnote={props.addnote}
    />
  ));

  return (
    <div className="notelist">
      {notes}
      <Add
        addnote={props.addnote}
        add={props.add}
        addnewnote={props.addnewnote}
        edit={props.edit}
      />
    </div>
  );
}

export default NoteList;
