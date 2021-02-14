import { createStore, applyMiddleware } from 'redux';
import { notesReducer } from './store/notesReducer';
import thunk from 'redux-thunk';

export const store = createStore(notesReducer, applyMiddleware(thunk));