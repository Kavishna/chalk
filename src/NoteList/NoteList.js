import React from "react";
import Note from "../Note/Note";
import "./NoteList.css";
import Add from "../Add/Add";

function NoteList(props) {
  const notes = props.notes.map((note, index) => (
    <Note
      key={index}
      id={index}
      notes={props.notes}
      noteindex={props.noteindex}
      title={note.title}
      content={note.content}
      edit={props.edit}
      editnote={() => props.editnote(index)}
      processedit={props.processedit}
      add={props.add}
      addnote={props.addnote}
      delete={() => props.delete(index)}
    />
  ));

  return (
    <div className="notelist">
      {notes}
      <Add
        add={props.add}
        addnote={props.addnote}
        processadd={props.processadd}
        edit={props.edit}
      />
    </div>
  );
}

export default NoteList;
