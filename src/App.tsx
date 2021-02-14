import React from "react";
import "./App.css";
import { NewNoteInput } from "./components/NewNoteInput";
import { useSelector, useDispatch } from "react-redux";
import { NotesState, saveNotes, loadNotes } from "./store/notesReducer";
import { addNote } from "./store/notesActions";

function App() {
  const [notes, isLoading] = useSelector((state: NotesState) => [
    state.notes,
    state.isLoading,
  ]);
  const dispatch = useDispatch();

  const onAddNote = (note: string): void => {
    dispatch(addNote(note));
  };

  const onSave = (): void => {
    dispatch(saveNotes());
  };

  const onLoad = (): void => {
    dispatch(loadNotes());
  };

  return (
    <>
      <NewNoteInput addNote={onAddNote} />
      <hr />
      <ul>
        {notes.map((note: string, idx: number) => (
          <li key={idx}>{note}</li>
        ))}
      </ul>
      <hr />
      <button onClick={onSave}>Save</button>
      <button onClick={onLoad}>Load</button>
      {isLoading ? <p>Loading...</p> : null}
    </>
  );
}

export default App;
