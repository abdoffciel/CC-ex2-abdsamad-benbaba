// store.jsx
import { createStore } from 'redux';
import reducer from './Slice';

const store = createStore(reducer);

export default store;
