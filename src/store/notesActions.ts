export type AddNoteAction = { type: "ADD_NOTE"; payload: string };

export type SetNotesAction = { type: "SET_NOTES"; payload: string[] };

export type SetLoadingAction = { type: "SET_LOADING" };

export const addNote = (note: string): AddNoteAction => ({
  type: "ADD_NOTE",
  payload: note,
});

export const setNotes = (notes: string[]): SetNotesAction => ({
  type: "SET_NOTES",
  payload: notes,
});

export const setLoading = (): SetLoadingAction => ({
  type: "SET_LOADING",
});

export type Action = AddNoteAction | SetNotesAction | SetLoadingAction;
