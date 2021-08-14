import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootPersistedReducer from './reducer';

export const store = createStore(
  rootPersistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export const persistedStore = persistStore(store);
