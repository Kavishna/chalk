import React, { Component } from "react";
import NoteList from "./NoteList/NoteList";
import "./App.css";

export class App extends Component {
  state = {
    notes: [
      {
        id: 1,
        title: "Sample Text",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, quasi!",
      },
    ],
    edit: false,
    index: null,
    add: false,
  };

  addNote = () => {
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    const notes = [...this.state.notes, { title: title, content: content }];
    title && content && this.setState({ notes: notes, add: false });
  };

  addNoteHandler = () => {
    this.setState({ add: !this.state.add });
  };

  editNoteHandler = (index) => {
    this.setState({ edit: !this.state.edit, index: index });
  };

  editNote = (index) => {
    const title = document.getElementById("notetitle").value;
    const content = document.getElementById("notecontent").value;

    const notes = [...this.state.notes];
    notes[index] = { title: title, content: content };
    this.setState({ notes: notes, edit: !this.state.edit });
  };

  deleteNoteHandler = (index) => {
    const notes = [...this.state.notes];
    notes.splice(index, 1);
    this.setState({ notes: notes });
  };

  render() {
    return (
      <div>
        <h1>CHALK</h1>
        <div>
          <NoteList
            notes={this.state.notes}
            noteindex={this.state.index}
            edit={this.state.edit}
            editnote={this.editNoteHandler}
            processedit={this.editNote}
            add={this.state.add}
            addnote={this.addNoteHandler}
            processadd={this.addNote}
            delete={this.deleteNoteHandler}
          />
        </div>
      </div>
    );
  }
}

export default App;
