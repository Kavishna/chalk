import React, { Component } from "react";
import NoteList from "./NoteList/NoteList";
import "./App.css";

export class App extends Component {
  state = {
    notes: [
      {
        id: 1,
        title: "Mongoose API",
        content:
          "Mongoose provides a straight-forward, schema-based solution to model your application data.",
      },
      {
        id: 2,
        title: "The position Property",
        content:
          "The position property specifies the type of positioning method used for an element. ",
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

  updateTitleHandler = (index, data) => {
    const notes = [...this.state.notes];
    notes[index] = { title: data, content: this.state.notes[index].content };
    this.setState({ notes: notes });
  };

  updateContentHandler = (index, data) => {
    const notes = [...this.state.notes];
    notes[index] = { title: this.state.notes[index].title, content: data };
    this.setState({ notes: notes });
  };

  editNoteHandler = (index) => {
    this.setState({ edit: !this.state.edit, index: index });
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
            edit={this.state.edit}
            notes={this.state.notes}
            delete={this.deleteNoteHandler}
            editnote={this.editNoteHandler}
            updatecontent={this.updateContentHandler}
            updatetitle={this.updateTitleHandler}
            noteindex={this.state.index}
            addnote={this.addNoteHandler}
            addnewnote={this.addNote}
            add={this.state.add}
            updatetemptitle={this.updateTempTitle}
          />
        </div>
      </div>
    );
  }
}

export default App;
