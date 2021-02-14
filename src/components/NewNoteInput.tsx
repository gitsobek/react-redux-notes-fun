import React, { useState, ChangeEvent } from "react";

interface NewNoteInputProps {
  addNote(note: string): void;
}

export const NewNoteInput: React.FC<NewNoteInputProps> = ({ addNote }) => {
  const [note, setNote] = useState("");

  const updateNote = (event: ChangeEvent<HTMLInputElement>): void => {
    setNote(event.target.value);
  };

  const onAddNoteClick = (): void => {
    addNote(note);
    setNote("");
  };

  return (
    <div>
      <input
        onChange={updateNote}
        value={note}
        type="text"
        name="note"
        placeholder="Note"
      />
      <button onClick={onAddNoteClick}>Add note</button>
    </div>
  );
};
