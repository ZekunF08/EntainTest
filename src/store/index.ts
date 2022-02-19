import {Action, applyMiddleware, createStore} from 'redux';
import rootReducer from './reducers/rootReducer';
export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
