import { Action, setNotes, setLoading } from "./notesActions";
import { Dispatch } from "redux";

export interface NotesState {
  notes: string[];
  isLoading: boolean;
}

const initialState: NotesState = {
  notes: [],
  isLoading: false,
};

export const notesReducer = (
  state: NotesState = initialState,
  action: Action
) => {
  switch (action.type) {
    case "ADD_NOTE": {
      return { ...state, notes: [...state.notes, action.payload] };
    }
    case "SET_NOTES": {
      return { ...state, notes: action.payload };
    }
    case "SET_LOADING": {
      return { ...state, isLoading: !state.isLoading };
    }
    default:
      return state;
  }
};

export const saveNotes = () => async (
  dispatch: Dispatch,
  getState: () => NotesState
) => {
  dispatch(setLoading());
  const notes = getState().notes;
  fetch("http://localhost:4000/notes", {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(notes),
  }).then((_) => dispatch(setLoading()));
};

export const loadNotes = () => async (dispatch: Dispatch) => {
  dispatch(setLoading());
  fetch("http://localhost:4000/notes")
    .then((res) => res.json())
    .then((notes) => {
      dispatch(setNotes(notes));
      dispatch(setLoading());
    });
};
